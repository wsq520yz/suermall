<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About 1111</router-link>-->
<!--  </nav>-->
  <div>
    <router-view/>
    <MainTabBar></MainTabBar>
<!--    <TabBar>-->
<!--      <TabBarItem  path="/home">-->
<!--        &lt;!&ndash;          自定义别名必须加~&ndash;&gt;-->
<!--        <template #item-icon><img src="~assets/img/tabbar/home.svg" alt=""/></template>-->
<!--        <template #item-text><div>首页</div></template>-->
<!--      </TabBarItem>-->
<!--      <TabBarItem path="/category">-->
<!--        <template #item-icon><img src="./assets/img/tabbar/category.svg" alt=""/></template>-->
<!--        <template #item-text><div>分类</div></template>-->
<!--      </TabBarItem>-->
<!--      <TabBarItem path="/cart">-->
<!--        <template #item-icon><img src="./assets/img/tabbar/shopcart.svg" alt=""/></template>-->
<!--        <template #item-text><div>购物车</div></template>-->
<!--      </TabBarItem>-->
<!--      <TabBarItem  path="/profile">-->
<!--        <template #item-icon><img src="./assets/img/tabbar/profile.svg" alt=""></template>-->
<!--        <template #item-text><div>我的</div></template>-->
<!--      </TabBarItem>-->

<!--    </TabBar>-->
  </div>

</template>
<script>
  // import TabBar from './components/content/tabbar/TabBar';
  // import TabBarItem from "@/components/content/tabbar/TabBarItem";
  import MainTabBar from "@/components/content/tabbar/MainTabBar";
  export  default  {
    components:{
      // TabBar,
      // TabBarItem
      MainTabBar
    }
  }
</script>
<style lang="less">
  @import "assets/css/base.css";
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
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
