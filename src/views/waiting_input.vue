<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 알바 신청</p>
            </banner>
            <div class="inner input" >
                <div class="inputBox">
                    <span class="label">이름</span>
                    <div>
                        <input type="text" placeholder="이름을 입력해주세요" v-model="reqData.worker.name" maxlength="16">
                    </div>
                </div>
                <div class="inputBox call">
                    <span class="label">연락처</span>
                    <div>
                        <input type="text" v-model="reqData.worker.phone" placeholder="-를 제외하고 입력해주세요">
                        <!-- <span class="ico" v-bind:class="{'on':this.phone.length == 11}"></span> -->
                    </div>
                </div>
                <!-- <div class="inputBox call ch" v-bind:class="{'disabled':this.worker.phone.length !== 11}">
                    <span class="label">인증번호</span>
                    <div>
                        <input type="number" disabled>
                        <span class="ico"></span>
                    </div>
                </div> -->
                <div class="inputBox">
                    <span class="label">계좌번호</span>
                    <div class="selectBox account">
                        <div class="actSelect">
                            <select name="choice" v-model="reqData.bankInfo.bank">
                                <option v-for="(bank,index) in getBanks" :key="index" :value="bank.name">{{bank.name}}</option>
                            </select>
                        </div>
                        <div class="actText">
                            <input type="text" placeholder="계좌번호" v-model="reqData.bankInfo.account" maxlength="32" oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');">
                        </div>
                    </div>
                </div>
                <div class="inputBox">
                    <span class="label">카톡 ID</span>
                    <div>
                        <input type="text" placeholder="카톡 ID를 입력해주세요" v-model="reqData.worker.kakaoId" maxlength="32">
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn" @click="moveMain()">취소</button>
                    <button type="button" class="btn" @click="enrollWorker()">알바 신청</button>
                </div> 
            </div>
            <Popup v-show="is_show" @clickEvent="popupEvent">
                <p slot="popupTxt">입력 정보를 다시 확인해주세요.</p>
            </Popup>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
import {mapMutations, mapGetters} from 'vuex'
import searchBank from '../service/searchBankService'
import workerService from '../service/workerService'
import Popup from '../components/popup.vue'


export default {
    components:{
        banner,Popup
    },
    data() {
        return {
            is_show:false,
            reqData: {
                worker: {
                    name:"", // 알바생 이름
                    phone:"", // 알바생 연락처
                    kakaoId: "" // 알바생 카카오톡 아이디
                },
                bankInfo: {
                    account:"", // 알바생 계좌번호
                    bank:"" // 계좌 은행
                }
            }
        }
    },
    created () {
        this.searchBank() // 은행 데이터 조회
    },
    computed: {
        ...mapGetters('worker', ['getBanks'])
    },
    methods: {
        ...mapMutations('worker',['SET_BANK','SET_AUTH_CODE', 'SET_REQ_DATA']),
        async searchBank() { // 은행 데이터 조회
            if (Array.isArray(this.getBanks)&& this.getBanks.length == 0) { // vuex banks 데이터 체크 없으면 조회 세팅
                let reqData = {}
                const data = await searchBank(reqData)
                this.SET_BANK(data.banks)
            }
            this.reqData.bankInfo.bank = this.getBanks[0].name // 처음 뱅크 이름으로 세팅
        },
        async enrollWorker(){ // 알바 신청하기
            if(this.reqData.worker.name
                && this.reqData.worker.phone
                && this.reqData.bankInfo.account
                && this.reqData.worker.kakaoId){ // input 데이터 유효성 검사

                let data = await workerService(this.reqData) // 알바 신청하기 axios post

                this.SET_AUTH_CODE(data.authCode) // 인증번호 vuex 저장
                this.SET_REQ_DATA(this.reqData) // axios post data vuex 저장
                this.$router.push('/mb/winput/confirm') // 확인 페이지로 이동
            }
            else{
                this.is_show = true
            }
        },
        moveMain(){ // 취소 버튼 클릭
            this.$router.push({'name':'main'})
        },
        popupEvent(){ //팝업 화면 닫기 이벤트
            this.is_show = false
        }
    }
}
</script>
<style scoped>

</style>
