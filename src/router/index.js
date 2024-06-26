import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'main',
    component:()=>import('../views/main.vue')
  },
  {
    path:'/input',
    name:'input',
    component:()=>import('../views/input.vue'),
  },
  {
    path:'/input/confirm',
    name:'input_confirm',
    component:()=>import('../views/input_confirm.vue')
  },
  {
    path:'/input/confirm/agree',
    name:'input_confirm_agree',
    component:()=>import('../views/input_confirm_agree.vue')
  },
  {
    path:'/check',
    name:'check',
    component:()=>import('../views/check_order_number.vue'),
  },
  {
    path:'/check/confirm',
    name:'check_confirm',
    component:()=>import('../views/check_confirm.vue')
  },
  {
    path:'/winput',
    name:'winput',
    component:()=>import('../views/waiting_input.vue')
  },
  {
    path:'/winput/confirm',
    name:'winput_confirm',
    component:()=>import('../views/waiting_input_confirm.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/line/mb',
  routes
})

export default router
