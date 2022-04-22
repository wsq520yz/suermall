<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" >
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">
.recommend {
  display:  flex;
  padding: 15px  0  30px;
  border-bottom: 5px solid #eee;
  .recommend-item{
    flex:1;
    text-align: center;
    font-size: 12px;
    img{
      max-width: 80%;
      max-height: 80%;
      margin-bottom: 5px;
    }
  }
}
</style>
