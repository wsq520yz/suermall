<template>
<div class="Detail">
<!--  <h2>这里是商品{{this.$route.query.id}}详情页面</h2>-->
  <DetialNavBar :goodsId="id" ></DetialNavBar>
  <DetailSwiper :banners="topImages"></DetailSwiper>
  <!--  异步数据放到标签展示，不然渲染为空-->
<!--  <p>-->
<!--    {{goodsInfo}}-->
<!--  </p>-->
</div>
</template>

<script>
  import DetialNavBar from "@/views/detail/childCompos/DetialNavBar";
  import DetailSwiper from "@/views/detail/childCompos/DetailSwiper";
  import {getDetail} from '@/network/detail'
    export default {
        name: "Detail",
      components:{
        DetialNavBar,
        DetailSwiper
      },
      data(){
          return{
            id:null,
            goodsInfo:{},
            topImages:[]
          }
      },
      created() {
        this.id = this.$route.query.id;
      },
      mounted() {
        // console.log(this.$route);
        this.id = this.$route.query.id;
        console.log(this.id);
        getDetail(this.id).then(res=>{
          this.goodsInfo = res;
          console.log(res);
          this.topImages = res.result.itemInfo.topImages
        })
      },
    }
</script>

<style scoped lang="less">
.Detail{
  padding-top: 44px;
}
</style>
