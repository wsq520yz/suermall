<template>
<div class="FeatureView">
  <a href="https://act.mogujie.com/zzlx67">
    <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="featureViewImageLoad">
  </a>
<!--  ul>li{列表$}*100-->
</div>
</template>

<script>
    export default {
        name: "FeatureView",
      methods:{
        featureViewImageLoad(){
          this.$emit('FeatureViewImageLoad')
        }
      }
    }
</script>

<style scoped lang="less">
.FeatureView{
    img{
      width: 100%;
      /*高度自己调整*/
      /*height: 80%;*/
    }
}
</style>
