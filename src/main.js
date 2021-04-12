import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/scss/index.scss'
import LazyLoad from '@/directives/lazyLoad'

const app = createApp(App)
app.use(LazyLoad, { default: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg'})

app.mount('#app')
