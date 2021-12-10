<template>
    <div class="content">
            <banner>
                <p slot="banner">LINE UP FOR YOU 서비스 이용 신청</p>
            </banner>
            <div class="inner confirm">
                <div class="confirmBox">
                    <table>
                        <tr>
                            <th>
                                <p>신청일</p>
                            </th>
                            <td>
                                <p>{{order.serviceTime}}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>장소</p>
                            </th>
                            <td>
                                <span>{{brandName}}</span>
                                <span>{{brandPlace}}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>이용시간</p>
                            </th>
                            <td>
                                <span>{{order.beginTime}}</span>~ 
                                <span>{{order.endTime}}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>이름</p>
                            </th>
                            <td>
                                <p>{{order.name}}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>연락처</p>
                            </th>
                            <td>
                                <p>{{phoneNumber(order.phone)}}</p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <p>기타사항</p>
                            </th>
                            <td>
                                <p v-if="order.desc == ''">기타사항없음</p>
                                <p v-else>{{order.desc}}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="agreeBox">
                    <div class="inner">
                        <div>
                            <input type="checkbox" id="checkall" class="ch" v-model="allChecked" @click="checkall()"/><label for="checkall"><span></span>전체 약관동의하기</label>
                            <span class="detail">상세보기</span>
                        </div>
                        <div>
                            <input type="checkbox" name="chk" class="ch" id="ch1" v-model="ch1"/><label for="ch1"><span></span>[필수] 개인정보 수집 및 이용동의</label>
                            <span class="detail">상세보기</span>
                        </div>
                        <div>
                            <input type="checkbox" name="chk" class="ch" id="ch2" v-model="ch2"/><label for="ch2"><span></span>[필수] 개인정보 수집 및 이용동의</label>
                            <span class="detail">상세보기</span>
                        </div>
                        <div>
                            <input type="checkbox" name="chk" class="ch" id="ch3" v-model="ch3"/><label for="ch3"><span></span>[필수] 개인정보 수집 및 이용동의</label>
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
import { mapMutations, mapState } from 'vuex'
import banner from '../components/banner.vue'
import lineService from '../service/lineService'
import Popup from '../components/popup.vue'

export default {
    components:{banner,Popup},
    data() {
        return {
            allChecked:false,
            ch1:false,
            ch2:false,
            ch3:false,
            is_show:false
        }
    },
    methods: {
        ...mapMutations('main',['SET_ORDER_CODE']),
        checkall(){
            this.ch1 =! this.allChecked
            this.ch2 =! this.allChecked
            this.ch3 =! this.allChecked
        },
        async move(){
            await this.serviceBtn()
            if(this.allChecked == true || this.ch1 ==true && this.ch2 ==true && this.ch3 ==true){
                await this.$router.push('/mb/input/confirm/agree')
            }
            else{
                this.is_show = true
            }
        },
        serviceBtn(){
            let crc = this.reqData.crc
            let serviceTime = this.order.serviceTime
            let brand = this.brandName
            let place = this.brandPlace
            let beginTime = this.order.beginTime
            let endTime = this.order.endTime
            let name = this.order.name
            let phone = this.order.phone
            let desc = this.order.desc
            let order = {serviceTime,brand,place,beginTime,endTime,name,phone,desc}
            let reqData = {crc,order}
            lineService.line(reqData)
            .then((res)=>{
                this.SET_ORDER_CODE(res.orderCode)
            })
        },
        popupEvent(){
            this.is_show=false
        },
        phoneNumber(value){
			value = value.replace(/[^0-9]/g, "");
			return value.replace(
				/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
				"$1-$2-$3"
			);
		},
    },
    computed: {
        ...mapState('main',['reqData','order','brandName','brandPlace']),
        
    },
}
</script>
<style scoped>

</style>