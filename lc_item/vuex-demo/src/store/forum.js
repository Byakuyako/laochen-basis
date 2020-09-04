export default {
  //命名空间, 可要可不要
  namespaced: true,
  state: {
    forumName: '老陈论坛'
  },
  mutations: {
    setForumName: function (state, payload) {
      state.forumName = payload
    }
  }
}