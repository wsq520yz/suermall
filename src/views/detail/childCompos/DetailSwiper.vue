<template>
  <div class="DetailSwiper">
    <swiper>
      <swiper-item v-for="item  in banners" class="swiper-item">
        <a :href="item.link"></a>
        <img v-lazy="item" alt="" @load="swiperImageLoad" >
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      swiperImageLoad(){
        this.$emit('swiperImageLoad')
      }
    }
  }
</script>

<style scoped lang="less">
.DetailSwiper{
  .swiper-item{
    height: 300px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
</style>
