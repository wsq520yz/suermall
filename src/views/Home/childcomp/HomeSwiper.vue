<template>
  <div>
    <swiper>
      <swiper-item v-for="item  in banners">
        <a :href="item.link"></a>
        <img :src="item.image" alt="">
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
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
