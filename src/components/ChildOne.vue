<template>
  <!-- 第一个子组件 -->
  <div id="one">
    <h1>这是第一个子组件</h1>
    <p>接收到的信息是：{{ msg }}</p>

    <p>请输入第一个子组件向第二个子组件传达的信息</p>
    <input type="text" v-model="msg3" />
    <button @click="toBro">发送</button>
  </div>
</template>


<script>
export default {
  name: 'One',
  // 子组件接收父组件传来的值
  props: {
    msg: {
      type: String
    }
  },
  data() {
    return {
      msg3: ''
    }
  },
  // 子组件向兄弟组件传值
  methods: {
    toBro() {
      this.bus.$emit('toBro', this.msg3)
      console.log(this.msg3)
    }
  }
}
</script>

<style scoped>
#one {
  width: 500px;
  height: 300px;
  border: solid 1px pink;
  margin: 0 auto;
}
</style>
