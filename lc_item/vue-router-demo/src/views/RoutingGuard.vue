<template>
  <div>
    <h1>路由守卫的例子</h1>
    <router-link to="/">跳转至首页</router-link>
    <br>
    <router-link to="/laochen">跳转至老陈页面</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Router守卫',
    beforeRouteEnter(to, from, next){
      console.log('进入组件路由之前(组件内定义)')
      next()
    },
    beforeRouteUpdate(to, from, next){
      //比如 article/123 变成了 article/456 时就会触发
      console.log('更新组件路由时(组件内定义)')
      next()
    },
    beforeRouteLeave(to, from, next){
      console.log('离开组件路由之前(组件内定义)')
      next()
    }
  };
</script>