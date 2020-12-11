import { createApp } from 'vue'
import router from './router.js'

import App from './App.vue'
import BaseButton from './components/ui/BaseButton'
import BaseBadge from './components/ui/BaseBadge'

const app = createApp(App)

app.use(router)

app.component('base-button', BaseButton )
app.component('base-badge', BaseBadge)

app.mount('#app')
