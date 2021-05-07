<template>
  <div id="two">
    <h1>这是第二个子组件</h1>
    <p>第二个组件要发送的信息是：{{msg2}}</p>
    <button @click="toHome">向父组件发送信息</button>
    <hr>
    <p>收到的兄弟组件信息：{{txt}}</p>
  </div>
</template>

<script>
export default {
  name:'Two',
  data(){
    return{
      msg2:'来自第二个组件传来的问候',
      txt:''
    }
  },
  //使用生命周期来获取 并接收兄弟组件传来的值
  beforeCreate(){
    this.bus.$on('toBro',msg3=>{
      this.txt=msg3
    })
  },
  //向父组件传值
  methods:{
    toHome(){
      this.$emit('toHome',this.msg2)
    }
  }
}
</script>

<style scoped>
#two {
  width: 500px;
  height: 300px;
  border: solid 1px skyblue;
  margin: 0 auto;
}
</style>