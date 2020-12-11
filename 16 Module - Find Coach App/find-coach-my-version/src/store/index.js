import { createStore } from 'vuex'
import coachesModule from './coaches/coaches'

const store = createStore({
    modules:{
        coaches: coachesModule
    },

    state(){
        return{
            userId: 'c4'
        }
    },

    getters:{
        getUserId(state){
            return state.userId
        }
    }
})


export default store;