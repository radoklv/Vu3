import { createStore } from 'vuex'
import coachesModule from './coaches/coaches'

const store = createStore({
    modules:{
        coaches: coachesModule
    },

    state(){
        return{
            userId: 'c1'
        }
    },

    getters:{
        getUserId(state){
            return state.userId
        }
    }
})


export default store;