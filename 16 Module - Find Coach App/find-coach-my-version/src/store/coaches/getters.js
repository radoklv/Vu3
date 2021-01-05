export default {
  getCoaches(state) {
    return state.coaches;
  },

  hasCoaches(state) {
    return state.coaches.length > 0;
  },

  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.getCoaches;
    const userId = rootGetters.getUserId;

    return coaches.some((el) => el.id === userId);
  },

  shouldUpdate(state) {
    const lastTimestamp = state.lastFetch;

    if (!lastTimestamp) {
      return true;
    }

    const newTimestamp = Math.floor(Date.now() / 1000);

    return newTimestamp - lastTimestamp > 60 ? true : false;
  },
};
