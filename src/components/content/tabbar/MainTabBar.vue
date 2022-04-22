<template>
    <div>
      <TabBar>
        <TabBarItem  path="/home">
          <!--          自定义别名必须加~-->
          <template #item-icon><img src="@/assets/img/tabbar/home.svg" alt=""/></template>
          <template #item-icon-active><img src="@/assets/img/tabbar/home_active.svg" alt=""/></template>

          <template #item-text><div>首页</div></template>
        </TabBarItem>
        <TabBarItem path="/category">
          <template #item-icon><img src="@/assets/img/tabbar/category.svg" alt=""/></template>
          <template #item-icon-active><img src="@/assets/img/tabbar/category_active.svg" alt=""/></template>
          <template #item-text><div>分类</div></template>
        </TabBarItem>
        <TabBarItem path="/cart">
          <template #item-icon><img src="@/assets/img/tabbar/shopcart.svg" alt=""/></template>
          <template #item-icon-active><img src="@/assets/img/tabbar/shopcart_active.svg" alt=""/></template>
          <template #item-text><div>购物车</div></template>
        </TabBarItem>
        <TabBarItem  path="/profile">
          <template #item-icon-active><img src="@/assets/img/tabbar/profile_active.svg" alt=""></template>
          <template #item-icon><img src="@/assets/img/tabbar/profile.svg" alt=""></template>
          <template #item-text><div>我的</div></template>
        </TabBarItem>

      </TabBar>
    </div>
</template>

<script>
  import TabBar from '@/components/content/tabbar/TabBar';
  import TabBarItem from "@/components/content/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
      components:{
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
