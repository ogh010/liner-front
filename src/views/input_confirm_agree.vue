<template>
    <div class="content">
        <banner>
            <p slot="banner">LINE UP FOR YOU 서비스 이용 신청 <b>완료</b></p>
        </banner>
        <div class="inner confirm">
            <div class="confirmBox">
                <table>
                    <tr>
                        <th>
                            <p>신청일</p>
                        </th>
                        <td>
                            <p>2021-11-30</p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>장소</p>
                        </th>
                        <td>
                            <p>강남점 신세계백화점 샤넬</p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>이용시간</p>
                        </th>
                        <td>
                            <p>16:00 ~ 20:00</p>
                        </td>
                    </tr>
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
                            <p>기타사항</p>
                        </th>
                        <td>
                            <p>기타사항기타사항기타사항기타사항기타사항기타사항</p>
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
    components:{banner},
    methods: {
        move(){
            this.$router.push('/')
        }
    },
}
</script>
<style scoped>

</style>