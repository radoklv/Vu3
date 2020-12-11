import {createRouter, createWebHistory} from 'vue-router'

import ProductsList from './pages/ProductsList'
import UserCart from './pages/UserCart'

const router = createRouter({
    history:  createWebHistory(),
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/products', component: ProductsList },
        { path: '/cart', component: UserCart }
    ]
})
export default router