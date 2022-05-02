<template>
  <div class="Detail">
    <!--  <h2>这里是商品{{this.$route.query.id}}详情页面</h2>-->
    <!--    这里是顶部导航栏-->
    <DetialNavBar :currentIndex="currentIndex" @navClick="navClick"></DetialNavBar>
    <!--    这里是商品信息-->
    <DetailSwiper :banners="topImages" @swiperImageLoad="imgLoad"></DetailSwiper>
    <ItemInfo :itemInfo="itemInfo"></ItemInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailItemInfo :detailItemInfo="detailItemInfo" @detailItemInfoImgLoad="imgLoad"
                    ref="DetailItemInfo"></DetailItemInfo>
    <!--    这里是商品参数展示-->
    <ItemParams :itemParams="itemParams" ref="ItemParams"></ItemParams>
    <!--    这里是商品评论展示-->
    <Rate :rate="rate" ref="Rate"></Rate>
    <!--    推荐商品信息展示-->
    <!--    skuinfo自己写的暂时不用-->
    <!--    <SkuInfo :skuInfo="skuInfo" @skuInfoImgLoad="imgLoad" ref="SkuInfo"></SkuInfo>-->
    <DetailRecommend :recommendInfo="recommendInfo" :goodItemImgLoad="imgLoad"  ref="SkuInfo"></DetailRecommend>
    <!--    底部导航栏-->
    <DetailButtomBar @addCart="addCart"></DetailButtomBar>
    <!--    吐丝-->
    <Toast :show="isShow" :message="message"></Toast>
  </div>
</template>

<script>
  import DetialNavBar from "@/views/detail/childCompos/DetialNavBar";
  import DetailSwiper from "@/views/detail/childCompos/DetailSwiper";
  import ItemInfo from "@/views/detail/childCompos/ItemInfo";
  import DetailShopInfo from "@/views/detail/childCompos/DetailShopInfo";
  import DetailItemInfo from "@/views/detail/childCompos/DetailItemInfo";
  import ItemParams from "@/views/detail/childCompos/ItemParams";
  import Rate from "@/views/detail/childCompos/Rate";
  import SkuInfo from "@/views/detail/childCompos/SkuInfo";
  import DetailRecommend from "@/views/detail/childCompos/DetailRecommend";
  import DetailButtomBar from "@/views/detail/childCompos/DetailButtomBar";
  import Toast from "@/components/common/toast/Toast";

  import {getDetail, getRecommend} from '@/network/detail'


  export default {
    name: "Detail",
    components: {
      DetialNavBar,
      DetailSwiper,
      DetailShopInfo,
      ItemInfo,
      DetailItemInfo,
      ItemParams,
      Rate,
      // SkuInfo,
      DetailRecommend,
      DetailButtomBar,
      Toast
    },
    data() {
      return {
        id: null,
        goodsInfo: {},
        topImages: [],
        shop: {},
        itemInfo: {},
        detailItemInfo: {},
        itemParams: {},
        rate: {},
        skuInfo: [],
        recommendInfo: [],
        detailItemInfoOffsetTop: null,
        itemParamsOffsetTop: null,
        rateOffsetTop: null,
        skuInfoOffsetTop: null,
        currentIndex: null,
        isShow: false,
        message: '商品已经添加到购物车啦'
      }
    },
    created() {
      this.id = this.$route.query.id;
    },
    mounted() {
      // console.log(this.$route);
      // this.id = this.$route.query.id;
      // console.log(this.id);
      getDetail(this.id).then(res => {
        this.goodsInfo = res;
        console.log(res);
        //获取顶部轮播图
        this.getTopImages(res);
        //获取商家信息
        this.getShopInfo(res);
        //获取商品信息
        this.getItemInfo(res);
        //获取详细信息
        this.getDetailInfo(res);
        //获取参数信息
        this.getItemParams(res);
        //获取评论信息
        this.getRate(res);
        //获取推荐信息
        this.getSkuInfo(res);
        //挂载顶部导航切换效果
        this.detailNavBarListener()
      });
      getRecommend().then(res => {
        // this.recommendInfo = res.data.list;

        for (let i = 0; i < res.data.list.length; i++) {
          let obj = {};
          // obj.title = res.data.list[i].title;
          res.data.list[i].price = res.data.list[i].itemSale;
          res.data.list[i].show = {};
          // obj.cfav = res.data.list[i].cfav;
          res.data.list[i].show.img = res.data.list[i].image;
          // console.log('每个对象是'+obj);
          // this.recommendInfo.push(obj);
        }
        this.recommendInfo = res.data.list;
      })
    },
    methods: {
      /**
       * 获取顶部轮播图,传入获得的res
       * @param res
       */
      getTopImages(res) {
        this.topImages = res.result.itemInfo.topImages
      },
      /**
       * 获取商家信息
       * @param res
       */
      getShopInfo(res) {
        const shop = res.result.shopInfo;
        this.shop.shopLogo = shop.shopLogo;
        this.shop.name = shop.name;
        this.shop.cFans = shop.cFans;
        this.shop.sells = shop.cSells;
        this.shop.score = shop.score;
        this.shop.goodsCount = shop.cGoods;
        // console.log('商家信息:' + this.shop);
      },
      /**
       * 获取商品信息
       * @param res
       */
      getItemInfo(res) {
        const item = res.result;
        this.itemInfo.title = item.itemInfo.title;
        this.itemInfo.price = item.itemInfo.price;
        this.itemInfo.oldPrice = item.itemInfo.oldPrice;
        this.itemInfo.discountDesc = item.itemInfo.discountDesc;
        this.itemInfo.desc = item.itemInfo.desc;
        this.itemInfo.sellCount = item.columns[0];
        this.itemInfo.collect = item.columns[1];
        this.itemInfo.parcell = item.columns[2];
        this.itemInfo.rejectName = item.shopInfo.services[2].name;
        this.itemInfo.rejectIcon = item.shopInfo.services[2].icon;
        if (item.shopInfo.services[3].name) this.itemInfo.sendPromiseName = item.shopInfo.services[3].name;
        this.itemInfo.sendPromiseIcon = item.shopInfo.services[3].icon;
        console.log(this.itemInfo);
      },
      /**
       * 获取详细信息
       * @param res
       */
      getDetailInfo(res) {
        const detailInfo = res.result.detailInfo;
        this.detailItemInfo.desc = detailInfo.desc;
        this.detailItemInfo.detailImage = detailInfo.detailImage;
      },
      /**
       * 获取商品参数
       * @param res
       */
      getItemParams(res) {
        this.itemParams.tables = res.result.itemParams.rule.tables;
        this.itemParams.ruleKey = res.result.itemParams.rule.key;
        this.itemParams.infoSet = res.result.itemParams.info.set;
        this.itemParams.infoKey = res.result.itemParams.info.key;
      },
      /**
       * 获取评论信息
       * @param res
       */
      getRate(res) {
        this.rate = res.result.rate;
      },
      /**
       * 获取商品推荐信息
       * @param res
       */
      getSkuInfo(res) {
        this.skuInfo = res.result.skuInfo.skus
      },
      /**
       * 获取偏移的offset
       */
      imgLoad() {
        //-60让点击切换对的位置更准
        this.detailItemInfoOffsetTop = this.$refs.DetailItemInfo.$el.offsetTop;
        // console.log('detailItemInfoOffsetTop是:' + this.detailItemInfoOffsetTop);
        this.itemParamsOffsetTop = this.$refs.ItemParams.$el.offsetTop;
        // console.log('itemParamsOffsetTop是:'+this.itemParamsOffsetTop);
        this.rateOffsetTop = this.$refs.Rate.$el.offsetTop;
        // console.log('rateOffsetTop是:' + this.rateOffsetTop);
        this.skuInfoOffsetTop = this.$refs.SkuInfo.$el.offsetTop;
        // console.log('skuInfoOffsetTop是:'+this.skuInfoOffsetTop);
      },
      /**
       * 根据滑动顶部导航切换效果
       */
      detailNavBarListener() {
        window.addEventListener('scroll', () => {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let flag = 0;
          if (0 <= scrollTop && scrollTop <= this.itemParamsOffsetTop) flag = 0;
          if (this.itemParamsOffsetTop < scrollTop && scrollTop <= this.rateOffsetTop) flag = 1;
          if (this.rateOffsetTop < scrollTop && scrollTop <= this.skuInfoOffsetTop) flag = 2;
          if (this.skuInfoOffsetTop < scrollTop) flag = 3;
          this.currentIndex = flag;
        })
      },
      /**
       * 监听顶部导航单击事件
       */
      navClick(index) {
        console.log(index);
        if (index == 0) {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
        if (index == 1) {
          document.documentElement.scrollTop = this.itemParamsOffsetTop;
          document.body.scrollTop = this.itemParamsOffsetTop;
        }
        if (index == 2) {
          document.documentElement.scrollTop = this.rateOffsetTop;
          document.body.scrollTop = this.rateOffsetTop;
        }
        if (index == 3) {
          document.documentElement.scrollTop = this.skuInfoOffsetTop;
          document.body.scrollTop = this.skuInfoOffsetTop;
        }
      },
      /**
       * 获取单击加入购物车事件
       */
      addCart() {
        // console.log('点击了添加到购物车');
        const product = {};
        product.images = this.topImages[0];
        product.title = this.itemInfo.title;
        product.desc = this.itemInfo.desc;
        product.price = this.itemInfo.price;
        // console.log(product);
        product.iid = this.id;
        product.isChecked = true;
        this.$store.dispatch('addCart', product);
        this.toast(this, 'isShow')
        // this.isShow = true
      },
      /**
       *调用toast方法
       */
      toast: (_this, variable) => {
        _this[variable] = true;
        setTimeout(() => {
          _this[variable] = false
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="less">
  .Detail {
    padding-top: 44px;
    padding-bottom: 2.15rem;
    background-color: #fff;
    /*能盖住底部导航*/
    position: relative;
    z-index: 9;
    background-color: #f5f5f5;
  }
</style>
