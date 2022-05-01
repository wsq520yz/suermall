<template>
  <div class="cart">
    <NavBar>
      <template #center class="nav_bar"><h2>购物车({{length}})</h2></template>
    </NavBar>
    <CartList></CartList>
    <CartBottomNav></CartBottomNav>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import {mapGetters} from 'vuex'
  import CartList from "@/views/cart/childComps/CartList";
  import CartBottomNav from "@/views/cart/childComps/CartBottomNav";
    export default {
        name: "Cart",
      computed:{
        ...mapGetters({
          length:'getCartListLength',
        })
      },
      components:{
          NavBar,
        CartList,
        CartBottomNav
      }
    }
</script>

<style scoped lang="less">
  .cart{
    padding-top: 44px;
    position: relative;
    .nav-bar{
      background-color: var(--color-tint);
      color: #fff;
      font-weight: 700;
    }
  }

</style>
