<template>
  <div>
    <h1 @click="setMallName('小陈商城')">{{mall.mallName}}</h1>
    <h1 @click="setForumName('老刘论坛')">{{forumName}}</h1>

    <h1>姓名: {{username}}</h1>
    <h2>年龄: {{age}}</h2>
    <h2>虚岁: {{nominalAge}}</h2>
    <button @click="addAge(20)">年龄加20</button>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <h3>{{item.name}}</h3>
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  //导入辅助函数
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

  export default {
    name: 'Laochen',
    mounted() {
      console.log(this)
      //dispatch() 用来触发 vuex 的 actions
      this.getJoke()
    },
    methods: {
      // ageAdd: function () {
      //   // this.$store.state.age ++
      //   //commit() 用来触发 vuex 的 mutations, 第二个参数是传给触发函数的
      //   this.$store.commit('addAge', 10)
      // }
      ...mapActions(['getJoke']),
      ...mapMutations(['addAge', 'getList', 'setMallName']),
      ...mapMutations('forum', ['setForumName'])
    },
    computed: {
      ...mapState(['username', 'age', 'list', 'mall']),
      ...mapGetters(['nominalAge']),
      ...mapState('forum', ['forumName'])
    }
  };
</script>

<style lang="scss" scoped>

</style>