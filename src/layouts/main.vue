<template>
    <div class="main-body">
        <div class="main-con">
            <div class="hd">
                <slot name="hd"></slot>
            </div>
            <div class="bd">
                <slot name="bd"></slot>
            </div>
            <div class="ft">
                <slot name="ft"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()
</script>

<style lang="scss">
@import '../sass/common/_var.scss';
.main-body {
    width: 100%;
    height: 100%;
    position: relative;
    .main-con {
        width: 100%;
        height: 100%;
        > .hd {
            background-color: $color-white;
            position: fixed;
            left: 0;
            top: 0;
            height: 80px;
            width: 100%;
            z-index: 100;
        }
        > .bd {
            padding-top: 80px;
            width: 100%;
        }
    }
}
</style>

<style lang="scss">
@media (max-width: 1000px) {
    .main-body {
        .main-con {
            > .hd {
                height: 50px;
            }
            > .bd {
                padding-top: 50px;
            }
        }
    }
}
</style>
