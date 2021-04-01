export default {
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

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to Add Request To Database");
      throw error;
    }

    context.commit("addRequests", {
      ...newRequest,
      id: responseData.name,
      coachId: coachId,
    });
  },

  async fetchRequests(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldFetch) {
      return;
    }

    const userId = context.rootGetters.getUserId;
    const token = context.rootGetters.getToken;

    const response = await fetch(
      `https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/requests/${userId}.json?auth=${token}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch Requests from Database");
      throw error;
    }

    const responses = [];

    for (const key in responseData) {
      const response = {
        id: key,
        coachId: userId,
        email: responseData[key].email,
        message: responseData[key].message,
      };

      responses.push(response);
    }

    context.commit("setRequests", responses);
    context.commit("setFetchTimestamp");
  },

  async deleteRequest(context, requestsId) {
    const requests = context.state.requests.filter(
      (req) => req.id != requestsId
    );
    const userId = context.rootGetters.getUserId;

   const response = await fetch(
      `https://find-coach-my-version-default-rtdb.europe-west1.firebasedatabase.app/requests/${userId}/${requestsId}.json`,
      {
        method: "DELETE",
      }
    );

    const responseData = response.json()


    if(!response.ok){
      const error = new Error(responseData.message || "Failed to Delete");
      throw error;
    }

    context.commit("setRequests", requests);
  },
};
