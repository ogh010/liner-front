<template>
    <div class="wrapp">
        <Header/>
        <div class="contentt">
            <div class="inner">
                <h2>거래관리</h2>
            </div>
            <div class="section01">
                <div class="inner">
                    <div class="searchBox">
                        <div class="search-col">
                            <span>시작날짜</span>
                            <v-menu
                                ref="fromMenu"
                                v-model="from.menu"
                                :close-on-content-click="false"
                                :return-value.sync="from.date"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="from.date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    color="#E4B95D"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="from.date"
                                no-title
                                scrollable
                                color="#E4B95D"
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="#E4B95D"
                                    @click="from.menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="#E4B95D"
                                    @click="$refs.fromMenu.save(from.date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </div>
                        <div class="search-col">
                            <span>종료날짜</span>
                            <v-menu
                                ref="toMenu"
                                v-model="to.menu"
                                :close-on-content-click="false"
                                :return-value.sync="to.date"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="to.date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    color="#E4B95D"
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                v-model="to.date"
                                no-title
                                scrollable
                                color="#E4B95D"
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="#E4B95D"
                                    @click="to.menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="#E4B95D"
                                    @click="$refs.toMenu.save(to.date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </div>
                        <div class="search-col">
                            <span>거래번호</span>
                            <input type="text" class="input">
                        </div>
                        <div class="search-col">
                            <span>이름</span>
                            <input type="text" class="input">
                        </div>
                        <div class="search-col">
                            <span>연락처</span>
                            <input type="text" class="input">
                        </div>
                        <button type="button" class="btn">검색</button>
                    </div>
                </div>
            </div>
            <div class="section02">
                <div class="inner">
                    <div class="tableBox">
                        <table class="table">
                            <colgroup>
                                <col style="width:10%;" />
                                <col style="width:10%;" />
                                <col style="width:10%;" />
                                <col style="width:14%;" />
                                <col style="width:11%;" />
                                <col style="width:11%;" />
                                <col style="width:11%;" />
                                <col style="width:11%;" />
                                <col style="width:12%;" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>주문일시</th>
                                    <th>서비스일시</th>
                                    <th>거래번호</th>
                                    <th>장소</th>
                                    <th>이용시간</th>
                                    <th>구매자</th>
                                    <th>연락처</th>
                                    <th>주문상태</th>
                                    <th>배정알바</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="line_hl">
                                    <td>
                                        <p>2021.10.01 12:12:12</p>
                                    </td>
                                    <td>
                                        <p>2021.10.01 12:12:12</p>
                                    </td>
                                    <td>
                                        <p>123456789</p>
                                    </td>
                                    <td>
                                        <p>강남 신세계점 샤넬</p>
                                    </td>
                                    <td>
                                        <p>21:00 ~ 09:00</p>
                                    </td>
                                    <td>
                                        <p>오가희</p>
                                    </td>
                                    <td>
                                        <p>010-9224-5158</p>
                                    </td>
                                    <td>
                                        <p>배정중</p>
                                    </td>
                                    <td>
                                        <p>김범신</p>
                                    </td>
                                </tr>
                                <tr class="line_hl">
                                    <td>
                                        <p>2021.10.01 12:12:12</p>
                                    </td>
                                    <td>
                                        <p>2021.10.01 12:12:12</p>
                                    </td>
                                    <td>
                                        <p>123456789</p>
                                    </td>
                                    <td>
                                        <p>강남 신세계점 샤넬</p>
                                    </td>
                                    <td>
                                        <p>21:00 ~ 09:00</p>
                                    </td>
                                    <td>
                                        <p>오가희</p>
                                    </td>
                                    <td>
                                        <p>010-9224-5158</p>
                                    </td>
                                    <td>
                                        <p>배정중</p>
                                    </td>
                                    <td>
                                        <button type="button" class="btn" @click="clickEvent()">배정하기</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="page_nav">
                <div class="prev"></div>
                <ul>
                    <li class="on">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
                <div class="nex"></div>
            </div>
        </div>
        <Popup v-show="is_show" @cancelBtn="clickEvent" @submitBtn="clickEvent"/>
    </div>
</template>

<script>
import Header from '../../layout/admin/header.vue'
import Popup from '../components/popup.vue'

export default {
    data: () => ({
        from:
        {
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
        },
        to:
            {
                date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                menu: false,
            },
        is_show:false
        }),
    components:{
        Header,
        Popup
    },
    methods:{
        clickEvent(){
            this.is_show =! this.is_show
        }
    }
}
</script>
<style scoped>

</style>