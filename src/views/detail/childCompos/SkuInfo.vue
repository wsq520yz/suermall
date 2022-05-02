<template>
  <div class="skuInfo">
    <div class="head">
      <span>推荐商品</span>
    </div>
    <div class="sku_item" v-for="item in skuInfo">
      <div class="imgWrapper">
        <img v-lazy="item.img" alt="" @load="skuInfoImgLoad">
      </div>
      <div class="itemInfo">
<!--        <span class="currency">{{item.currency}}</span>-->
        <span class="price">原价:{{item.currency}}{{item.price}}</span>
        <span class="noPrice">现价:{{item.currency}}{{item.nowprice}}</span>
        <span class="size">规格:{{item.size}}</span>
        <span class="style">样式:{{item.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SkuInfo",
    props: {
      skuInfo:{
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      skuInfoImgLoad(){
        this.$emit('skuInfoImgLoad')
      }
    }
  }
</script>

<style scoped lang="less">
  .skuInfo{
    margin-top: 5px;
    padding-top: 5px;
    background-color: #fff;
    .head{
      padding-left: 14px;
      padding-bottom: 5px;
    }
    .sku_item{
      .imgWrapper{
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .itemInfo{
        padding-top: 14px;
        padding-bottom: 14px;
        span{
          margin: 8px;
        }
        .price{
          text-decoration: line-through;
        }
      }
    }
  }
</style>
