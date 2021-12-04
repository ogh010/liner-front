<template>
    <div class="wrap">
        <div class="popupBackground">
            <div class="popup">
                <div class="pHeader">
                </div>
                <div class="pContent">
                    <slot name="popupTxt"></slot>
                </div>
                <div class="pFooter">
                    <div class="inner">
                        <!-- <button type="button" class="btn cancle">취소</button> -->
                        <button type="button" class="btn submit" @click="clickEvent">확인</button>
                    </div>
                </div>
            </div>
            <div class="dim"></div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        clickEvent(){
            this.$emit('clickEvent')
        }
    },
}
</script>
<style scoped>

</style>