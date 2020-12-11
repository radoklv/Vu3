//Този файл е еквиваленте на нещата в STORE папката, но тук е напъпкано всичко в едно, не е разпределен по папки. В случая не се изполва той а нещата в STORE папката!

import { createStore } from 'vuex';

const counterModule = {
    // namespaced: true, //В този случай казваме на Vue, че този модул е сам за себе си, тоест НЕ може да се досъпват SETTERS AND GETTERS от други модули. ЗА референция виж Модул 15 - Видео 14
   
     state(){
       return{
         counter: 0,
       }
     },
   
     getters: {
       getCounter(state, getters) {
         //Чрез 2рия параметър, се достъпват останалите Getter-и. 
         //Още параметъри може да са rootState, rootGetters. За референция виж Мoдул 15 - Видео 13
         console.log(getters);
         return state.counter;
       }
     },
   
     mutations:{
       increment(state, payload) {
         state.counter = state.counter + payload;
       }
     },
   
     actions:{
       increment(context, payload) {
         setTimeout(function() {
           context.commit('increment', payload);
         }, 1000);
       }
     }
   
   }
   
   const store = createStore({
     modules:{ //Тук се инпортват останали инстанции на Store. В случая този тук е ROOT-a
       numbers: counterModule
     },
     state() { //State e локален за инстанцията. Той не може да се достъпва директно от други инстанции, за разлика от Getters, Mutations, Actions. За референция виж Модул 15 - Видео 13
       return {
         isUserAuth: false
       };
     },
   
     getters: {
       getAuthState(state){
           return state.isUserAuth
       }
     },
   
     mutations: {
   
   
       changeAuthState(state){
           state.isUserAuth = !state.isUserAuth
       }
     },
   
     actions: {
       changeAuthState({commit}){
           commit('changeAuthState')
       }
     }
   });

export default store