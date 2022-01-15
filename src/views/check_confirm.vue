<template>
    <div class="content">
        <banner>
            <p slot="banner">LINE UP FOR YOU 서비스 이용 신청 <b>완료</b></p>
        </banner>
        <div class="inner confirm">
            <div class="confirmBox">
                <table>
                    <template v-for="(title, index) in this.TableCardTitleArr">
                        <TableCard :title="title" :key="index">
                            <p v-if="index == 0" slot="content">{{order.orderCode}}</p> <!-- 주문번호 테이블 카드 -->
                            <p v-else-if="index == 1" slot="content">{{order.serviceTime}}</p> <!-- 주문시간 테이블 카드 -->
                            <p v-else-if="index == 2" slot="content">{{order.place}}</p> <!-- 주문시간 테이블 카드 -->
                            <template v-else-if="index == 3" slot="content"> <!-- 계좌번호 테이블 카드 -->
                                <span>{{order.beginTime}}</span>~<span>{{order.endTime}}</span>
                            </template>
                            <p v-else-if="index == 4" slot="content">{{order.name}}</p> <!-- 카톡ID 테이블 카드 -->
                            <p v-else-if="index == 5" slot="content">{{phoneFormat(order.phone)}}</p> <!-- 인증번호 테이블 카드 -->
                            <p v-else-if="index == 6" slot="content">{{order.desc}}</p> <!-- 인증번호 테이블 카드 -->
                        </TableCard>
                    </template>
                </table>
            </div>
            <div class="btnBox">
                <button type="button" class="btnone" @click="moveMain()">메인화면 바로가기</button>
            </div>
        </div>
    </div>
</template>
<script>
import banner from '../components/banner.vue'
import TableCard from '../components/TableCard.vue'

export default {
    components:{ banner, TableCard },
    data() {
        return {
            TableCardTitleArr: ['주문번호', '신청일', '장소', '이용시간', '이름', '연락처', '기타사항'],
            order: this.$route.params.order
        };
    },
    methods: {
        moveMain(){ // 메인으로 이동하기
            this.$router.push('/')
        },
        
    }
}
</script>
<style scoped>

</style>