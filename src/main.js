import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/scss/index.scss'
import LazyLoad from '@/directives/lazyLoad'

const app = createApp(App)
app.use(LazyLoad, { default: '' })

app.mount('#app')
