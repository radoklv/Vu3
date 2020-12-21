export default {
  async login(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDAv2G3XjefU0xMEVyycumqurem-zKlgg",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = responseData.message || "Failed to Login";
      throw error;
    }

    const payloadData = {
      userId: responseData.localId,
      token: responseData.idToken,
      expiresIn: responseData.expiresIn,
    };
    
    context.commit("setUser", payloadData);
  },

  async signup(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDAv2G3XjefU0xMEVyycumqurem-zKlgg",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    if (response.status == 400) {
      const error = new Error("This email is used!");
      throw error;
    }

    const responseData = await response.json();

    if (!response.ok) {
      const error = responseData.message || "Failed to Sign Up";
      throw error;
    }

    const payloadData = {
      userId: responseData.localId,
      token: responseData.idToken,
      expiresIn: responseData.expiresIn,
    };

    context.commit("setUser", payloadData);
  },

  logout(context){
    context.commit('setUser',{
      userId: null,
      token: null,
      expiresIn: null
    })
  }
};
