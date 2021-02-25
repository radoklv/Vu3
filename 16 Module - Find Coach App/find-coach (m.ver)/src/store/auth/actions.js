let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth',payload)
  },

  async signup(context, payload){
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    })
  },

  autoLogin(context){
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId')
      const expirationDate = localStorage.getItem('tokenExpirationDate')

      const currentTime = new Date().getTime();
      const expirationTime = +expirationDate - currentTime

      if(expirationTime < 0){
        return
      }

      timer = setTimeout(function(){
        context.dispatch('autoLogout')
      },expirationTime)

      if(token && userId){
        context.commit('setUser', {
          token,
          userId
        })
      }
      
  },

  async auth(context, payload) {
    const mode = payload.mode;
    
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDAv2G3XjefU0xMEVyycumqurem-zKlgg'

    if(mode == 'signup'){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDAv2G3XjefU0xMEVyycumqurem-zKlgg'
    }

    const response = await fetch(
      url,
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
    };

    const expirationTime = responseData.expiresIn * 1000
    const expirationDate = new Date().getTime() + expirationTime

    localStorage.setItem('token', payloadData.token);
    localStorage.setItem('userId', payloadData.userId);
    localStorage.setItem('tokenExpirationDate', expirationDate)

    timer = setTimeout(function(){
      context.dispatch('autoLogout')
    },expirationTime)

    context.commit("setUser", payloadData);
  },

  logout(context) {

    clearTimeout(timer)

    localStorage.removeItem('token');
    localStorage.removeItem('userId')

    context.commit("setUser", {
      userId: null,
      token: null,
      expiresIn: null,
    });
  },

  autoLogout(context){
    context.dispatch('logout');
    context.commit('setDidAutoLogout')
  }
};
