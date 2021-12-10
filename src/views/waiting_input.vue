<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 알바 신청</p>
            </banner>
            <div class="inner input" >
                <div class="inputBox" v-bind:class="{'on':this.active == true}">
                    <span class="label">이름</span>
                    <div>
                        <input type="text" placeholder="이름을 입력해주세요" v-model="worker.name" @focus="focus()" @blur="blur()">
                    </div>
                </div>
                <div class="inputBox call">
                    <span class="label">연락처</span>
                    <div>
                        <input type="tel" placeholder="연락처를 입력해주세요" v-model="worker.phone">
                        <span class="ico"></span>
                    </div>
                </div>
                <div class="inputBox call ch disabled">
                    <span class="label">인증번호</span>
                    <div>
                        <input type="number" disabled>
                        <span class="ico"></span>
                    </div>
                </div>
                <div class="inputBox">
                    <span class="label">계좌번호</span>
                    <div class="selectBox account">
                        <div class="actSelect">
                            <select name="choice" @change="selectBank($event)">
                                <option v-for="(bank,index) in banks" :key="index" :value="bank.name">{{bank.name}}</option>
                            </select>
                        </div>
                        <div class="actText">
                            <input type="text" placeholder="계좌번호" v-model="bankInfo.account">
                        </div>
                    </div>
                </div>
                <div class="inputBox">
                    <span class="label">카톡 ID</span>
                    <div>
                        <input type="text" placeholder="카톡 ID를 입력해주세요" v-model="worker.kakaoId">
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn" @click="cancelBtn">취소</button>
                    <button type="button" class="btn" @click="submitBtn()">구매 신청</button>
                </div> 
            </div>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
import {mapMutations, mapState} from 'vuex'
import searchBank from '../service/searchBankService'
import workerService from '../service/workerService'


export default {
    components:{
        banner
    },
    data() {
        return {
            active:false
        }
    },
    methods: {
        ...mapMutations('main',['SET_BANK','SET_AUTH_CODE','SET_BANK_NAME']),
        searchBank() {
            let crc = this.reqData.crc
            let reqData = {crc}
            searchBank.bank(reqData)
            .then((res)=>{
                this.SET_BANK(res.banks)
                this.SET_BANK_NAME(res.banks[0].name)
            })
        },
        cancelBtn(){
            history.back(-1)
        },
        submitBtn(){
            let crc = this.reqData.crc
            let name = this.worker.name
            let phone = this.worker.phone
            let kakaoId = this.worker.kakaoId
            let bank = this.bankInfo.bank
            let account = this.bankInfo.account
            let worker = {name,phone,kakaoId}
            let bankInfo = {bank,account}
            let reqData = {crc,worker,bankInfo}
            console.log(reqData);
            workerService.worker(reqData)
            .then((res)=>{
                console.log(res);
                this.$router.push('/mb/winput/confirm')
                this.SET_AUTH_CODE(res.authCode)
            })
        },
        selectBank(e){
            console.log(e.target.value);
            this.SET_BANK_NAME(e.target.value)
        },
        focus(){this.active = true},
        blur(){this.active = false}
    },
    mounted () {
        this.searchBank()
    },
    computed: {
        ...mapState('main',['reqData','banks','worker','bankInfo','bankName'])
    },
}
</script>
<style scoped>

</style>
