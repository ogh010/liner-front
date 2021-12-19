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
                                <template v-else-if="index == 1" slot="content"> <!-- 장소 테이블 카드 -->
                                    <span>{{getOrder.brand}}</span>
                                    <span>{{getOrder.place}}</span>
                                </template>
                                <template v-else-if="index == 2" slot="content"> <!-- 이용시간 테이블 카드 -->
                                    <span>{{getOrder.beginTime}}</span>~ 
                                    <span>{{getOrder.endTime}}</span>
                                </template>
                                <p v-else-if="index == 3" slot="content">{{getOrder.name}}</p> <!-- 이름 테이블 카드 -->
                                <p v-else-if="index == 4" slot="content">{{phoneNumber(getOrder.phone)}}</p> <!-- 연락처 테이블 카드 -->
                                <template v-else-if="index == 5" slot="content"> <!-- 기타사항 테이블 카드 -->
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
                            <span class="detail">상세보기</span>
                        </div>
                        <div v-for="(item,index) in ch" :key="index">
                            <input type="checkbox" name="chk" class="ch" :id="item.name" v-model="item.status" @change="clickCh()" /><label :for="item.name"><span></span>{{item.title}}</label>
                            <span class="detail">상세보기</span>
                        </div>
                    </div>
                </div>
                <div class="btnBox">
                    <button type="button" class="btnone" @click="move">서비스 이용 신청하기</button>
                </div>
                <Popup @clickEvent="popupEvent()" v-show="is_show">
                    <p slot="popupTxt">이용약관에 동의해주세요</p>
                </Popup>
            </div>
        </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import banner from '../components/banner.vue'
import lineService from '../service/lineService'
import Popup from '../components/popup.vue'
import TableCard from '../components/TableCard.vue'

export default {
    components:{banner, Popup, TableCard},
    data() {
        return {
            allChecked:false,
            is_show:false,
            ch:[
                {
                    name:"ch1",
                    status:false,
                    title:" [1] 개인정보 수집 및 이용동의"
                },
                {
                    name:"ch2",
                    status:false,
                    title:" [2] 개인정보 수집 및 이용동의"
                },
                {
                    name:"ch3",
                    status:false,
                    title:" [3] 개인정보 수집 및 이용동의"
                }
            ],
            TableCardTitleArr: ['신청일', '장소', '이용시간', '이름', '연락처', '기타사항']
        }
    },
    computed: {
        ...mapGetters('main',['getOrder', 'getReqData']),
        phoneFormat () {
            return this.utils.phoneNumber
        }
    },
    methods: {
        ...mapMutations('main',['SET_ORDER_CODE']),
        checkall(){ // 전체 동의
            this.ch[0].status =! this.allChecked
            this.ch[1].status =! this.allChecked
            this.ch[2].status =! this.allChecked
        },
        clickCh(){ // 동의 하기
            if (!this.ch[0].status || !this.ch[1].status || !this.ch[2].status) {  this.allChecked = false }
            else {  this.allChecked = true }
        },
        async move(){
            if(this.allChecked){
                await this.serviceBtn()
                await this.$router.push('/mb/input/confirm/agree')
            }
            else{
                this.is_show = true
            }
        },
        async serviceBtn(){
            let data = await lineService.line(this.getReqData)
            this.SET_ORDER_CODE(data.orderCode)
        },
        popupEvent(){
            this.is_show=false
        }
    },
}
</script>
<style scoped>
</style>