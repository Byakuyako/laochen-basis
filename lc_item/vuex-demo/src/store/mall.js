export default {
  //命名空间, 可要可不要
  // namespaced: true,
  state: {
    mallName: '老陈商城'
  },
  mutations: {
    setMallName: function (state, payload) {
      state.mallName = payload
    }
  }
}