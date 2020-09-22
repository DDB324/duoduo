import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Statistics from '@/views/Statistics.vue';
import Chart from '@/views/Chart.vue';
import Money from '@/views/Money.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect: '/statistics'
  },
  {
    path:'/statistics',
    component: Statistics
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/chart',
    component:Chart
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
