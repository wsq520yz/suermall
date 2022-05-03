<template>
  <div class="Category">
    <NavBar>
      <template #center><h2>商品分类</h2></template>
    </NavBar>
    <CategoryNav :categoryList="categoryList" @navChange="navChange"></CategoryNav>
    <CategoryNavDetail :maitKey="maitKey"></CategoryNavDetail>
  </div>
</template>

<script>
  import CategoryNav from "@/views/Category/childComps/CategoryNav";
  import CategoryNavDetail from "@/views/Category/childComps/CategoryNavDetail";
  import NavBar from "@/components/common/navbar/NavBar";
  import {getCategory} from "@/network/category";

  export default {
    name: "Category",
    components: {
      CategoryNav,
      CategoryNavDetail,
      NavBar
    },
    data() {
      return {
        categoryList:[],
        currentIndex:0
      }
    },
    computed:{
      maitKey(){
        if (!this.categoryList.length){
          return "3627"
        }
        return this.categoryList[this.currentIndex].maitKey
      }
    },
    created() {
      this.getCategoryNav()
    },
    mounted() {

    },
    methods: {
      getCategoryNav() {
        getCategory().then(res => {
          this.categoryList = [...res.data.category.list];
          this.categoryList.forEach((el, index) => {
            if (index == 0) {
              el.isActive = true;
            } else {
              el.isActive = false;
            }
          })
        })
      },
      navChange(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style  lang="less">
  .Category {
    width: 100vw;
    display: flex;
    margin-top: 44px;
    .nav-bar{
      background-color: var(--color-tint);
      color: #fff;
    }
  }
</style>
