<template>
<div class="DetailRecommend">
  <GoodsList :goods="recommendInfo" :goodItemImgLoad="goodItemImgLoad"></GoodsList>
</div>
</template>

<script>
  import GoodsList from "../../../components/content/goods/GoodsList";
    export default {
        name: "DetailRecommend",
      components:{
        GoodsList
      },
      props:{
        recommendInfo:{
          type:Array,
          default:[]
        },
        },
      methods:{
        goodItemImgLoad(){
          this.$emit('goodItemImgLoad')
        }
      }
    }
</script>

<style  lang="less">
.DetailRecommend{
  .GoodList{
    background-color: #fff;
  }
}
</style>
