export default {
  async addCoach(context, payload) {
    const userId = context.rootGetters.getUserId;

    const newCoach = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      areas: payload.areas,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
    };

    const token = context.rootGetters.getToken;

    const response = await fetch(
      `https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(newCoach),
      }
    );

    const responseData = response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to Add Coach to Firebase!"
      );
      throw error;
    }

    context.commit("addCoach", {
      ...newCoach,
      id: userId,
    });
  },

  async fetchCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      "https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/coaches.json"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch Coaches from Firebase!"
      );
      throw error;
    }

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
};
