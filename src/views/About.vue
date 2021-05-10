<template>
  <div id="about">
    vuex里传来的同步数据：
    <p>{{ $store.state.count }}</p>
    <button @click="addHandle">点击同步加载</button>
<hr>
     vuex里传来的异步数据：
    <p>{{ $store.state.count }}</p>
    <button @click="addAsyncHandle">点击异步加载</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods:{
    addHandle(){
      //触发一个mutation改变数据
      this.$store.commit('add')
    },
    addAsyncHandle(){
      this.$store.dispatch('addAsync')
    },
  }
}
</script>

<style scoped>
#about {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>