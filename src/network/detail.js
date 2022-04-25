import {request} from "./request";
import axios from "axios";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
