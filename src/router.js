import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', 
      name: 'home',
      component: Home
    },
    {
      path: '/search/:searchText',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (search.[hash].js) for this route
      // which is lazy-loaded when the route is visited.1.下面采用动态连接方式 2.采用简单方式
      // component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
      component: Search
    }
  ]
})
