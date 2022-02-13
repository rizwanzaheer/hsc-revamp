import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/hsc-revamp/' : '/', //for the gitpages only
    // base: '/',
    plugins: [vue()],
});
