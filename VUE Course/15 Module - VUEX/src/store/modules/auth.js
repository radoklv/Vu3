export default {
  state() {
    //State e локален за инстанцията. Той не може да се достъпва директно от други инстанции, за разлика от Getters, Mutations, Actions. За референция виж Модул 15 - Видео 13
    return {
      isUserAuth: false
    };
  },

  getters: {
    getAuthState(state) {
      return state.isUserAuth;
    }
  },

  mutations: {
    changeAuthState(state) {
      state.isUserAuth = !state.isUserAuth;
    }
  },

  actions: {
    changeAuthState({ commit }) {
      commit('changeAuthState');
    }
  }
};
