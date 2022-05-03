<template>
    <div class="ProfileInfo">
      <div class="userInfo">
        <div class="userIcon">
          <img src="@/assets/img/common/default.webp" alt="">
        </div>
        <div class="infomessage">
          <div class="loginAndregist">
            登录/注册
          </div>
          <div class="phoneNumber">
            <img src="@/assets/img/common/手机.svg" alt="">暂无手机号码
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileInfo"
    }
</script>

<style scoped lang="less">
.ProfileInfo{
  background-color: var(--color-tint);
  height: 25vw;
  .userInfo{
    padding: 5vw;
    .userIcon{
      width: 15vw;
      height: 15vw;
      border-radius: 50%;
      background-color: #fff;
      overflow: hidden;
      float: left;
      img{
        width: 20vw;
      }
    }
  }
  .infomessage{
    color: white;
    margin-left: 25px;
    margin-top: 5px;
    line-height: 22px;
    float: left;
    .phoneNumber{
      padding-left: 15px;
      img{
        float: left;
        margin-top: 3px;
        width: 15px;
        color: white;
      }
    }
  }
}
</style>
