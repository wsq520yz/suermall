<template>
<div class="Detail">
  <h2>这里是商品{{this.$route}}详情页面</h2>
</div>
</template>

<script>
    export default {
        name: "Detail",
      mounted() {
        console.log(this.$route);
      }
    }
</script>

<style scoped>

</style>
