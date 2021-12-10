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
            this.$router.push('/check')
        },
        moveMain(){
            this.$router.push('/')
        }
    },
}
</script>
<style scoped>

</style>