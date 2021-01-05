export default {
  getRequests(state, _1, _2, rootGetters) {
    const coachId = rootGetters.getUserId;

    return state.requests.filter((req) => req.coachId === coachId);
  },

  haveRequests(_, getters) {
    return getters.getRequests.length > 0;
  },

  shouldFetch(state) {
    const lastTime = state.lastFetch;

    if (!lastTime) {
      return true;
    }

    const newTime = Math.floor(Date.now() / 1000);

    return newTime - lastTime > 15 ? true : false;
  },
};
