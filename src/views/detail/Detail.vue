<template>
  <div class="Detail">
    <!--  <h2>这里是商品{{this.$route.query.id}}详情页面</h2>-->
    <DetialNavBar :goodsId="id"></DetialNavBar>
    <DetailSwiper :banners="topImages"></DetailSwiper>
    <ItemInfo :itemInfo="itemInfo"></ItemInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <!--  异步数据放到标签展示，不然渲染为空-->
    <!--  <p>-->
    <!--    {{goodsInfo}}-->
    <!--  </p>-->
  </div>
</template>

<script>
  import DetialNavBar from "@/views/detail/childCompos/DetialNavBar";
  import DetailSwiper from "@/views/detail/childCompos/DetailSwiper";
  import ItemInfo from "@/views/detail/childCompos/ItemInfo";
  import DetailShopInfo from "@/views/detail/childCompos/DetailShopInfo";
  import {getDetail} from '@/network/detail'

  export default {
    name: "Detail",
    components: {
      DetialNavBar,
      DetailSwiper,
      DetailShopInfo,
      ItemInfo
    },
    data() {
      return {
        id: null,
        goodsInfo: {},
        topImages: [],
        shop: {},
        itemInfo:{}
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
      getItemInfo(res){
        const item = res.result;
        this.itemInfo.title = item.itemInfo.title;
        this.itemInfo.price = item.itemInfo.price;
        this.itemInfo.oldPrice = item.itemInfo.oldPrice;
        this.itemInfo.discountDesc = item.itemInfo.discountDesc;
        this.itemInfo.sellCount = item.columns[0];
        this.itemInfo.collect = item.columns[1];
        this.itemInfo.parcell = item.columns[2];
        this.itemInfo.rejectName= item.shopInfo.services[2].name;
        this.itemInfo.rejectIcon= item.shopInfo.services[2].icon;
        this.itemInfo.sendPromiseName= item.shopInfo.services[3].name;
        this.itemInfo.sendPromiseIcon= item.shopInfo.services[3].icon;
        console.log(this.itemInfo);
      }
    }
  }
</script>

<style scoped lang="less">
  .Detail {
    padding-top: 44px;
  }
</style>
