<template>
  <div class="GoodsListItem" @click="itemClick">
    <img :src="item.show.img" alt="">
    <div>
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods:{
      itemClick(){
        console.log('被单击了');
        this.$router.push('/detail' + this.item.iid)
      }
    }

  }
</script>

<style scoped lang="less">
  .GoodsListItem {
    padding-bottom: 40px;

    img {
      display: block;
      width: 80%;
      border-radius: 5px;
      margin: 0 auto;
    }
    div {
      padding-top: 5px;
      width: 90%;
      margin: 0 auto;
      text-align: center;
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: 3px;
            }

            .price {
              color: var(--color-high-text);
              margin-right: 20px;
            }
          }
    .collect {
      position: relative;
    }
    .collect::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("@/assets/img/common/collect.svg") 0 0/14px 14px;
    }
  }
</style>
