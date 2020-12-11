import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition){
      if(savedPosition){
        return savedPosition
      }else{
        return { top: 0, left: 0}
      }
    },
    routes: [
      { path: '/', redirect: '/teams' }, //Може да се редиректва и чрез alias. Чекни в google
      {
        name: 'users',
        path: '/users',
        components: { // Ако два или повече <router-view>-та са на едно ниво, те се наименоват и тук се посочва, кой компонент на кой <router-view> да се покаже. Виж App.vue
          default: UsersList,
          footer: UsersFooter
        },
        beforeEnter(to, from, next){
          console.log(to, from)
          console.log("beforeEnter method called from main.js")
          next()
        }
      },
      {
        name: 'teams',
        path: '/teams',
        components: {
          default: TeamsList,
          footer: TeamsFooter
        },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true
          } //props: true казва на компонента, че динамичната част от URLa ще се подава на компонента чрез props[teamId]
        ]
      },
      { path: '/:notFound(.*)', component: NotFound }
    ]
  });
  
  router.beforeEach((to, from, next) => {
    console.log(to, from)
    console.log('Global beforeEach()')
    next()
  }) 
  
  router.afterEach((to, from)=>{
    console.log(to, from)
    console.log("Global afterEach()")
    //Тук за пример, може да се изпраща някаква информация към сървъра
  })


  export default router;