<template>
  <div class="ItemInfo">
   <div class="desc"><p>{{itemInfo.title}}</p></div>
    <div class="price">
      <span class="currentPrice">{{itemInfo.price}}</span>
      <span class="oldPrice">{{itemInfo.oldPrice}}</span>
      <span  class="discountDesc">{{itemInfo.discountDesc}}</span>
    </div>
    <div class="sellInfo">
      <span class="sellCount">{{itemInfo.sellCount}}</span>
      <span class="collect">{{itemInfo.collect}}</span>
      <span class="parcell">{{itemInfo.parcell}}</span>
    </div>
    <div class="service">
      <div class="reject">
        <img :src="itemInfo.rejectIcon" alt="">
        <span>{{itemInfo.rejectName}}</span>
      </div>
     <div class="sendPromise">
       <span>{{itemInfo.sendPromiseName}}</span>
       <img :src="itemInfo.sendPromiseIcon" alt="">
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemInfo",
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data(){
      return{
        // reject:this.itemInfo.services[2],
        // sendPromise:this.itemInfo.services[3],
      }
    }
  }
</script>

<style scoped lang="less">
.ItemInfo{
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 3px  solid lightgray;
  .desc{
      p{
        font-size: 1.1em;
        font-weight: bold;
      }
    padding-bottom: 8px;
  }
  .price{
    padding-bottom: 5px;
    span{
      margin: 5px;
    }
    .currentPrice{
      color: var(--color-tint);
      font-size: 1.3em;
    }
    .oldPrice{
      text-decoration: line-through;
    }
    .discountDesc{
      font-size: 1.15em;
      background-color: var(--color-tint);
      border-radius: 5px;
      color: #fff;
      padding:3px;
    }
  }
  .sellInfo{
    display: flex;
    padding-top: 5px;
    .sellCount{
      padding-left: 5px;
      flex: 1;
    }
    .collect{
     flex: 1;
    }
    .parcell{
     flex: 1;
      padding-right: 5px;
      text-align: right;
    }
  }
  .service{
    padding-top: 5px;
    display: flex;
    img{
      width: 22px;
    }
    .reject{
      flex: 1;
      img{
        float: left;
      }
      span{
        padding-left: 5px;
        line-height: 22px;
      }
    }
    .sendPromise{
      flex: 1;
      padding-right: 5px;
      img{
        float: right;
        line-height: 22px;
      }
      span{
        float: right;
        padding-left: 5px;
        line-height: 22px;
      }
    }
  }
}
</style>
