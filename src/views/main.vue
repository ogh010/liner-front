<template>
    <div>
        <div class="content">
            <banner>
                <p slot="banner">기다리지 말고 LINE UP FOR YOU 통해 명품 구매하자</p>
            </banner>
            <div class="inner main">
                <div class="service"></div>
                <div class="btnBox">
                    <button type="button" class="btnone" @click="moveInput()">라인업포유 서비스 이용하기</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import banner from '../components/banner.vue'

export default {
    components: { banner },
    methods:{
        moveInput(){
            this.$router.push('/input')
        }
    }
}
</script>
<style scoped>

</style>





