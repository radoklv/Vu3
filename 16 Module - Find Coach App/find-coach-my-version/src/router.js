import { createRouter, createWebHistory } from 'vue-router'

import Coaches from './pages/coaches/CoachesList'
import Requests from './pages/requests/Requests'
import CoachDetails from './pages/coaches/CoachDetails'
import CoachRegistration from './pages/coaches/CoachRegistration'

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',

    routes:[
        { path: '/', redirect: '/coaches'},
        { path: '/coaches', component: Coaches },
        { path: '/coaches/:id', component: CoachDetails, props: true},
        { path: '/requests', component: Requests },
        { path: '/registration', component: CoachRegistration }
    ]
})

export default router