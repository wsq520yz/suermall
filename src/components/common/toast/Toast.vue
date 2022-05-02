<template>
 <div class="Toast" v-show="show">
   <span>{{message}}</span>
 </div>
</template>

<script>
    export default {
        name: "Toast",
      props:{
          message:{
            type:String,
            default(){
              return ''
            }
          },
        show:{
            type: Boolean,
          default() {
            return false
          }
        }
      }
    }
</script>

<style scoped lang="less">
.Toast{
  position: fixed;
  padding: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #666666;
  background-color: rgba(0,0,0,.2);
}
</style>
