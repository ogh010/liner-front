<template>
    <div class="content">
        <banner>
            <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
        </banner>
        <div class="inner input">
            <div class="inputBox">
                <span class="label" >신청일</span>
                <div>
                    <input type="date" class="dateinput" v-model="reqData.order.serviceTime">
                </div>
            </div>
            <div class="inputBox">
                <span class="label">장소</span>
                <div class="selectBox">
                    <div>
                        <select name="choice" @change="changePlaces($event)" >
                            <option v-for="(brand, index) in getBrands" :key="index" :value="index">{{brand.name}}</option>
                        </select>
                    </div>
                    <div>
                        <select name="choice" v-model="reqData.order.place">
                            <option v-for="(place, index) in places" :key="index" :value="place.name" >{{place.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="inputBox time">
                <span class="label">이용시간</span>
                <div class="selectBox">
                    <div>
                        <span class="txt">시작시간</span>
                        <vue-timepicker 
                        hide-disabled-minutes 
                        hide-clear-button 
                        v-model="reqData.order.beginTime" 
                        placeholder="시작시간"
                        ></vue-timepicker>
                    </div>
                    <div>
                        <span class="txt">종료시간</span>
                        <vue-timepicker 
                        hide-disabled-minutes 
                        hide-clear-button 
                        v-model="reqData.order.endTime"
                        placeholder="종료시간"></vue-timepicker>
                    </div>
                </div>
            </div>
            <div class="inputBox">
                <span class="label">이름</span>
                <div>
                    <input type="text" v-model="reqData.order.name" placeholder="이름을 입력해주세요">
                </div>
            </div>
            <div class="inputBox call">
                <span class="label">연락처</span>
                <div>
                    <input type="number" 
                    maxlength="11" 
                    v-model="reqData.order.phone" 
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    placeholder="-를 제외하고 입력해주세요">
                    <!-- <span class="ico" v-bind:class="{'on':this.phone.length == 11}"></span> -->
                </div>
            </div>
            <!-- <div class="inputBox call ch " v-bind:class="{'disabled':this.phone.length !== 11}">
                <span class="label">인증번호</span>
                <div>
                    <input type="number" :disabled="{'disabled':this.phone.length !== 11}">
                    <span class="ico"></span>
                </div>
            </div> -->
            <div class="etc">
                <span class="label">기타사항 </span>
                <div>
                    <textarea name="etc" rows="3" cols="33" placeholder="기타 사항을 입력해주세요" v-model="reqData.order.desc"></textarea>
                </div>
            </div>
            <div class="btnBox">
                <button type="button" class="btn" @click="moveMain()">취소</button>
                <button type="button" class="btn" @click="move()">구매 신청</button>
            </div>
        </div>
        <Popup v-show="is_show" @clickEvent="popupEvent()">
            <p slot="popupTxt" v-if="timePopup">신청일을 입력해주세요</p>
            <p slot="popupTxt" v-if="inputPopup">모두 입력해주세요</p>
        </Popup>
    </div>
</template>
<script>
import { mapMutations, mapGetters} from 'vuex'
import banner from '../components/banner.vue'
import searchPlaceService from '../service/searchPlaceService'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import Popup from '../components/popup.vue'
import moment from 'moment'

export default {
    components:{ banner, VueTimepicker, Popup},
    data() {
        return {
            disableFlag:true,
            is_show:false,
            timePopup:false,
            inputPopup:false,
            places: [],
            reqData: {
                order : {
                    serviceTime: moment().format('YYYY-MM-DD'), // 서비스 신청일 
                    brand: '',
                    place: '',
                    beginTime:'18:00',
                    endTime:'00:00',
                    name:"",
                    phone:"",
                    desc:"",
                }
            },
        }
    },
    created() {
        this.searchPlace() // 브랜드 & 장소 받아오기
    },
    computed:{
        ...mapGetters('main', ['getBrands']) // 브랜드 & 장소
    },
    methods: {
        ...mapMutations('main',['SET_BRANDS', 'SET_REQ_DATA']), // 브랜드 세팅
        move(){
            if (!this.reqData.order.serviceTime) { this.is_show=true; this.timePopup = true } // 신청일 유효성 팝업
            else if (!this.reqData.order.name || !this.reqData.order.phone ) { this.is_show=true; this.inputPopup = true } // 이름, 핸드폰 유효성 팝업
            else if (this.reqData.order.phone && this.reqData.order.name ){
                this.SET_REQ_DATA(this.reqData)
                this.$router.push('/input/confirm')  // cofirm 페이지로 이동
            }
        },
        async searchPlace(){ // 브랜드 & 장소 받아오기
            if (Array.isArray(this.getBrands) && this.getBrands.length == 0) { // 이미 받은 데이터는 axios post 하지 않기
                let data = await searchPlaceService({})
                this.SET_BRANDS(data.brands)
            }
            this.places = this.getBrands[0].places // places selectbox 데이터 세팅
            this.reqData.order.brand = this.getBrands[0].name // brand 첫 데이터 세팅
            this.reqData.order.place = this.getBrands[0].places[0].name // place 첫 데이터 세팅
        },
        changePlaces(e){ // place select box 변경하기
            let idx = e.target.value // selec box value 값을 index로 설정
            this.places = this.getBrands[idx].places // 설정된 index 값 place를 다시 places에 넣어준다
            this.reqData.order.brand = this.getBrands[idx].name // 배열 인덱스에 맞는 첫 브랜드 데이터 세팅 (브랜드 데이터만 value를 index로 설정하여 v-model로 연결하지 않고 change일어날떄 변경된다.)
            this.reqData.order.place = this.places[0].name // 배열 인덱스에 맞는 첫 장소 데이터 세팅
        },
        moveMain () { // 메인페이지로 이동하기
            this.$router.push({name:'main'})
        },
        popupEvent(){ // 팝업 닫기
            this.is_show=false
            this.timePopup = false
            this.inputPopup = false
        },
        
    },
}
</script>
<style scoped>

</style>