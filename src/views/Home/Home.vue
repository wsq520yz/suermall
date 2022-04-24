<template>
  <!--  <h2>首页</h2>-->
    <div id="home" class="home">
      <NavBar>
        <template #center class="home-nav"><h2>购物街</h2></template>
      </NavBar>
      <home-swiper :banners="banners" @swiperImageLoad="imageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends" @HomeRecommendViewImageLoad="imageLoad"></home-recommend-view>
      <feature-view @FeatureViewImageLoad="imageLoad"></feature-view>
      <div :class="{fixed:isTabBarFixed}">
        <tab-control :titles="titles" @tabClick="tabClick" ref="tabcontrol"></tab-control>
      </div>
      <GoodsList :goods="goods[currentType].list"></GoodsList>
    </div>

</template>

<script>
  import HomeSwiper from "@/views/Home/childcomp/HomeSwiper";
  import HomeRecommendView from "@/views/Home/childcomp/HomeRecommendView";
  import FeatureView from "@/views/Home/childcomp/FeatureView";
  import GoodsList from "@/components/content/goods/GoodsList";

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/tabcontrol/TabControl";

  import {getHomeMultidata, getHomeGoods} from '@/network/home';

  export default {
    name: "Home",
    data() {
      return {
        result: null,
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabBarFixed: false
      }
    },
    components: {
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      GoodsList,

      NavBar,
      TabControl
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();
      this.getHomeGoods(this.currentType);
    },
    mounted() {
      //挂在上拉加载
      this.scrollLazyLoad();
      //挂载吸顶效果
      this.tabBarIsFixedTop();
    },
    methods: {
      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then((res) => {
          this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then((res) => {
          // console.log(type + '请求已经完成');
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // console.log(this.goods[type]);
        })
      },
      /**
       * 事件相关方法,tab-control单击
       * @param index
       */
      tabClick(index) {
        // console.log(index)
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$store.commit('setCurrentType', this.currentType);
        this.getHomeGoods(this.currentType);
      },
      /**
       * 监听scroll上拉加载
       */
      scrollLazyLoad() {
        window.onscroll = () => {
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          //变量windowHeight是可视区的高度
          let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          //滚动条到底部的条件
          //scrollTop!=0是由于其他功能在body上设置了最小高度100vh，切换tab的时候body高度位100vh。
          if ((Math.ceil(scrollTop + windowHeight) == parseInt(scrollHeight)) && scrollTop != 0) {
            // this.changeTab();
            console.log('监听下拉成功');
            // this.$store.getters.getCurrentIndex;
            // console.log(this.currentType);
            this.getHomeGoods(this.currentType);
          }
        }
      },
      /**
       * 初始化上拉加载tabbar的offset;
       */
      imageLoad() {
        // console.log('**************');
        this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
        // console.log(this.tabOffsetTop);
      },
      /**
       * 吸顶效果实现
       */
      tabBarIsFixedTop() {
        // Window.onscroll = () => {
        //   let scrollTop= this.$refs.tabcontrol.$el.offsetTop;
        //   console.log(scrollTop);
        // }
        window.addEventListener('scroll', () => {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          (scrollTop - this.tabOffsetTop) > -200 ? this.isTabBarFixed = true : this.isTabBarFixed = false;
          // console.log(scrollTop - this.tabOffsetTop);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .home {
    padding-top: 44px;
    .fixed{
      position: fixed;
      top: 44px;
      left: 0;
      background-color: #ffffff;
      width: 100%;
      padding-bottom: 5px;
      z-index: 999;
    }
  }
</style>
