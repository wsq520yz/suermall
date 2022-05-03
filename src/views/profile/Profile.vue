<template>
  <div class="Profile">
    <NavBar>
      <template #center>
        <h2>购物商城</h2>
      </template>
    </NavBar>
    <ProfileInfo></ProfileInfo>
    <div class="detailInfo">
      <div class="money">
        <div class="num">
          0.00元
        </div>
        <span>我的余额</span>
      </div>
      <div class="youhui">
        <div class="num">
          0.个
        </div>
        <span>我的优惠</span>
      </div>
      <div class="score">
        <div class="num">
          0.个
        </div>
        <span>我的积分</span>
      </div>
    </div>
    <div class="detailUserInfo">
      <div >
        <div class="imgWrapper">
          <img src="@/assets/img/common/信封.svg" alt="">
        </div>
        <div class="text">我的消息</div>
      </div>
      <div >
        <div class="imgWrapper">
          <img src="@/assets/img/common/购物袋.svg" alt="">
        </div>
        <div class="text">积分商城</div>
      </div>
      <div >
        <div class="imgWrapper">
          <img src="@/assets/img/common/会员卡.svg" alt="">
        </div>
        <div class="text">会员卡</div>
      </div>

    </div>
    <div class="detailUserInfo  bottom">
      <div >
        <div class="imgWrapper">
          <img src="@/assets/img/common/购物车空.svg" alt="">
        </div>
        <div class="text">购物车</div>
      </div>
      <div >
        <div class="imgWrapper">
          <img src="@/assets/img/common/下载1.svg" alt="">
        </div>
        <div class="text">下载购物车APP</div>
      </div>

    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import ProfileInfo from "@/views/profile/childComps/ProfileInfo";
    export default {
        name: "Profile",
      components:{
          NavBar,
        ProfileInfo
      }
    }
</script>

<style  lang="less">
    .Profile{
      width: 100vw;
      padding-top: 45px;
      background-color: #f5f5f5;
      height: 100vh;
      .nav-bar{
        background-color: var(--color-tint);
        color: #fff;
      }
      .detailInfo{
        margin-top: 5px;
        background-color: #fff;
        display: flex;
        text-align: center;
        padding: 15px;
        .num{
          color: #ff8198;
          font-size: 24px;
          font-weight: 600;
        }
        .money{
          flex: 1;
          border-right: 2px solid #f2f2f2;
        }
        .youhui{
          flex: 1;
          border-right: 2px solid #f2f2f2;
        }
        .score{
          flex: 1;
        }
      }
      .detailUserInfo{
        margin-top: 14px;
        background-color: #fff;
        div{
          display: flex;
          border-bottom: 1px solid #f2f2f2;
          .imgWrapper{
            width:28px;
            margin-left: 44px;
            img{
              width:28px;
            }
          }
          .text{
            font-size: 18px;
            font-weight: 300;
            padding-left: 15px;
            line-height: 44px;
            flex: 4;
          }
        }
      }
      .bottom{
        height: 100vh;
        overflow: hidden;
      }
    }
</style>
