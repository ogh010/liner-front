<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
            </banner>
            <div class="inner input">
                <div class="inputBox">
                    <span class="label">주문번호</span>
                    <div>
                        <input type="text" v-model="orderNumber">
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn" @click="move">취소</button>
                    <button type="button" class="btn" @click="submitBtn()">확인</button>
                </div>
            </div>
            <Popup v-show="is_show" @clickEvent="popupEvent">
                <p slot="popupTxt">주문번호를 확인해주세요.</p>
            </Popup>
        </div>
</template>
<script>
import { mapState } from 'vuex';
import banner from '../components/banner.vue'
import axios from 'axios'
import Popup from '../components/popup.vue'

export default {
    components:{banner,Popup},
    data() {
        return {
            orderNumber:"",
            is_show:false
        }
    },
    methods: {
        submitBtn(){
            if(this.orderNumber == ""){
                this.is_show = true
                return
            }
            console.log(this.orderNumber);
            axios.get(`/be/v1/mb/check/line/service/${this.orderNumber}`)
            .then((res)=>{
                console.log(res);
                if(res.data.resultCode == 0){
                    this.$router.push({name:"check_confirm",params:{"order":res.data.order}})
                }
                else{
                    this.is_show=true
                }
            })
            
            
        },
        move(){
            history.back(-1)
        },
        popupEvent(){
            this.is_show = false
        }
    },
    computed: {
        ...mapState('main',['orderCode'])
    },
}
</script>
<style scoped>

</style>