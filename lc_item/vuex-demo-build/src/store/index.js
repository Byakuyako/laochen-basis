import Vue from 'vue'
import Vuex from 'vuex'
import mall from './mall'
import forum from './forum'

Vue.use(Vuex)

export default new Vuex.Store({
  //放置全局状态
  state: {
    username: '老陈',
    age: 18,
    list: []
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
    },
    getList(state, payload){
      state.list = payload
    }
  },
  //异步修改数据(ajax)
  actions: {
    //去请求提供段子的服务器接口
    getJoke(context){
      let httpUrl = 'https://api.apiopen.top/getJoke?page=1&count=10&type=text'
      fetch(httpUrl).then((res) => {
        return res.json()
      }).then((res) => {
        console.log(res)
        context.commit('getList', res.result)
      })
    }
  },
  //vuex细分的模块管理
  modules: {
    mall,
    forum
  }
})
