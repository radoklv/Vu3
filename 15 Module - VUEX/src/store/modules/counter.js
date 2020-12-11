export default {
  // namespaced: true, //В този случай казваме на Vue, че този модул е сам за себе си, тоест НЕ може да се досъпват SETTERS AND GETTERS от други модули. ЗА референция виж Модул 15 - Видео 14
  state() {
    return {
      counter: 0
    };
  },

  getters: {
    getCounter(state, getters) {
      //Чрез 2рия параметър, се достъпват останалите Getter-и.
      //Още параметъри може да са rootState, rootGetters. За референция виж Мoдул 15 - Видео 13
      console.log(getters);
      return state.counter;
    }
  },

  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    }
  },

  actions: {
    increment(context, payload) {
      setTimeout(function() {
        context.commit('increment', payload);
      }, 1000);
    }
  }
};
