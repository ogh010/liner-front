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
                            <p>주문번호</p>
                        </th>
                        <td>
                            <p>{{$route.params.order.orderCode}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>신청일</p>
                        </th>
                        <td>
                            <p>{{$route.params.order.orderTime}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>장소</p>
                        </th>
                        <td>
                            <p>{{$route.params.order.place}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>이용시간</p>
                        </th>
                        <td>
                            <span>{{$route.params.order.beginTime}}</span>~
                            <span>{{$route.params.order.endTime}}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>이름</p>
                        </th>
                        <td>
                            <p>{{$route.params.order.name}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>연락처</p>
                        </th>
                        <td>
                            <p>{{$route.params.order.phone}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>기타사항</p>
                        </th>
                        <td>
                            <p>{{$route.params.order.desc}}</p>
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
    components:{banner},
    methods: {
        move(){
            this.$router.push('/')
        },
        
    },
    computed: {
        ...mapState('main',['brandName','brandPlace','orderCode'])
    },
    mounted () {
        console.log(this.$route.params);
    },
}
</script>
<style scoped>

</style>