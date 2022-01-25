import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/home/index.vue'
import About from '/src/components/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
