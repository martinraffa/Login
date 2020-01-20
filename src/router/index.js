import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../components/login.vue'
import account from '../components/account.vue'
import axios from '../components/axios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'login',
    component: login,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/account',
    name: 'account',
    component: account,
    beforeEnter: (to, from, next) => {
        var user_data = sessionStorage.getItem('user_data');
        if (!user_data) next('/login');
        next()
    }
  },
  {
    path: '/axios',
    name: 'axios',
    component: axios,
  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router


