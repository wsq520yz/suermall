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
    }
},
mutations: {
  //这里是set方法，比如对该数据的修改、增加、删除等等。
  //组件调用this.$store.commit('SET_TOKEN','new token')挂载方法
  //mutation里面放单一的方法
  setCurrentType:(state, type) => {
    state.currentType = type
  },
    addCounter(state, payload)
  {
    payload.count++;
  }
,
  addCart(state, payload)
  {
    // @ts-ignore
    state.cartList.push(payload)
  }
}
,
actions: {
  //操作比较复杂，带判断的，异步操作都放在actions里面
  //调用通过 this.$store.dispatch('addCart',product)实现
  addCart({state, commit}, payload)
  {
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
  }
}
,
modules: {
}
})
