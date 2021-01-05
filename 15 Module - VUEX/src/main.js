import { createApp } from 'vue';
import App from './App.vue';
// import store from './store.js'
import store from './store/rootModule.js'

const app = createApp(App);
app.use(store);
app.mount('#app');
