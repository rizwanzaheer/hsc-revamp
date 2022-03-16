import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
import LandingPage from '../pages/landing/index.vue';

import About from '../components/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home, // main home page
    },
    {
        path: '/landing-page',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/brand',
        name: 'Brand',
        component: () => import('../pages/brand/index.vue'),
    },
    // {
    //     path: '/hsc-revamp/', // this url only use for github pages
    //     name: 'Home',
    //     component: Home,
    // },
    // {
    //     path: '/hsc-revamp/landing-page', // this url only use for github pages
    //     name: 'LandingPage',
    //     component: LandingPage,
    // },
    // {
    //     path: '/hsc-revamp/brand',
    //     name: 'Brand',
    //     component: () => import('../pages/brand/index.vue'),
    // },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0,
        };
    },
});

export default router;
