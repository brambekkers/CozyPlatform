import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Components
import Button from './components/global/Button.vue'
import IconButton from './components/global/IconButton.vue'
import MainTitle from './components/global/MainTitle.vue'

const app = createApp(App)

app.use(createPinia())
app.component('MainTitle', MainTitle)
app.component('Button', Button)
app.component('IconButton', IconButton)

app.mount('#app')
