<template>
  <div id="tab-bar">
    <slot></slot>
    <!--        <div class="tab-bar-item"><img src="../../assets/img/tabbar/首页.png" alt=""><div>首页</div></div>-->
    <!--        <div class="tab-bar-item"><img src="../../assets/img/tabbar/分类.png" alt=""><div>分类</div></div>-->
    <!--        <div class="tab-bar-item"><img src="../../assets/img/tabbar/购物车空.png" alt=""><div>购物车</div></div>-->
    <!--        <div class="tab-bar-item"><img src="../../assets/img/tabbar/我的.png" alt=""><div>我的</div></div>-->
  </div>
</template>

<script>
    export default {
        name: "TabBar",

    }
</script>

<style scoped lang="less">
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }
</style>
