<template>
  <div>
    <h1>姓名: {{username}}</h1>
    <h2>年龄: {{age}}</h2>
    <h2>虚岁: {{$store.getters.nominalAge}}</h2>
    <button @click="ageAdd">年龄加10</button>
    <ul>
      <li v-for="(item, i) in $store.state.list" :key="i">
        <h3>{{item.name}}</h3>
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {mapState} from 'vuex';

  export default {
    name: 'Laochen',
    mounted() {
      console.log(this)
      //dispatch() 用来触发 vuex 的 actions
      this.$store.dispatch('getJoke')
    },
    methods: {
      ageAdd: function () {
        // this.$store.state.age ++
        //commit() 用来触发 vuex 的 mutations
        this.$store.commit('addAge', 10)
      }
    },
    computed: {
      ...mapState(['username', 'age', 'list'])
    }
  };
</script>

<style lang="scss" scoped>

</style>