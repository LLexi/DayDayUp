import Vue from 'vue'
import Vuex from 'vuex'
//挂载vuex
Vue.use(Vuex)
//创建vuex对象
export default new Vuex.Store({
  state: {
    count: 1,//存放的键值对就是要管理的状态
    app:'demo'
  },
  // 同步的方式改变数据
  mutations: {
    add(state) {
      state.count++;
    }
  },
  // 异步的方式改变数据
  actions: {
    addAsync({commit}){
      setTimeout(()=>{
        commit('add');//提交一个mutation改变数据
      },3000)
    }
  },
  modules: {
  }
})
