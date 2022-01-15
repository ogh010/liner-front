<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
            </banner>
            <div class="inner confirm">
                <div class="confirmBox">
                    <table>
                        <template v-for="(title, index) in this.TableCardTitleArr">
                            <TableCard :title="title" :key="index">
                                <p v-if="index == 0" slot="content">{{getOrder.serviceTime}}</p> <!-- 신청일 테이블 카드 -->
                                <p v-if="index == 1" slot="content">{{amount.toLocaleString()}} 원</p>
                                <template v-else-if="index == 2" slot="content"> <!-- 장소 테이블 카드 -->
                                    <span>{{getOrder.place}}</span>
                                    <span>({{getOrder.brand}})</span>
                                </template>
                                <template v-else-if="index == 3" slot="content"> <!-- 이용시간 테이블 카드 -->
                                    <span>{{getOrder.beginTime}}</span>~<span>{{getOrder.endTime}}</span>
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
                <div class="agreeBox">
                    <div class="inner">
                        <div>
                            <input type="checkbox" id="checkall" class="ch" v-model="allChecked" @click="checkall()"/><label for="checkall"><span></span> 전체 약관동의하기</label>
                            <!-- <span class="detail">상세보기</span> -->
                        </div>
                        <div v-for="(item,index) in ch" :key="index">
                            <input type="checkbox" name="chk" class="ch" :id="item.name" v-model="item.status" @change="clickCh()" /><label :for="item.name"><span></span>{{item.title}}</label>
                            <span class="detail">상세보기</span>
                        </div>
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btn" @click="back()">뒤로가기</button>
                    <button type="button" class="btn" @click="orderPopUp()">서비스 이용 신청하기</button>
                </div>
                <Popup @clickEvent="disablePopUp()" v-show="is_show">
                    <p slot="popupTxt">이용약관에 동의해주세요</p>
                </Popup>
                <DoubleBtnPopup @submit="submit()" @cancel="disablePopUp()" v-show="is_order_show" :title="title">
                    <p slot="popupTxt">이용 신청 후 관리자가 순차적으로 연락하니 참고 해주세요</p>
                </DoubleBtnPopup>
            </div>
        </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import banner from '../components/banner.vue'
import lineService from '../service/lineService'
import Popup from '../components/popup.vue'
import TableCard from '../components/TableCard.vue'
import DoubleBtnPopup from '../components/doubleBtnPopup.vue'
import moment from 'moment'

export default {
    components:{banner, Popup, TableCard, DoubleBtnPopup},
    data() {
        return {
            allChecked:false,
            is_show:false,
            is_order_show: false,
            popup_type: 0,
            amount: 0,
            title: '주문하기',
            ch:[
                {
                    name: 'ch1',
                    status:false,
                    title:" [1] 개인정보 수집 및 이용동의"
                },
            ],
            TableCardTitleArr: ['신청일', '이용금액', '장소', '이용시간', '이름', '연락처', '기타사항']
        }
    },
    mounted () {
        var t1 = moment(this.getOrder.beginTime, 'HH:mm')
        var t2 = moment(this.getOrder.endTime, 'HH:mm')
        let val = moment.duration(t1.diff(t2)).asMinutes()
        if (val < 0) {
            this.amount = (val * -1) * 210
        } else {
            this.amount = (24 * 60 - val) * 210
        }
        this.SET_AMOUNT(this.amount)
    },
    computed: {
        ...mapGetters('main',['getOrder', 'getReqData'])
    },
    methods: {
        ...mapMutations('main',['SET_ORDER_CODE', 'SET_AMOUNT']),
        checkall(){ // 전체 동의
            this.ch.forEach((e) => { e.status =! this.allChecked })
        },
        clickCh(){ // 동의 하기
            let arr = this.ch.filter((e) => { return e.status == false }) // 현재 개인정보 수집 동의 true array 필터
            if (arr.length > 0) { this.allChecked = false } // 한개 이상 false 이면 전쳬약관 동의 false
            else { this.allChecked = true } // 전부 true 일 경우 전체 약관동의 true 처리
        },
        orderPopUp() {
            if(this.allChecked){ this.is_order_show = true }
            else { this.is_show = true }
        },
        submit() {
            this.order()
            this.is_order_show = false
        },
        disablePopUp() {
            this.is_show=false
            this.is_order_show = false
        },
        back () {
            this.$router.replace({name: 'input', params: {...this.getReqData }})
        },
        async order(){
            let data = await lineService(this.getReqData)
            if (data.resultCode == 0) {
                this.SET_ORDER_CODE(data.orderCode)
                this.$router.push({name : 'input_confirm_agree'}) 
            } // 주문 완료 페이지로 이동
            else {  this.$router.push({name:'main'}) } // network, server 오류 메인 페이지로 이동
        },
    },
}
</script>
<style scoped>
</style>