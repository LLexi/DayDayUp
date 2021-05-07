<template>
  <div id="about">
    name:
    <p>{{ $store.state.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods:{
    
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