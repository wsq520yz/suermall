import { createStore } from 'vuex'

export default createStore({
  state: {
    currentType:'pop'
  },
  getters: {
    getCurrentType:state => {
      return state.currentType
    }
  },
  mutations: {
    //这里是set方法，比如对该数据的修改、增加、删除等等。
    //组件调用this.$store.commit('SET_TOKEN','new token')挂载方法
    setCurrentType:(state,type) => {
      state.currentType = type
    }
  },
  actions: {
  },
  modules: {
  }
})
