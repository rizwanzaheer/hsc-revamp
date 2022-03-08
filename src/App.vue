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
import mainLayout from './layouts/main.vue';
import mainHeader from './layouts/header.vue';
import mainFooter from './layouts/footer.vue';

// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
let tag = document.createElement("div");
tag.classList.add("promo-code");
let text = document.createTextNode("BUILDMYPLANET");
tag.appendChild(text);
let element = document.getElementsByTagName("body")[0];
tag.classList.add("promo-code");
element.prepend(tag);

let tag2 = document.createElement("div");
tag2.classList.add("promo-code");
let text2 = document.createTextNode("FLYMETOTHEMOON");
tag2.appendChild(text2);
let element2 = document.getElementById("app");
element2.appendChild(tag2);
</script>

<style lang="scss">
.promo-code{
    position: absolute;
    display: none;
}
</style>
