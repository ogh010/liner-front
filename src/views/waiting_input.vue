<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 알바 신청</p>
            </banner>
            <div class="inner input" >
                <div class="inputBox" v-bind:class="{'on':this.active == true}">
                    <span class="label">이름</span>
                    <div>
                        <input type="text" placeholder="이름을 입력해주세요" v-model="name" @focus="focus()" @blur="blur()">
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
                <div class="inputBox call ch" v-bind:class="{'disabled':this.worker.phone.length !== 11}">
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
                            <input type="number" placeholder="계좌번호" v-model="account">
                        </div>
                    </div>
                </div>
                <div class="inputBox">
                    <span class="label">카톡 ID</span>
                    <div>
                        <input type="text" placeholder="카톡 ID를 입력해주세요" v-model="kakaoId">
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn" @click="cancelBtn">취소</button>
                    <button type="button" class="btn" @click="submitBtn()">알바 신청</button>
                </div> 
            </div>
            <Popup v-show="is_show" @clickEvent="popupEvent">
                <p slot="popupTxt">폼을 입력해주세요</p>
            </Popup>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
import {mapMutations, mapState} from 'vuex'
import searchBank from '../service/searchBankService'
import workerService from '../service/workerService'
import Popup from '../components/popup.vue'


export default {
    components:{
        banner,Popup
    },
    data() {
        return {
            active:false,
            is_show:false,
            name:"",
            phone:"",
            account:"",
            kakaoId:"",
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
            this.$router.push({'name':'main'})
        },
        inputData(){
            this.worker.name = this.name
            this.worker.phone = this.phone
            this.worker.account = this.account
            this.worker.kakaoId = this.kakaoId
        },
        submitBtn(){
            this.inputData()
            let crc = this.reqData.crc
            let name = this.worker.name
            let phone = this.worker.phone
            let kakaoId = this.worker.kakaoId
            let bank = this.bankInfo.bank
            let account = this.bankInfo.account
            let worker = {name,phone,kakaoId}
            let bankInfo = {bank,account}
            let reqData = {crc,worker,bankInfo}
            
            if(this.name !== "" && this.phone !== "" && this.account !== "" && this.kakaoId !== ""){
                workerService.worker(reqData)
                .then((res)=>{
                    this.$router.push('/mb/winput/confirm')
                    this.SET_AUTH_CODE(res.authCode)
                })
            }
            else{
                this.is_show = true
            }
        },
        selectBank(e){
            this.SET_BANK_NAME(e.target.value)
        },
        focus(){this.active = true},
        blur(){this.active = false},
        popupEvent(){
            this.is_show=false
        }
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
