<template>
  <div>
    <swiper>
      <swiper-item v-for="item  in banners">
        <a :href="item.link"></a>
        <img :src="item.image" alt="" @load="imageLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'

  export default {
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
        return{
          // isLoad:false
        }
    },
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        this.$emit('swiperImageLoad')
      }
    }
  }
</script>

<style scoped>
img{
  width: 100%;
}
</style>
