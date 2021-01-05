import getters from './getters'
import mutations from './mutatuions'
import actions from './actions'

export default{
    state(){
        return{
            userId: null,
            token: null,
            didAutoLogout: false
        }
    },

    getters,
    mutations,
    actions,
}