<template>
  <div id="home">
    <div>
      <h1>看的出来这是一个主页</h1>
      <p>向第一个组件传的信息是:{{msg}}</p>
      <p>父组件接收到第二个组件传来的信息是：{{msg2}}</p>
      <ChildOne :msg='msg'></ChildOne>
      <ChildTwo @toHome="getChild"></ChildTwo>
    </div>
    
  </div>
</template>

<script>
//引入全局组件
import ChildOne from '@/components/ChildOne'
import ChildTwo from '@/components/ChildTwo'
export default {
  name: 'Home',
  // 注册组件
  components:{
    ChildOne,// 注册组件1
    ChildTwo// 注册组件2
  },
  data(){
    return{
      msg:'来自父组件的问候',
      msg2:'',//此变量用来保存接收到的数据
    }
  },
  //此方法用来获取子组件传来的值
  methods:{
    getChild(msg){
      this.msg2=msg
    }
  }
  
}
</script>
<style scoped>
#home {
  width: 100%;
  height: 100%;
}
</style>

