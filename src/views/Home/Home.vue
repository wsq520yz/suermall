<template>
  <!--  <h2>首页</h2>-->
  <div id="home" class="home">
    <NavBar>
      <template #center class="home-nav"><h2>购物街</h2></template>
    </NavBar>
   <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import HomeSwiper from "@/views/Home/childcomp/HomeSwiper";
  import HomeRecommendView from "@/views/Home/childcomp/HomeRecommendView";
  import {getHomeMultidata} from '@/network/home';

  export default {
    name: "Home",
    data() {
      return {
        result: null,
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then((res) => {
        this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style   lang="less">
  .home {
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
