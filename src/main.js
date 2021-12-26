import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/css.css'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import utils from './utils'

Vue.config.productionTip = false
Vue.prototype.utils = utils

new Vue({
  router,
  store,
  VueTimepicker,
  render: h => h(App)
}).$mount('#app')
