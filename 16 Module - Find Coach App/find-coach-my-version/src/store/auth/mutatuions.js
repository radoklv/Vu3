export default {
    setUser(state, payload){
        state.userId = payload.userId;
        state.token = payload.token
    },

    setDidAutoLogout(state){
        state.didAutoLogout = true  
    }
}