<template>
    <div class="CartBottomNav">
      <div class="allCheck">
        <CheckButton class="checkBtn" :isChecked="isAllChecked" @click="allCheckedClick"></CheckButton>
        <div class="allText">全选</div>
      </div>
      <div class="totalPrice">总计:￥{{totalPrice}}</div>
      <div class="buy">去购买({{totalCount}})</div>
    </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from 'vuex'
    export default {
        name: "CartBottomNav",
      computed:{
        ...mapGetters({
          isAllChecked:'getIsAllChecked',
          totalPrice:'getTotalPrice',
          totalCount:'getTotalIsChecked'
        })
      },
      components:{
          CheckButton
      },
      methods:{
        allCheckedClick(){
          this.$store.dispatch('changeAllIsChecked',this.isAllChecked)
        }
      }
    }
</script>

<style  lang="less">
.CartBottomNav{
  background-color: #f5f5f5;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  height: 3rem;
  bottom:50px;
  .allCheck{
    flex: 1;
    display: flex;
    .checkBtn{
      flex: 1;
      .check_box{
        margin-top: .2rem;
        width: 1.5rem;
        height: 1.5rem;
      }
      .checked{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .allText{
      flex: 1;
      line-height: 3rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  .totalPrice{
    flex: 1;
    line-height:3rem ;
    font-weight: 600;
    font-size: 1rem;
  }
  .buy{
    flex: 1;
    background-color: #FF0033;
    line-height: 3rem;
    font-weight: 600;
    font-size: 1.25rem;
    text-align: center;
    color: #fff;
  }
}
</style>
