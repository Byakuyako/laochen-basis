<template>
  <div id="app">
    <layout>
      <template v-slot:left>
        <div>左边</div>
      </template>
      <template v-slot:right>
        <div>右边</div>
      </template>
    </layout>
  </div>
</template>

<script>
  import Layout from './components/Layout'
  export default {
  name: 'App',
  components: {
    Layout
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
