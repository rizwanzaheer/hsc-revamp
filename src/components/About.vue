<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const stack = computed(() => {
    return store.state.stack
})
</script>

<template></template>
