<template>
    <div class="wrapp">
        <Header/>
        <div class="contentt">
            <div class="inner">
                <h2>알바몬 관리</h2>
            </div>
            <div class="section01">
                <div class="inner">
                    <div class="searchBox">
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
                                    <th>등록일</th>
                                    <th>이름</th>
                                    <th>연락처</th>
                                    <th>은행</th>
                                    <th>계좌번호</th>
                                    <th>카톡 ID</th>
                                    <th>알바 횟수</th>
                                    <th>인증상태</th>
                                    <th>배정번호</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="line_hl">
                                    <td>
                                        <p>2021.10.01 12:12:12</p>
                                    </td>
                                    <td>
                                        <p>오가희</p>
                                    </td>
                                    <td>
                                        <p>010-9224-5158</p>
                                    </td>
                                    <td>
                                        <p>신한</p>
                                    </td>
                                    <td>
                                        <p>110-213212231</p>
                                    </td>
                                    <td>
                                        <p>카톡</p>
                                    </td>
                                    <td>
                                        <p>10</p>
                                    </td>
                                    <td>
                                        <button type="button" class="btn">배정하기</button>
                                    </td>
                                    <td>
                                        <p>20211112131523523</p>
                                    </td>
                                </tr>
                                <tr class="line_hl">
                                    <td>
                                        <p>2021.10.01 12:12:12</p>
                                    </td>
                                    <td>
                                        <p>오가희</p>
                                    </td>
                                    <td>
                                        <p>010-9224-5158</p>
                                    </td>
                                    <td>
                                        <p>신한</p>
                                    </td>
                                    <td>
                                        <p>110-213212231</p>
                                    </td>
                                    <td>
                                        <p>카톡</p>
                                    </td>
                                    <td>
                                        <p>10</p>
                                    </td>
                                    <td>
                                        <p>인증완료</p>
                                    </td>
                                    <td>
                                        <p>20211112131523523</p>
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
    </div>
</template>

<script>
import Header from '../../layout/admin/header.vue'
export default {
    components:{
        Header
    }
}
</script>
<style scoped>

</style>