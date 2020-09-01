<template>
  <div id="app">
    <h1>{{msg}} 欢迎你</h1>
    <hello-world user="老陈" :brief="brief"></hello-world>
    <hello-world user="小陈" :brief="brief"></hello-world>
    <hello-world user="胖子" :brief="brief"></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: function () {
    return {
      msg: "laochen",
      brief: {
        title: '老陈很强',
        desc: '臭不要脸'
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
