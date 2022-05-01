import {createStore} from 'vuex'

export default createStore({
  state: {
    currentType: 'pop',
    cartList: []
  },
  getters: {
    getCurrentType: state => {
      return state.currentType
    },
    getCartListLength:state => {
      return state.cartList.length
    },
    getCartList:state => {
      return state.cartList
    },
    getIsAllChecked:state => {
      let flag = true;
      for (let item  of state.cartList){
        // @ts-ignore
        flag = (flag && item.isChecked)
      }
      return flag;
    },
    getTotalPrice(state){
      let price = 0;
      if (state.cartList.length == 0) return  price;
      for (let  i = 0 ;i < state.cartList.length ;i++){
        // @ts-ignore
        if (state.cartList[i].isChecked){
          // @ts-ignore
          price += parseFloat(state.cartList[i].price.slice(1,5)) * parseFloat(state.cartList[i].count);
        }
      }
      return price
    },
    getTotalIsChecked(state){
      let count = 0;
      if (state.cartList.length == 0) return  count;
      for (let  i = 0 ;i < state.cartList.length ;i++){
        // @ts-ignore
        if (state.cartList[i].isChecked){
          count++;
        }
      }
      return count;
    }
},
mutations: {
  //这里是set方法，比如对该数据的修改、增加、删除等等。
  //组件调用this.$store.commit('SET_TOKEN','new token')挂载方法
  //mutation里面放单一的方法
  setCurrentType:(state, type) => {
    state.currentType = type
  },
    addCounter(state, payload) {
    payload.count++;
  },
  addCart(state, payload) {
    // @ts-ignore
    state.cartList.push(payload)
  },
  changeIsChecked(state,index){
    // @ts-ignore
    state.cartList[index].isChecked = !state.cartList[index].isChecked
  },
  changeAllCheckedToTrue(state){
    for (let item of state.cartList){
      // @ts-ignore
      item.isChecked = true;
    }
  },
  changeAllCheckedToFalse(state){
    for (let item of state.cartList){
      // @ts-ignore
      item.isChecked = false;
    }
  },

}
,
actions: {
  //操作比较复杂，带判断的，异步操作都放在actions里面
  //调用通过 this.$store.dispatch('addCart',product)实现
  addCart({state, commit}, payload) {
    // @ts-ignore
    // state.cartList.push(payload);
    let oldProduct = state.cartList.find(item => item.iid == payload.iid);
    if (oldProduct) {
      // @ts-ignore
      commit('addCounter', oldProduct)
    } else {
      payload.count = 1;
      // @ts-ignore
      // state.cartList.push(payload)
      commit('addCart', payload)
    }
  },
  changeAllIsChecked({state,commit},isAllChecked){
    if (isAllChecked){
      commit('changeAllCheckedToFalse')
    }else {
      commit('changeAllCheckedToTrue')
    }
  }
}
,
modules: {
}
})
