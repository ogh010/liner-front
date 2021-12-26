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
                            <p v-if="index == 0" slot="content">{{getOrderCode}}</p>
                            <p v-else-if="index == 1" slot="content">{{getOrder.serviceTime}}</p> <!-- 신청일 테이블 카드 -->
                            <template v-else-if="index == 2" slot="content"> <!-- 장소 테이블 카드 -->
                                <span>{{getOrder.brand}}</span>
                                <span>{{getOrder.place}}</span>
                            </template>
                            <template v-else-if="index == 3" slot="content"> <!-- 이용시간 테이블 카드 -->
                                <span>{{getOrder.beginTime}}</span>~ 
                                <span>{{getOrder.endTime}}</span>
                            </template>
                            <p v-else-if="index == 4" slot="content">{{getOrder.name}}</p> <!-- 이름 테이블 카드 -->
                            <p v-else-if="index == 5" slot="content">{{phoneFormat(getOrder.phone)}}</p> <!-- 연락처 테이블 카드 -->
                            <template v-else-if="index == 6" slot="content"> <!-- 기타사항 테이블 카드 -->
                                <p v-if="getOrder.desc == ''">기타사항없음</p>
                                <p v-else>{{getOrder.desc}}</p>
                            </template>
                        </TableCard>
                    </template>
                </table>
            </div>
            
            <div class="btnBox">
                <button type="button" class="btnone" @click="move">메인화면 바로가기</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import banner from '../components/banner.vue'
import TableCard from '../components/TableCard.vue'


export default {
    components:{ banner, TableCard },
    data() {
        return {
            TableCardTitleArr: ['주문번호', '신청일', '장소', '이용시간', '이름', '연락처', '기타사항']
        };
    },
    computed: {
        ...mapGetters('main',['getOrder', 'getOrderCode']),
        phoneFormat () {
            return this.utils.phoneNumber
        }
    },
    methods: {
        move(){
            this.$router.push('/')
        }
    },
}
</script>
<style scoped>

</style>