<template>
    <div class="footer">
        <div class="inner">
            <p class="fl" @click="move()">💼 알바 신청</p>
            <span></span>
            <p class="fr">LINE UP FOR YOU</p>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        move() {
            this.$router.push('/mb/winput')
        }
    },
}
</script>
<style scoped>

</style>