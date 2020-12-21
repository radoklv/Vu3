import getters from './getters'
import mutations from './mutatuions'
import actions from './actions'

export default{
    state(){
        return{
            userId: null,
            expiresIn: null,
            token: null
        }
    },

    getters,
    mutations,
    actions,
}