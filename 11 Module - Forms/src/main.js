import { createApp } from 'vue';

import App from './App.vue';
import BaseTerms from './components/UI/BaseTerms'

const app = createApp(App)
app.mount('#app');
app.component('BaseTerms' , BaseTerms)

