<template>
    <div class="header">
        <div class="logo" @click="moveMain"></div>
        <div class="nav" @click="orderBtn"></div>
    </div>
</template>
<script>
export default {
    methods: {
        orderBtn() {
            if (this.$route.path != '/check') { this.$router.push('/check') }
        },
        moveMain(){
            if (this.$route.path != '/') { this.$router.push('/') }
        }
    },
}
</script>
<style scoped>

</style>