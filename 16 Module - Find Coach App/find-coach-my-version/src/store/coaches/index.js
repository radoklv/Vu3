import getters from './getters'
import mutations from './mutation'
import actions from './actions'

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [],
    };
  },

  getters,
  mutations,
  actions,
  
};
