export default {
  async addRequest(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://find-coach-7860b.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to Send the Request"
      );
      throw error;
    }

    context.commit("addRequest", newRequest);
  },

  async loadRequests(context) {
    const userId = context.rootGetters.getUserId;
    const response = await fetch(
      `https://find-coach-7860b.firebaseio.com/requests/${userId}.jsson`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fetch');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const newRequest = {
        id: key,
        coachId: userId,
        email: responseData[key].email,
        message: responseData[key].message,
      };
      requests.push(newRequest);
    }

    context.commit("setRequests", requests);
  },
};
