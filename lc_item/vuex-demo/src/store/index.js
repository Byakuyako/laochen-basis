import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //放置全局状态
  state: {
    username: '老陈',
    age: 18
  },
  //计算属性
  getters: {
    nominalAge: function (state) {
      return state.age + 1
    }
  },
  //修改数据/状态的方法
  mutations: {
    addAge(state, payload){
      console.log(state)
      state.age += payload
    }
  },
  //异步修改数据(ajax)
  actions: {
    //去请求提供段子的服务器接口
  },
  //vuex细分的模块管理
  modules: {
  }
})
