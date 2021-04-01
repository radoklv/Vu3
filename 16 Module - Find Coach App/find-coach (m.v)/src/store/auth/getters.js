export default {
  getUserId(state) {
    return state.userId;
  },

  getToken(state){
    return state.token
  },

  getExpiresIn(state){
    return state.expiresIn
  },

  isAuthenticated(state){
    return !!state.token
  },

  getDidAutoLogout(state){
    return state.didAutoLogout
  }

};
