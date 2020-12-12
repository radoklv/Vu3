export default {
    namespaced: true,
    state(){
        return{
            requets: []
        }
    },

    getters:{
        getRequests(state){
            return state.requets
        }
    },

    mutations:{
        addRequests(state, payload){
            state.requets.push(payload)
        }
    },

    actions:{
        addRequests(context, payload){
           const newRequest ={
                id: new Date().toDateString,
                coachId: payload.coachId,
                email: payload.email.val,
                message: payload.message.val
            }

            context.commit('addRequests', newRequest)
        }
    }

}