<template>
    <div class="headerr">
            <div class="inner">
                <div class="logo"></div>
                <nav class="nav">
                    <ul>
                        <li :class="{'on':this.$route.path=='/'}">
                            <router-link to="/">
                                <a>거래관리</a>
                            </router-link>
                        </li>
                        <li :class="{'on':this.$route.path=='/albamon'}">
                            <router-link to="/albamon">
                                <a>알바관리</a>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>