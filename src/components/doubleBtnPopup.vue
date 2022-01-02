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
                        <button type="button" class="btn cancle" @click="cancel">닫기</button>
                        <button type="button" class="btn submit" @click="submit">{{title}}</button>
                    </div>
                </div>
            </div>
            <div class="dim"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title'],
    methods: {
        submit(){
            this.$emit('submit')
        },
        cancel() {
            this.$emit('cancel');
        }
    },
}
</script>
<style scoped>

</style>