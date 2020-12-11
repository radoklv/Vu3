import { parseQuery } from "vue-router"

export default {
    addRequest(state, payload){
        state.requests.push(payload)
    },

    setRequests(state, payload){
        state.requests = payload
    }
}