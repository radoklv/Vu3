import { createStore } from 'vuex'
import coachesModule from './coaches/index'
import requetsModule from './requests/index'
import authModule from './auth/index'

const store = createStore({
    modules:{
        coaches: coachesModule,
        requests: requetsModule,
        auth: authModule
    },

})


export default store;