import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/mb',
    name:'main',
    component:()=>import('../views/main.vue')
  },
  {
    path:'/mb/input',
    name:'input',
    component:()=>import('../views/input.vue'),
  },
  {
    path:'/mb/input/confirm',
    name:'input_confirm',
    component:()=>import('../views/input_confirm.vue')
  },
  {
    path:'/mb/input/confirm/agree',
    name:'input_confirm_agree',
    component:()=>import('../views/input_confirm_agree.vue')
  },
  {
    path:'/mb/check',
    name:'check',
    component:()=>import('../views/check_order_number.vue'),
  },
  {
    path:'/mb/check/confirm',
    name:'check_confirm',
    component:()=>import('../views/check_confirm.vue')
  },
  {
    path:'/mb/winput',
    name:'winput',
    component:()=>import('../views/waiting_input.vue')
  },
  {
    path:'/mb/winput/confirm',
    name:'winput_confirm',
    component:()=>import('../views/waiting_input_confirm.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: '/line',
  routes
})

export default router
