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
             if (this.$route.path != '/winput') { this.$router.replace('/winput') }
        }
    },
}
</script>
<style scoped>

</style>