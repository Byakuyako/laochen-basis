<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <h1>{{msg.split('').reverse().join('')}}</h1>
    <h1>{{msg.split('').reverse().join('')}}</h1>
    <h1>{{reverseMsg}}</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: function () {
    return {
      msg: "hello word"
    }
  },
  computed: {
    // reverseMsg: this.msg.split('').reverse().join('')
    reverseMsg: function () {
      return this.msg.split('').reverse().join('')
    }
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
