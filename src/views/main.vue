<template>
    <div>
        <div class="content">
            <banner>
                <p slot="banner">기다리지 말고 LINE UP FOR YOU 통해 명품 구매하자</p>
            </banner>
            <div class="inner main">
                <div class="service" @click="popupEvent()"></div>
                <div class="btnBox">
                    <button type="button" class="btnone" @click="moveInput()">라인업포유 서비스 이용하기</button>
                </div>
            </div>
        </div>
        <popup v-show="this.is_show" @clickEvent="popupEvent">
            <p slot="popupTxt">팝업1111</p>
        </popup>
    </div>
</template>
<script>
import popup from '../components/popup.vue' 
import banner from '../components/banner.vue'

export default {
    components: { popup , banner },
    data(){
        return{
            is_show:false
        }
    },
    methods:{
        popupEvent(){
            this.is_show =! this.is_show
        },
        moveInput(){
            this.$router.push('input')
        }
    }
}
</script>
<style scoped>

</style>





