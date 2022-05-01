<template>
    <div class="CartList">
      <div class="cartListItem" v-for="(item,index) in cartList">
        <div class="checkBox"><CheckButton class="checkBtn" :isChecked="item.isChecked" @click="checkBtnClick(index)"></CheckButton></div>
        <div class="content"><div class="imgWrapper">
          <img :src="item.images" alt="">
        </div>
        <div class="contentText">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <span class="price">{{item.price}}</span>
          <span class="count">X{{item.count}}</span>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
  import CheckButton from "./CheckButton";

  import {mapGetters} from 'vuex'
    export default {
        name: "CartList",
      components:{
        CheckButton
      },
       computed:{
          ...mapGetters({
            cartList:'getCartList'
          })
       },
      methods:{
        checkBtnClick(index){
          // console.log(index+'被单击了');
          this.$store.commit('changeIsChecked',index)
        }
      }
    }
</script>

<style scoped lang="less">
.CartList{
  padding-top: 1.5rem;
  .cartListItem{
    display: flex;
    padding-bottom: 1.15rem;
    padding-top: 0.75rem;
    border-bottom: 2px solid #E1E1E1;
    .checkBtn{
        margin-top: 3.8rem;
    }
    .checkBox{
      width: 44px;
    }
    .content{
      flex: 1;
      display: flex;
      .imgWrapper{
        width: 103px;
        border-radius: 15px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .contentText{
        flex: 1;
        position: relative;
        padding-left: 0.75rem;
        p{
          width: 13rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .title{
          padding-top: .5rem;
          font-weight: 700;
          font-size: 1.25rem;
        }
        .desc{
          margin-top: 1.25rem;
          font-size: .8rem;
          color: #B3A8AC;
        }
        .price{
          position: absolute;
          left: 0.75rem;
          bottom: 0.75rem;
          font-size: 1.35rem;
          color: var(--color-tint);
          font-weight: 800;
        }
        .count{
          position: absolute;
          right: 0.75rem;
          bottom: 0.75rem;
        }
      }
    }
  }
}
</style>
