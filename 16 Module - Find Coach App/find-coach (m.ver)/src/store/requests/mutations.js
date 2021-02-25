export default {
  addRequests(state, payload) {
    state.requests.push(payload);
  },

  setRequests(state, payload) {
    state.requests = payload;
  },

  setFetchTimestamp(state) {
    state.lastFetch = Math.floor(Date.now() / 1000);
  },
};
