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
            </div>
        </div>
</template>
<script>
import banner from '../components/banner.vue'
export default {
    components:{banner},
    data() {
        return {
            allChecked:false,
            ch1:false,
            ch2:false,
            ch3:false,
        }
    },
    methods: {
        checkall(){
            this.ch1 =! this.allChecked
            this.ch2 =! this.allChecked
            this.ch3 =! this.allChecked
        },
        move(){
            this.$router.push('/input/confirm/agree')
        }
    },
}
</script>
<style scoped>

</style>