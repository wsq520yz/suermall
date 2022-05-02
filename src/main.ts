import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 懒加载，在图片数据还没有更新之前显示的loding图片，----
import lazyPlugin from 'vue3-lazy'
// @ts-ignore
createApp(App).use(store).use(router).use(lazyPlugin,{
  loading: require('@/assets/img/common/default.webp'), // 图片加载时默认图片
  error: require('@/assets/img/common/default.webp')// 图片加载失败时默认图片
}).mount('#app');
