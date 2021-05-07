import Vue from 'vue'
import Vuex from 'vuex'
//挂载vuex
Vue.use(Vuex)
//创建vuex对象
export default new Vuex.Store({
  state: {
    name:'vuex真好用',//存放的键值对就是要管理的状态
  },
  mutations: {
    edit(state){
      state.name='jack,come back'
    }
  },
  actions: {
  },
  modules: {
  }
})
