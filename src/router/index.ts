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

// @ts-ignore
import Detail  from '../views/detail/Detail'
const routes: Array<RouteRecordRaw> = [
  {
    path:'',
    redirect:'/home',
    // meta:{
    //   keepAlive:true
    // }
  },
  {
    path: '/home',
    component: Home,
    // meta:{
    //   keepAlive:true
    // }
  },
  {
    path:'/category',
    component:Category,
    // meta:{
    //   keepAlive:true
    // }
  },
  {
    path:'/cart',
    component:Cart,
    // meta:{
    //   keepAlive:true
    // }
  },
  {
    path:'/profile',
    component:Profile,
    // meta:{
    //   keepAlive:true
    // }
  },
  {
    path: '/detail',
    name:'detail',
    component:Detail,
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
