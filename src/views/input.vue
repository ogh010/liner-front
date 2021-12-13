<template>
    <div class="content">
        <banner>
            <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
        </banner>
        <div class="inner input">
            <div class="inputBox">
                <span class="label" >신청일</span>
                <div>
                    <input type="date" class="dateinput" v-model="serviceTime">
                </div>
            </div>
            <div class="inputBox">
                <span class="label">장소</span>
                <div class="selectBox">
                    <div>
                        <select name="choice" @change="selectEvent($event)">
                            <option v-for="(brand,index) in resPlacename" :key="index" :value="(index)">{{brand.name}}</option>
                        </select>
                    </div>
                    <div>
                        <select name="choice">
                            <option v-for="(place,index) in resPlaceBrand" :key="index">{{place.name}}</option>
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
                        v-model="beginTime" 
                        placeholder="시작시간"
                        ></vue-timepicker>
                    </div>
                    <div>
                        <span class="txt">종료시간</span>
                        <vue-timepicker 
                        hide-disabled-minutes 
                        hide-clear-button 
                        v-model="endTime"
                        placeholder="종료시간"></vue-timepicker>
                    </div>
                </div>
            </div>
            <div class="inputBox">
                <span class="label">이름</span>
                <div>
                    <input type="text" v-model="name" placeholder="이름을 입력해주세요">
                </div>
            </div>
            <div class="inputBox call">
                <span class="label">연락처</span>
                <div>
                    <input type="text" v-model="phone" pattern="[0-9]{11}" maxlength="11" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                    placeholder="-를 제외하고 입력해주세요">
                    <span class="ico" v-bind:class="{'on':this.phone.length == 11}"></span>
                </div>
            </div>
            <div class="inputBox call ch " v-bind:class="{'disabled':this.phone.length !== 11}">
                <span class="label">인증번호</span>
                <div>
                    <input type="number" :disabled="{'disabled':this.phone.length !== 11}">
                    <span class="ico"></span>
                </div>
            </div>
            <div class="etc">
                <span class="label">기타사항 </span>
                <div>
                    <textarea name="etc" rows="3" cols="33" placeholder="기타 사항을 입력해주세요" v-model="desc"></textarea>
                </div>
            </div>
            <div class="btnBox">
                <button type="button" class="btn" @click="back()">취소</button>
                <button type="button" class="btn" @click="move()">구매 신청</button>
            </div>
        </div>
        <Popup v-show="is_show" @clickEvent="popupEvent()">
            <p slot="popupTxt" v-show="timePopup">신청일을 입력해주세요</p>
            <p slot="popupTxt" v-show="inputPopup">모두 입력해주세요</p>
        </Popup>
    </div>
</template>
<script>
import { mapMutations, mapState} from 'vuex'
import banner from '../components/banner.vue'
import searchPlaceService from '../service/searchPlaceService'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import Popup from '../components/popup.vue'

export default {
    components:{banner,VueTimepicker,Popup},
    data() {
        return {
            disableFlag:true,
            is_show:false,
            serviceTime:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
            beginTime:'00:00',
            endTime:'00:00',
            name:"",
            phone:"",
            desc:"",
            timePopup:false,
            inputPopup:false,
        }
    },
    methods: {
        ...mapMutations('main',['SET_PLACES_NAME','SET_PLACES_BRANDS','SET_BRANDS_NAME','SET_BRANS_PLACE',]),
        back(){
            this.$router.push({name:'main'})
        },
        inputData(){
            this.order.serviceTime = this.serviceTime 
            this.order.brand = this.brand 
            this.order.place = this.place 
            this.order.beginTime = this.beginTime 
            this.order.endTime = this.endTime 
            this.order.name = this.name 
            this.order.phone = this.phone 
            this.order.desc = this.desc 
        },
        move(){
            this.inputData()
            let crc = this.reqData.crc
            let serviceTime = this.order.serviceTime
            let brand = this.brandName
            let place = this.brandPlace
            let beginTime = this.order.beginTime
            let endTime = this.order.endTime
            let name = this.order.name
            let phone = this.order.phone
            let desc = this.order.desc
            let order = {serviceTime,brand,place,beginTime,endTime,name,phone,desc}
            let reqData = {crc,order}
            console.log(reqData)
            if(this.order.serviceTime == ""){
                this.is_show=true
                this.timePopup = true
            }
            else if(this.order.name !== "" && this.order.phone !== "" && this.order.phone.length == 11){
                this.$router.push('/mb/input/confirm')
            }
            else{
                this.is_show=true
                this.inputPopup = true
            }
        },
        searchPlace(){
            let crc = this.reqData.crc
            let reqData = {crc}
            searchPlaceService.searchPlace(reqData)
            .then((res)=>{
                this.SET_PLACES_NAME(res.brands)
                this.SET_PLACES_BRANDS(res.brands[0].places)
                this.SET_BRANDS_NAME(this.resPlacename[0].name)
                this.SET_BRANS_PLACE(this.resPlaceBrand[0].name)
            })
        },
        selectEvent(e){
            let idx = e.target.value
            this.SET_PLACES_BRANDS(this.resPlacename[idx].places)
            this.SET_BRANDS_NAME(this.resPlacename[idx].name)
            this.SET_BRANS_PLACE(this.resPlaceBrand[idx].name)
        },
        popupEvent(){
            this.is_show=false
        },
        
    },
    mounted() {
        this.searchPlace()
        
    },
    computed:{
        ...mapState('main',['reqData','resPlacename','resPlaceBrand','order','brandName','brandPlace','',]),
    },
    
    
}
</script>
<style scoped>

</style>