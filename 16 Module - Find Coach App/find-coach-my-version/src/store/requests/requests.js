export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      requests: [],
    };
  },

  getters: {
    getRequests(state, _1, _2, rootGetters) {
      const coachId = rootGetters.getUserId;

      return state.requests.filter((req) => req.coachId === coachId);
    },

    haveRequests(_, getters) {
      return getters.getRequests.length > 0;
    },

    shouldFetch(state){
      const lastTime = state.lastFetch;
      const newTime = Math.floor(Date.now() / 1000)

      if(!lastTime){
        return true
      }

      return (newTime - lastTime) > 16? true : false;
    }
  },

  mutations: {
    addRequests(state, payload) {
      state.requests.push(payload);
    },

    setRequests(state, payload){
        state.requests = payload
    },

    setLastFetchTimestamp(state){
      state.lastFetch = Math.floor(Date.now() / 1000)
    }
  },

  actions: {
    async addRequests(context, payload) {
      const coachId = payload.coachId;
      const newRequest = {
        email: payload.email.val,
        message: payload.message.val,
      };

      const response = await fetch(
        `https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`,
        {
          method: "POST",
          body: JSON.stringify(newRequest),
        }
      );

      if (!response.ok) {
        const error = new Error("Failed to Add Request To Database")
        throw error;
      }

      const responseData = await response.json();

      console.log(responseData.name);

      context.commit("addRequests", {
        ...newRequest,
        id: responseData.name,
        coachId: coachId,
      });
    },

    async fetchRequests(context) {

      if(!context.getters.shouldFetch){
        return
      }

      const userId = context.rootGetters.getUserId;

      const response = await fetch(
        `https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/requests/${userId}.json`
      );

      if(!response.ok){
       const error = new Error("Failed to fetch Requests from Database")
       throw error
      }

      const responseData = await response.json()

      const responses = []

      for(const key in responseData){
          const response = {
              id: key,
              coachId: userId,
              email: responseData[key].email,
              message: responseData[key].message
          }

          responses.push(response)
      }

      context.commit('setRequests', responses)
      context.commit('setLastFetchTimestamp')
    },

    async deleteRequest(context, requestsId){
        const requests = context.state.requests.filter(req => req.id != requestsId)
        const userId = context.rootGetters.getUserId

        await fetch(`https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/requests/${userId}/${requestsId}.json`,{
            method: 'DELETE'
        })

    
        context.commit('setRequests', requests)

    }
  },
};
