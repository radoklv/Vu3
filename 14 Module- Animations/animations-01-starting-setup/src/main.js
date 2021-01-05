import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import CourseGoals from './pages/CourseGoals.vue'
import AllUsers from './pages/AllUsers.vue'
import BaseModal from './components/BaseModal.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: AllUsers},
        {path:'/goals', component: CourseGoals}, 
        {path:'/:notFound(.*)', redirect: '/' }
    ]
})

const app = createApp(App);
app.use(router);
app.component('base-modal', BaseModal);

router.isReady().then(function(){ //Това се прави с цел да се избегне първоначалната анимация на раутовете.
    app.mount('#app');
})

