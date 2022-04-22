<template>
  <div class="tab-bar-item">
    <div @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed:{
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    methods: {
      itemClick() {
        console.log(this.path);
        // this.$router.push(this.path)
        this.$router.replace(this.path)
      }
    }
  }
</script>
<!--插槽的时候scoped要去掉，不然样式作用不到插槽的标签上去-->
<style lang="less">
  .tab-bar-item {
    text-align: center;
    flex: 1;
    height: 49px;
    img {
      height: 24px;
      width: 24px;
      margin-top: 3px;
      /*去除图片下面3px*/
      vertical-align: middle;
      margin-bottom: 2px;
    }
  }
</style>
