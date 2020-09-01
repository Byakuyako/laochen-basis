<template>
  <div id="app">
    <h1>{{msg}} 欢迎你</h1>
    <children @changeParent="editUsername"></children>
  </div>
</template>

<script>
import Children from './components/Children'
export default {
  name: 'App',
  data: function () {
    return {
      msg: "Jesse"
    }
  },
  methods: {
    editUsername: function (e) {
      this.msg = e
    }
  },
  components: {
    Children
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
