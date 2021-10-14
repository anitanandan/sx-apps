import Vue from 'vue'
import VueRouter from 'vue-router'
import Member from '../views/Member.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Member',
    component: Member
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/Membersearch',
    name: 'Membersearch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Membersearch.vue')
  },
  
  {
    path: '/Searchresult',
    name: 'Searchresult',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Searchresult.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
