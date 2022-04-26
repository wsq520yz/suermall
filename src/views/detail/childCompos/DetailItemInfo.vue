<template>
<div class="detailItemInfo">
  <div class="desc">
    <p>{{detailItemInfo.desc}}</p>
  </div>
  <div class="detailImage" v-for="item in detailItemInfo.detailImage">
    <div class="divideName">
      <span>{{item.key}}</span>
    </div>
    <div class="detailImg" v-for="imgUrl in item.list">
      <div class="imgWrapper">
        <img :src="imgUrl" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "DetailItemInfo",
      props:{
        detailItemInfo:{
          type:Object,
          default(){
            return{}
          }
        }
      }
    }
</script>

<style scoped lang="less">
.detailItemInfo{
  .desc{
    padding-top: 35px;
    position: relative;
    :before{
      content: "";
      position: absolute;
      left: 15px;
      top: 8px;
      width: 85px;
      height: 5px;
      border-bottom: 1px solid black;
      border-left:5px solid black ;
    }
     :after{
      content: "";
      position: absolute;
      right: 15px;
      bottom: 8px;
      width: 85px;
      height: 5px;
      border-bottom: 1px solid black;
      border-right:5px solid black ;
    }

    p{
     text-indent: 15px;
      padding-bottom: 30px;
    }
  }
  .detailImage{
    padding-top: 15px;
    .divideName{
      padding-left: 8px;
      font-weight: bolder;
    }
    .imgWrapper{
      padding-top: 8px;
      border-radius: 15px;
      /*overflow: hidden;*/
      text-align: center;
      img{
        border-radius: 8px;
        width: 95%;
      }
    }
  }
}
</style>
