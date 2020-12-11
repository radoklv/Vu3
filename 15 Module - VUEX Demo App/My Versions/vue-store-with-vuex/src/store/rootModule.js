import { createStore } from 'vuex';
import products from './products.js'
import cart from './cart.js'

const store = createStore({
    modules:{ 
        products,
        cart
    },
})

export default store