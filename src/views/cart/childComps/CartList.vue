<template>
    <div class="CartList">
      <div class="cartListItem" v-for="item in cartList">{{item}}</div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "CartList",
       computed:{
          ...mapGetters({
            cartList:'getCartList'
          })
       }
    }
</script>

<style scoped>

</style>
