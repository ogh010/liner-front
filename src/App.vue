<template>
  <div id="app">
    <div class="wrap">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from '../src/layout/header.vue'
import Footer from '../src/layout/footer.vue'

export default {
  components:{ Header,Footer }
}
</script>
<style>

</style>
