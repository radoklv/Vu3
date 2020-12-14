import { createApp } from 'vue'
import router from './router'

import BaseButton from './components/ui/BaseButton'
import BaseCard from './components/ui/BaseCard'
import BaseBadge from './components/ui/BaseBadge' 
import BaseSpinner from './components/ui/BaseSpinner'

import App from './App.vue'
import store from './store/index'


const app = createApp(App)
app.use(store)
app.use(router)

app.component('base-badge', BaseBadge)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-spinner', BaseSpinner)


app.mount('#app')
