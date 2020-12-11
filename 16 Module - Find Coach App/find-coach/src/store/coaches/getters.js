export default {
    getCoaches(state){
        return state.coaches
    },

    hasCoaches(state){
        return state.coaches && state.coaches.length > 0
    },

    isCoach(_, getters, _2, rootGetters){
        const coaches = getters.getCoaches;
        const userId = rootGetters.getUserId
        return coaches.some(coach => coach.id === userId)
    },

    shouldUpdate(state){
       const lastTime = state.lastFetch;
       const currentTime = new Date().getTime()

       if(!lastTime){
           return true
       }
    
       return (currentTime - lastTime) / 1000 > 10; //тук се проверява дали е минала 1мин от последнип ъпдейт

    }
}