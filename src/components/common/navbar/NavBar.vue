<template>
    <div class="nav-bar">
      <div class="nav-left"><slot  name="left"></slot></div>
      <div class="nav-center"><slot  name="center"></slot></div>
      <div class="nav-right"><slot  name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="less">
    .nav-bar{
      display:  flex;
      height: 44px;
      line-height: 44px;
      box-shadow: 0 1px 1px rgba(100,100,100,.1);
      background-color: var(--color-tint);
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 100;
      /*background-color: rebeccapurple;*/
    }
    .nav-left,.nav-right{
      width: 60px;
      /*background-color: blue;*/
    }
    .nav-center{
      flex: 1;
      text-align: center;
        /*background-color: green;*/
    }
</style>
