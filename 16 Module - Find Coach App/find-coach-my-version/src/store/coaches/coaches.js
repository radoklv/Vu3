export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Radoslav",
          lastName: "Kolev",
          areas: ["frontend"],
          description:
            "Hi! My Name is Radoslav and i'm good at frontend. I Know HTML, CSS, JS, VueJS",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Stoqn",
          lastName: "Popov",
          areas: ["backend", "career"],
          description:
            "I'm Stoqn and I've worked as a freelance web developer for years. Let me help you to became Backend Dev!",
          hourlyRate: 15,
        },
        {
          id: "c3",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
      ],
    };
  },

  getters: {
    getCoaches(state) {
      return state.coaches;
    },

    hasCoaches(state) {
      return state.coaches.length > 0;
    },

    isCoach(state, getters, rootState, rootGetters) {
      const coaches = getters.getCoaches;
      const userId = rootGetters.getUserId;

      return coaches.some(el => el.id === userId)
    },
  },

  mutations: {
    addCoach(state, payload) {
      state.coaches.push(payload);
    },
  },

  actions: {
    addCoach(context, payload) {
      const newCoach = {
        id: "c4",
        firstName: payload.firstName,
        lastName: payload.lastName,
        areas: payload.areas,
        description: payload.description,
        hourlyRate: payload.hourlyRate,
      };

      context.commit("addCoach", newCoach);
    },
  },
};
