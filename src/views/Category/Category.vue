<template>
  <InfiniteList :data="data1" :width="'100%'" :height="500" :itemSize="50" :debug="debug" v-slot="{ item, index }">
    <div class="li-con">{{ index + 1 }} : {{ item }}</div>
  </InfiniteList>
</template>

<script>
  import InfiniteList from 'vue3-infinite-list';
    export default {
        name: "Category",
      components:{
          InfiniteList
      },
      data(){
        return{
          scroll:null,
          data1:[]
        }
      },
      created() {
          for (let i = 0 ; i < 100 ; i++){
            this.data1.push(i)
          }
      },
      mounted() {
        // console.log(document.querySelector('.wrapper'));
        // this.scroll = new BScroll(this.$refs.wrapper, {})
      },
    }
</script>

<style  lang="less">
.wrapper{
  ul{
    height: 150px;
    background-color: #666666;
    color: white;
    overflow: hidden;
    /*会自动隐藏*/
    /*overflow-y:scroll;*/
  }

}
</style>
