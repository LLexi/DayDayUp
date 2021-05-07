import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.bus=new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,//将创建的vuex实例挂载到这个vue实例中
  render: h => h(App)
}).$mount('#app')
