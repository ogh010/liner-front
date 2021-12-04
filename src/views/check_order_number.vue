<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
            </banner>
            <div class="inner input">
                <div class="inputBox">
                    <span class="label">주문번호</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn">취소</button>
                    <button type="button" class="btn">확인</button>
                </div>
            </div>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
export default {
    components:{banner}
}
</script>
<style scoped>

</style>