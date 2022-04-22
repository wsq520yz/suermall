import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import Home from  '../views/Home/Home';
// @ts-ignore
import Category from '../views/Category/Category'

// @ts-ignore
import Cart from  '../views/cart/Cart'

// @ts-ignore
import Profile from '../views/profile/Profile'
const routes: Array<RouteRecordRaw> = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },

  // {
  //   // path: '/about',
  //   // name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
