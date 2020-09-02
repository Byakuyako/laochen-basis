<template>
  <div>
    <h1>这是新闻页</h1>
    <h2>新闻页ID: {{$route.params.id}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Article',
    mounted() {
      console.log(this)
    }
  };
</script>

