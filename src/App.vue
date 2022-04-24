<template>
  <div>
    <router-view>
    </router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>
<script>
  import MainTabBar from "@/components/content/tabbar/MainTabBar";
  import {ref, defineComponent} from 'vue'

  export default {
    components: {
      // TabBar,
      // TabBarItem
      MainTabBar
    },
  }

</script>
<style lang="less">
  @import "assets/css/base.css";

  #app {
    width: 100%;
    overflow: hidden;

    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/

    img {
      /*width: 100%;*/
    }
  }

  /*nav {*/
  /*  padding: 30px;*/

  /*  a {*/
  /*    font-weight: bold;*/
  /*    color: #2c3e50;*/

  /*    &.router-link-exact-active {*/
  /*      color: #42b980;*/
  /*    }*/
  /*  }*/
  /*}*/
</style>
