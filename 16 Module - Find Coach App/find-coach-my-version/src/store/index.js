import { createStore } from 'vuex'
import coachesModule from './coaches/coaches'
import requetsModule from './requests/requests'

const store = createStore({
    modules:{
        coaches: coachesModule,
        requests: requetsModule
    },

    state(){
        return{
            userId: 'c2'
        }
    },

    getters:{
        getUserId(state){
            return state.userId
        }
    }
})


export default store;