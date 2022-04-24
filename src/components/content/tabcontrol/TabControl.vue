<template>
  <div class="tab-control "  >
      <div v-for="(item,index) in titles"  class="tab-control-item" :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span >{{item}}</span>
    </div>
    </div>
</template>
<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      },
      isTabBarFixed:{
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    methods:{
      itemClick(index) {
        this.$emit('tabClick',index);
        this.currentIndex = index;
        // this.$store.commit('setCurrentIndex',index)
      }
    }
  }
</script>

<style  lang="less">
  .tab-control{
    display: flex;
    .tab-control-item{
      height: 40px;
      flex: 1;
      text-align: center;
      line-height: 44px;
      font-size: 1.25em;
    }
    .active{
      color: var(--color-tint);
      span{
        padding-bottom: 5px;
        border-bottom: 3px solid var(--color-tint);
      }
    }
  }
</style>
