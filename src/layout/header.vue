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
            this.$router.push('/mb/check')
        },
        moveMain(){
            this.$router.push('/mb')
        }
    },
}
</script>
<style scoped>

</style>