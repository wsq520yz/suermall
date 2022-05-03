<template>
  <div class="CategoryNavDetail">
    <div class="detailItem" v-for="item in detailList">
      <div class="imgWrapper">
        <img :src="item.image" alt="">
      </div>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  import {getCategoryDetail} from "../../../network/category";

  export default {
    name: "CategoryNavDetail",
    props: ['maitKey'],
    data(){
      return{
        detailList:[]
      }
    },
    mounted() {
      getCategoryDetail(this.maitKey).then((res)=>{
        this.detailList = [...res.data.list]
      })
    },
      watch: {
      maitKey: function (newVal, oldVal) {
        getCategoryDetail(newVal).then((res)=>{
            this.detailList = [...res.data.list]
        })
      }
    },
  }
</script>

<style scoped lang="less">
  .CategoryNavDetail {
    flex: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: calc(100vh - 55px - 44px);
    overflow: scroll;
    .detailItem{
      text-align: center;
      .imgWrapper{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
