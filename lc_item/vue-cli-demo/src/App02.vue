<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <h2 :style="styleObj">点击次数: {{num}}</h2>
    <button @click="addClick">加法</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: function () {
    return {
      msg: "hello word",
      num: 0,
      styleObj: {}
    }
  },
  methods: {
    addClick: function () {
      this.num ++
    }
  },
  watch: {
    num: function (newValue, oldValue) {
      console.log('newValue: ', newValue);
      console.log('oldValue: ', oldValue);
      if (newValue > 10){
        console.log('新值大于10了');
        //改变单个属性
        this.styleObj.backgroundColor = 'red'
        //更改样式对象
        this.styleObj = {
          backgroundColor: 'red'
        }
        //更改属性值
        this.styleObj = {
          'background-color': 'red'
        }
      }
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
