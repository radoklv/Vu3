import { createApp } from 'vue'
import router from './router.js'
import store from './store/index.js'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard'
import BaseButton from './components/ui/BaseButton'
import BaseBadge from './components/ui/BaseBadge'
import BaseSpinner from './components/ui/BaseSpinner'
import BaseDialog from './components/ui/BaseDialog'

const app = createApp(App)

app.use(router)
app.use(store)
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseBadge', BaseBadge)
app.component('BaseSpinner', BaseSpinner)
app.component('BaseDialog', BaseDialog)
app.mount('#app')

