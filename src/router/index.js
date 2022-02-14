import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/pages/home/index.vue';
import LandingPage from '/src/pages/landing/index.vue';

import About from '/src/components/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // {
    //     path: '/landing-page',
    //     name: 'LandingPage',
    //     component: LandingPage,
    // },
    {
        path: '/hsc-revamp/', // this url only use for github pages
        name: 'Home',
        component: Home,
    },
    {
        path: '/hsc-revamp/landing-page', // this url only use for github pages
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
