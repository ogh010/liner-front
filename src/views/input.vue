<template>
    <div class="content">
        <banner>
            <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
        </banner>
        <div class="inner input">
            <div class="inputBox">
                <span class="label">신청일</span>
                <div>
                    <input type="date" class="dateinput">
                </div>
            </div>
            <div class="inputBox">
                <span class="label">장소</span>
                <div class="selectBox">
                    <div>
                        <select name="choice" @change="selectEvent($event)">
                            <option v-for="(name,index) in resPlacename" :key="index" :value="index">{{name.name}}</option>
                        </select>
                    </div>
                    <div>
                        <select name="choice">
                            <option v-for="(brand,index) in resPlaceBrand" :key="index">{{brand.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="inputBox">
                <span class="label">이용시간</span>
                <div class="selectBox">
                    <div>
                        <select>
                            <option>00:00</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>00:00</option>
                            <option>01:00</option>
                            <option>02:00</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="inputBox">
                <span class="label">이름</span>
                <div>
                    <input type="text">
                </div>
            </div>
            <div class="inputBox call">
                <span class="label">연락처</span>
                <div>
                    <input type="number">
                    <span class="ico"></span>
                </div>
            </div>
            <div class="inputBox call ch">
                <span class="label">인증번호</span>
                <div>
                    <input type="number">
                    <span class="ico"></span>
                </div>
            </div>
            <div class="etc">
                <span class="label">기타사항 </span>
                <div>
                    <textarea name="etc" rows="3" cols="33" placeholder="기타 사항을 입력해주세요"></textarea>
                </div>
            </div>
            <div class="btnBox">
                <button type="button" class="btn" @click="back()">취소</button>
                <button type="button" class="btn" @click="move()">구매 신청</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import banner from '../components/banner.vue'
import searchPlaceService from '../service/searchPlaceService'
export default {
    components:{banner},
    data() {
        return {
            
        }
    },
    methods: {
        ...mapMutations('main',['SET_PLACES_NAME','SET_PLACES_BRANDS']),
        back(){
            history.back(-1)
        },
        move(){
            this.$router.push('input/confirm')
        },
        searchPlace(){
            let crc = this.reqData.crc
            let reqData = {crc}
            searchPlaceService.searchPlace(reqData)
            .then((res)=>{
                this.SET_PLACES_NAME(res.brands)
                this.SET_PLACES_BRANDS(res.brands[0].places)
                console.log(res.brands[0].name)
            })
        },
        selectEvent(e){
            let idx = e.target.value
            this.SET_PLACES_BRANDS(this.resPlacename[idx].places)
        }

    },
    mounted() {
        this.searchPlace()
    },
    computed:{
        ...mapState('main',['reqData','resPlacename','resPlaceBrand'])
    }
}
</script>
<style scoped>

</style>