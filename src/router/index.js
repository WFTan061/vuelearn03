import Vue from 'vue'
import VueRouter from 'vue-router'

//routes
import SpendingInfo from '../views/SpendingInfoHome.vue'
import UserSummary from '../views/UserSummary.vue'
import UserChart from '../views/UserChart.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'SpendingInfo',
    component: SpendingInfo
  },
  {
    path: '/UserSummary',
    name: 'UserSummary',
    component: UserSummary,
    props:true
  },
  {
    path:'/chart',
    name:'Chart',
    component: UserChart,
    props:true,
  }
]

const router = new VueRouter({
  routes
})

export default router
