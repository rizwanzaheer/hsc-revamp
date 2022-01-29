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
            background-color: transparent;
            position: fixed;
            left: 0;
            top: 0;
            height: 60px;
            width: 100%;
            z-index: 100;
        }
        > .bd {
            padding-top: 60px;
            width: 100%;
        }
    }
}
.main-con {
    background: url('../images/banner/main-banner.png'); // no-repeat left center;
    background-size: contain;
    // &:hover {
    //     background: url('../images/icon/join/twitter.svg') no-repeat left center;
    //     background-size: 25px 28px;
    //     a {
    //         color: $color-white;
    //         text-decoration: none;
    //         margin-left: 5px;
    //     }
    //     cursor: pointer;
    // }
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
