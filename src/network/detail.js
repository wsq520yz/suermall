import {request} from "./request";
import axios from "axios";

export function getDetail(iid) {
  // axios({
  //   //请求方式，'GET'或者'POST'
  //   method: 'GET',
  //   //请求地址
  //   url: 'http://152.136.185.210:7878/api/hy66/detail?iid=' + iid
  // }).then(res=>{
  //   console.log('返回值类型是:'+typeof res.data);
  //   return res.data
  // }).catch(err=>{
  //   console.log(err);
  // })
  return request({
    url:'/detail',
    params:{
      iid
    }
  })

  // axios.get('http://152.136.185.210:7878/api/hy66/detail',{
  //   params:{
  //     iid:iid
  //   }
  // }).then(res=>{
  //   console.log(res);
  // })
  // return request({
  //   url: '/detail',
  //   params: {
  //     iid
  //   }
  // })
}
