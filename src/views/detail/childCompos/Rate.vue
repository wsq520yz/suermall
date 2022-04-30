<template>
    <div class="Rate">
      <div class="head">
        <span>商品评论</span>
      </div>
      <div class="rateItem" v-for="item in rate.list">
        <div class="user">
          <div class="user_icon">
            <img :src="item.user.avatar" alt="">
          </div>
          <div class="username">
            <span>{{item.user.uname}}</span>
          </div>
        </div>
        <div class="buyStyle">
            <span>
              {{item.style}}
            </span>
      </div>
        <div class="content">
          <p class="rate_content">{{item.content}}</p>
          <div class="contentImg" >
           <div class="imgWrapper" v-for="cImg in item.images">
             <img :src="cImg" alt="">
           </div>
          </div>
        </div>
        <div class="upRate">
          <input type="text" value="你的评论.....">
          <button>提交</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Rate",
      props:{
        rate:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      components:{
      }
    }
</script>

<style scoped lang="less">
 .Rate{
   margin-top: 5px;
   background-color: #fff;
   .head{
     padding-top: 8px;
     padding-left: 15px;
   }
   .rateItem{
     .user{
       display: flex;
       padding-top: 8px;
       padding-left: 5px;
       .user_icon{
         width: 44px;
         border-radius: 50%;
         overflow: hidden;
         img {
           width: 100%;
         }
       }
       .username{
         flex: 1;
         span{
           padding-left: 15px;
           font-weight: bolder;
           font-size: 18px;
           line-height:44px;
         }
       }
     }
     .buyStyle {
       padding-top: 15px;
       padding-left: 15px;
       font-weight: bolder;
       color: darkgray;
     }
     .content{
       .rate_content{
         margin-top: 5px;
         word-spacing: 5px;
       }
       .contentImg{
         margin-top: 5px;
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         .imgWrapper{
           img{
             width: 100%;
           }
         }
       }
     }
   }

 }
</style>
