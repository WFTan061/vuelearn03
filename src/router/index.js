import Vue from 'vue'
import VueRouter from 'vue-router'

//routes
import Home from '../views/Home.vue'
import About from '../views/About.vue'
//
import SpendingInfo from '../views/SpendingInfo.vue'
import UserSummary from '../views/UserSummary.vue'
import UserChart from '../views/UserChart.vue'
import SpendingInfoHome from '../views/SpendingInfoHome'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path:'/spendinginfo/',
    name:'Spending Info',
    component: SpendingInfo,
    props:true,
    children:[
      {path:'',component: SpendingInfoHome,props:true},
      {path:'summary',component: UserSummary,props:true},
      {path:'chart',component: UserChart,props:true},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
