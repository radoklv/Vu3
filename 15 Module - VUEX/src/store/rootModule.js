import { createStore } from 'vuex';
import counterModule from './modules/counter.js'
import authModule from './modules/auth.js'


const store = createStore({
    modules:{ //Тук се инпортват останали инстанции на Store. В случая този тук е ROOT-a
        numbers: counterModule,
        auth: authModule
    },
})

export default store