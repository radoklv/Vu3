export default {
    namespaced: true,
    state(){
        return{
            requests: []
        }
    },

    getters:{
        getRequests(state, _1, _2, rootGetters){
            const coachId = rootGetters.getUserId;

            return state.requests.filter(req => req.coachId === coachId)

        },

        haveRequests(_, getters){
            return getters.getRequests.length > 0
        }

    },

    mutations:{
        addRequests(state, payload){
            state.requests.push(payload)
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