import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../components/login.vue'
import account from '../components/account.vue'
import create from '../components/create.vue'
import list from '../components/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/account',
    name: 'account',
    component: account,
  },
  {
    path:'/create',
    name: 'create',
    component: create,
  },
  {
    path:'/list',
    name:'list',
    component: list,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router


