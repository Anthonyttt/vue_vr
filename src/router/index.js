import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

import homePage from '../views/map.vue';
import panoPage from '../views/panoView.vue';
import scanPage from '../views/scanView.vue';
import testPage from '../views/test.vue';


const routes = [
  {
    path:'/',
    name:'homePage',
    component:homePage
  },
  {
    path:'/panoPage',
    name:'panoPage',
    component:panoPage
  },
  {
    path:'/scanPage',
    name:'scanPage',
    component:scanPage
  },
  {
    path:'/testPage',
    name:'testPage',
    component:testPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router