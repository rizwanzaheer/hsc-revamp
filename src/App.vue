<template>
    <main-layout>
        <template #hd>
            <main-header />
        </template>
        <template #bd>
            <router-view />
        </template>
        <template #ft>
            <main-footer />
        </template>
    </main-layout>
</template>


<script setup>
// import { computed } from 'vue'
// import { useStore } from 'vuex'

import mainLayout from './layouts/main.vue'
import mainHeader from './layouts/header.vue'
import mainFooter from './layouts/footer.vue'

// const store = useStore()
// const user = ''
// const stack = computed(() => {
//     return store.state.stack
// });
</script>


<style lang="scss">
// #app {
//     @apply h-screen bg-gray-50;
// }

// nav {
//     a.active {
//         &::after {
//             @apply block w-full bg-green-500;
//             content: '';
//             height: 1.5px;
//         }
//     }
// }
</style>
