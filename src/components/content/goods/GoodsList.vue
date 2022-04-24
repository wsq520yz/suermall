<template>
  <div class="GoodList">
    <GoodsListItem v-for="item in  goods" :item="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">
.GoodList{
  padding-top: 15px;
  width: 100%;
  display: grid;
  grid-template-columns:50%  50% ;
}
</style>
