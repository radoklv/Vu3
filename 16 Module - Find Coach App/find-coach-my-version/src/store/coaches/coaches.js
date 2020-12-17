export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [],
    };
  },

  getters: {
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
      const newTImestamp = Math.floor(Date.now() / 1000);

      if (!lastTimestamp) {
        return true;
      }

      return newTImestamp - lastTimestamp > 60 ? true : false;
    },
  },

  mutations: {
    addCoach(state, payload) {
      state.coaches.push(payload);
    },

    setCoaches(state, payload) {
      state.coaches = payload;
    },

    setFetchTimestamp(state, payload) {
      if(!payload){
        state.lastFetch = Math.floor(Date.now() / 1000);
      }else{
        state.lastFetch = null
      }
      
    },
  },

  actions: {
    async addCoach(context, payload) {
      const userId = context.rootGetters.getUserId;

      const newCoach = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        areas: payload.areas,
        description: payload.description,
        hourlyRate: payload.hourlyRate,
      };

      const response = await fetch(
        `https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(newCoach),
        }
      );
      console.log(response)

      if (!response.ok) {
        const error = new Error("Failed to Add Coach to Firebase!");
        throw error;
      }

      context.commit("addCoach", {
        ...newCoach,
        id: userId,
      });
    },

    async fetchCoaches(context) {
      if (!context.getters.shouldUpdate) {
        return;
      }

      const response = await fetch(
        "https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/coaches.json"
      );

      if (!response.ok) {
        const error = new Error("Failed to fetch Coaches from Firebase!");
        throw error;
      }

      const responseData = await response.json();

      const coaches = [];

      for (var key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          areas: responseData[key].areas,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
        };

        coaches.push(coach);
      }

      context.commit("setCoaches", coaches);
      context.commit("setFetchTimestamp");
    },

    setLastFetch(context) {
      context.commit("setLastFetch");
    },

    resetTimestamp(context){
      context.commit('setFetchTimestamp', true)
    }
  },
};
