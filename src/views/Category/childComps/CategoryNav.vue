<template>
  <div class="CategoryNav">
    <div class="categoryNavItem" v-for="(item ,index)  in categoryList"
         @click="navItemClick(index)" :class="{active:item.isActive}">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryNav",
    props: {
      categoryList: {
        type: Array,
        default: []
      }
    },
    created() {
    },
    mounted() {
    },
    data() {
      return {
        isActiveList: []
      }
    },
    methods: {
      navItemClick(index) {
        this.categoryList.forEach(el=>{
          el.isActive = false
        });
        this.categoryList[index].isActive = true
        this.$emit('navChange',index)
      }
    }
  }
</script>

<style scoped lang="less">
  .CategoryNav {
    width: 2rem;
    height: calc(100vh - 50px - 44px);
    overflow: scroll;
    flex: 1;
    background-color: #f1f1f1;
    .active{
      background-color: #fff;
      border-left: 1vw solid var(--color-tint);
      color: var(--color-tint);
    }
    .categoryNavItem {

      line-height: 12vw;
      text-align: center;

      span {
        line-height: 100%;
        font-size: 3.73333vw
      }
    }
  }
</style>
