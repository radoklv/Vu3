export default {
  async addCoach(context, payload) {
    const userId = context.rootGetters.getUserId;
    const coachData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      areas: payload.areas,
      hourlyRate: payload.rate,
    };

    const response = await fetch(
      `https://find-coach-7860b.firebaseio.com/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await reponse.json();

    if (!response.ok) {
      //error
    }


    context.commit("addCoach", {
      ...coachData,
      id: userId,
    });
  },

  async loadCoaches(context) {


    if(!context.getters.shouldUpdate){
      return
    }

    const response = await fetch(
      "https://find-coach-7860b.firebaseio.com/coaches.json"
    );

    const responseData = await response.json();

    if(!response.ok){
      const error = new Error("Failed to Fetch")
      throw error
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        areas: responseData[key].areas,
        hourlyRate: responseData[key].hourlyRate,
      };

      coaches.push(coach)
    }

    context.commit('setCoaches', coaches)
    context.commit('setFetchTimestamp')
  },
};
