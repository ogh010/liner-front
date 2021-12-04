<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 알바 신청</p>
            </banner>
            <div class="inner input">
                <div class="inputBox">
                    <span class="label">이름</span>
                    <div>
                        <input type="text" placeholder="이름을 입력해주세요">
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
                <div class="inputBox">
                    <span class="label">계좌번호</span>
                    <div class="selectBox account">
                        <div class="actSelect">
                            <select name="choice">
                                <option>은행</option>
                            </select>
                        </div>
                        <div class="actText">
                            <input type="text" placeholder="계좌번호">
                        </div>
                    </div>
                </div>
                <div class="inputBox">
                    <span class="label">카톡 ID</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn">취소</button>
                    <button type="button" class="btn">구매 신청</button>
                </div> 
            </div>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
export default {
    components:{
        banner
    }
}
</script>
<style scoped>

</style>
