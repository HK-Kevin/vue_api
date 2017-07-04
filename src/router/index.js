import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Index from '../pages/Index'
import Props from '../components/Props.vue'
import MyDatas from '../components/MyDatas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'/myDatas',
    component:MyDatas
    },
    {
      path:'/props',
      component:Props
    }
  ]
})
