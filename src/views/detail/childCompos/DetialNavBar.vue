<template>
  <div class="DetailNavBar" id="DetailNavBar">
    <NavBar>
      <template #left>
        <div class="left" @click="backClick">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template #center>
        <div class="center">
          <div v-for="(item,index) in titles" @click="titleClick(index)" :class="{active:index == this.currentIndex}">
            {{item}}
          </div>
        </div>
        <p>
          {{this.goodsInfo}}
        </p>
      </template>
    </NavBar>

  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  // getDetail必须加花括号,不是默认方法必须写
  import {getDetail} from '@/network/detail'

  export default {
    name: "DetialNavBar",
    components: {
      NavBar
    },
    props: {
        currentIndex: {
          type: Number,
          default() {
            return 0
          }
        }
      },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        // currentIndex: 0,
      }
    },
    mounted() {
      console.log('nav' + this.goodsId);
      console.log(this.goodsInfo);
    },
    methods: {
      titleClick(index) {
        console.log(index);
        // this.currentIndex = index;
        this.$emit('navClick',index);
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="less">
  #DetailNavBar {
    .nav-bar {
      /*设置组件样式穿到组件里面去才有效果*/
      background-color: #fff;
    }

    position: relative;
    z-index: 10;

    .left {
      img {
        display: block;
        margin-top: 12px;
        margin-left: 12px;
      }
    }

    .center {
      display: flex;

      .active {
        color: var(--color-tint);
      }

      div {
        flex: 1;
      }
    }
  }
</style>
