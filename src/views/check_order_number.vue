<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
            </banner>
            <div class="inner input">
                <div class="inputBox">
                    <span class="label">주문번호</span>
                    <div>
                        <input type="number" v-model="orderNumber" pattern="[0-9]" placeholder="주문 번호를 입력해주세요">
                    </div>
                </div>
                <div class="inputBox">
                    <span class="label">연락처</span>
                    <div>
                        <input type="number" 
                            maxlength="11" 
                            v-model="phone" 
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            placeholder="-를 제외하고 입력해주세요">
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn" @click="moveMain()">취소</button>
                    <button type="button" class="btn" @click="checkOrder()">확인</button>
                </div>
            </div>
            <Popup v-show="is_show" @clickEvent="popupEvent">
                <p slot="popupTxt">주문번호를 확인해주세요.</p>
            </Popup>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
import axios from 'axios'
import Popup from '../components/popup.vue'

export default {
    components:{ banner, Popup },
    data() {
        return {
            orderNumber:"",
            phone: "",
            is_show:false
        }
    },
    methods: {
        async checkOrder(){ // 주문 확인
            if(! this.orderNumber){ this.is_show = true; return } // 주문번호를 입력하지 않았을 경우 
            const { data } = await axios.get(`/be/v1/mb/check/line/service`, {params : { orderCode: this.orderNumber, phone: this.phone}})
            console.log(data)
            if (data.resultCode != 0) { this.is_show=true; return } // 주문번호가 맞지 않을 경우
            this.$router.push({name:"check_confirm",params:{"order": data.order}})
        },
        moveMain(){ // 메인 이동
            this.$router.push({name:'main'})
        },
        popupEvent(){ // 팝업 닫기
            this.is_show = false
        }
    }
}
</script>
<style scoped>

</style>