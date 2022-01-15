<template>
    <div class="content">
        <banner>
            <p slot="banner">LINE UP FOR YOU 알바 신청</p>
        </banner>
        <div class="inner confirm">
            <div class="confirmBox">
                <table>
                    <template v-for="(title, index) in this.TableCardTitleArr">
                        <TableCard :title="title" :key="index">
                            <p v-if="index == 0" slot="content">{{getReqData.worker.name}}</p> <!-- 이름 테이블 카드 -->
                            <p v-else-if="index == 1" slot="content">{{phoneFormat(getReqData.worker.phone)}}</p> <!-- 연락처 테이블 카드 -->
                            <template v-else-if="index == 2" slot="content"> <!-- 계좌번호 테이블 카드 -->
                                <span>({{getReqData.bankInfo.bank}})</span>
                                <span>{{getReqData.bankInfo.account}}</span>
                            </template>
                            <p v-else-if="index == 3" slot="content">{{getReqData.worker.kakaoId}}</p> <!-- 카톡ID 테이블 카드 -->
                            <p v-else-if="index == 4" slot="content">{{getAuthCode}}</p> <!-- 인증번호 테이블 카드 -->
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
    components: { banner, TableCard },
    data() {
        return {
            TableCardTitleArr: ['이름', '연락처', '계좌번호', '카톡ID', '인증번호']
        };
    },
    computed: {
        ...mapGetters('worker', ['getReqData', 'getAuthCode'])
    },
    methods: {
        move(){
            this.$router.push({'name':'main'}) // 메인 페이지 이동
        }
    }
}
</script>
<style scoped>

</style>