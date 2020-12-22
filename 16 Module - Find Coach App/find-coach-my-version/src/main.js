import { createApp } from 'vue'
import router from './router'

import BaseButton from './components/ui/BaseButton'
import BaseCard from './components/ui/BaseCard'
import BaseBadge from './components/ui/BaseBadge' 
import BaseSpinner from './components/ui/BaseSpinner'
import BaseDialog from './components/ui/BaseDialog'

import App from './App.vue'
import store from './store/index'


const app = createApp(App)
app.use(store)
app.use(router)

app.component('base-badge', BaseBadge)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)


router.isReady().then(function(){ //Това се прави с цел да се избегне първоначалната анимация на раутовете.
    app.mount('#app');
})
