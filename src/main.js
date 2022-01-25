import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from './i18n/i18n'

import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './sass/conf/home/index.scss'

const i18n = createI18n()

createApp(App).use(i18n).use(ElementPlus).use(router).use(store).mount('#app')
