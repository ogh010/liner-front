import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/css.css'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import mixins from '@/mixins'

Vue.config.productionTip = false
Vue.mixin(mixins)

new Vue({
  router,
  store,
  VueTimepicker,
  render: h => h(App),
  mounted () {
    window.IMP.init("imp03820086");
  }
}).$mount('#app')
