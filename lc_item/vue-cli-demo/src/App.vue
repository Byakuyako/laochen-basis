<template>
  <div id="app">
    <label>
      用户名: <input type="text" placeholder="请输入用户名" v-model="username">
    </label>
    <h1>用户名: {{username}}</h1>

    <label>复选框<input type="checkbox" v-model="check"></label>
    <h1>check: {{check}}</h1>

    <label>
      <textarea cols="30" rows="2" v-model="article"></textarea>
    </label>
    <h1>article: {{article}}</h1>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: function () {
    return {
      msg: "hello word",
      username: '',
      check: false,
      article: ''
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
