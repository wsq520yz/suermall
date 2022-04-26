<template>
  <div class="DetailShopInfo">
    <div class="top">
      <div class="logo">
        <img :src="shop.shopLogo" alt="">
      </div>
      <div class="name">
        <span>{{shop.name}}</span>
      </div>
    </div>
    <div class="shopInfo">
      <div class="sellsAndCount">
        <tr class="topLine">
          <td><h2>{{shop.sells}}</h2></td>
          <td><h2>{{shop.goodsCount}}</h2></td>
        </tr>
        <tr>
          <td><span>总销量</span></td>
          <td><span>全部宝贝</span></td>
        </tr>
      </div>

      <div class="describe">
        <tr v-for="item in shop.score">
          <td>{{item.name}}</td>
          <td :class="item.isBetter?'activeScore':'unActiveScore'">{{item.score}}</td>
        <td ><span :class="item.isBetter?'active':'unActive'">{{item.isBetter?'高':'低'}}</span> </td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    }

  }
</script>

<style scoped lang="less">
  .DetailShopInfo {
    padding-bottom: 15px;
    border-bottom: 3px  solid lightgray;
    .top {
      display: flex;

      .logo {
        width: 80px;
        border-radius: 50%;
        border: 1px solid lightgray;
        overflow: hidden;
        margin-top: 25px;
        margin-left: 25px;

        img {
          width: 80px;
          /*display: block;*/
          /*border: none;*/
          /*border-radius: 50%;*/
        }
      }

      .name {
        flex: 1;

        span {
          display: block;
          margin-top: 50px;
          margin-left: 14px;
          font-size: 18px;
        }
      }
    }

    .shopInfo {
      display: flex;

      .sellsAndCount {
        flex: 1;
        text-align: center;
        border-right: 1px solid lightgray;
        margin-top: 15px;
        tr {
          td {
            padding: 8px;
          }
        }
      }
    }

    .describe {
      flex: 1;
      text-align: center;
      tr{
        margin-top: 5px;
        td{
          padding: 8px;
          span{
            font-size: larger;
          }
        }
      }
      .activeScore{
        color:var(--color-tint) ;
      }
      .active{
        border-radius: 3px;
        background-color:var(--color-tint) ;
        color: #fff;
      }
      .unActiveScore{
        color: lightgreen;
      }
      .unActive{
        border-radius: 3px;
        background-color:lightgreen ;
        color: #fff;
      }
    }
  }
</style>
