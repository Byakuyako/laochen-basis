export default {
  //命名空间, 可要可不要
  // namespaced: true,
  state: {
    mallname: '老陈商城'
  },
  mutations: {
    setMallname: function (state, payload) {
      state.mallname = payload
    }
  }
}