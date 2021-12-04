<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 알바 신청</p>
            </banner>
            <div class="inner confirm">
                <div class="confirmBox">
                    <table>
                        <tr>
                            <th>
                                <p>이름</p>
                            </th>
                            <td>
                                <p>오가희</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>연락처</p>
                            </th>
                            <td>
                                <p>010-9224-5158</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>계좌번호</p>
                            </th>
                            <td>
                                <p>(국민)282402-1234-1234223</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>카톡ID</p>
                            </th>
                            <td>
                                <p>카톡ID</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>인증번호</p>
                            </th>
                            <td>
                                <p>SF13ZSDR231AFASAD</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="btnBox">
                    <button type="button" class="btnone" @click="move">메인화면 바로가기</button>
                </div>
            </div>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
export default {
    components: { banner },
    methods: {
        move(){
            this.$router.push('/')
        }
    },
    
}
</script>
<style scoped>

</style>