<template>
  <div>
    <h1>姓名: {{$store.state.username}}</h1>
    <h2>年龄: {{$store.state.age}}</h2>
    <h2>虚岁: {{$store.getters.nominalAge}}</h2>
    <button @click="ageAdd">年龄加一</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Laochen',
    mounted() {
      console.log(this)
    },
    methods: {
      ageAdd: function () {
        // this.$store.state.age ++
        this.$store.commit('addAge', 10)
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>