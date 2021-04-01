export default {
  getRequests(state, _, _2, rootGetters) {
    const coachId = rootGetters.getUserId;
    return state.requests.filter((req) => req.coachId === coachId);
  },

  hasRequests(_, getters) {
    if (getters.getRequests && getters.getRequests.length > 0) {
      return true;
    } else {
      return false;
    }
  },
};
