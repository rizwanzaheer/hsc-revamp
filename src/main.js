import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './sass/conf/home/index.scss'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
