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
                                <p>{{worker.name}}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>연락처</p>
                            </th>
                            <td>
                                <p>{{worker.phone}}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>계좌번호</p>
                            </th>
                            <td>
                                <span>({{bankName}})</span>
                                <span>{{bankInfo.account}}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>카톡ID</p>
                            </th>
                            <td>
                                <p>{{worker.kakaoId}}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>인증번호</p>
                            </th>
                            <td>
                                <p>{{authCode}}</p>
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
import { mapState } from 'vuex'
import banner from '../components/banner.vue'


export default {
    components: { banner },
    methods: {
        move(){
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState('main',['worker','bankInfo','authCode','bankName'])
    },
}
</script>
<style scoped>

</style>