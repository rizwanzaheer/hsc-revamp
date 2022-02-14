<template>
    <div
        class="main-header"
        :style="onMenuHover ? {'background-color': 'white'} : {'background-color': 'transparent'}"
    >
        <!-- pc header section ends -->
        <div class="clearfix pc">
            <div class="fl logo">
                <a style="cursor: pointer" @click="jump('/')">
                    <img
                        v-if="onMenuHover"
                        src="../images/logo/logo.svg"
                        alt="logo"
                        style="height:28px"
                    />
                    <img
                        v-else
                        src="../images/logo/logo-white.svg"
                        alt="logo-white"
                        style="height:28px"
                    />
                </a>
            </div>

            <div
                class="fl menu-con"
                @mouseover="onMouseHoverOver"
                @mouseleave="onMouseHoverOverLeave"
            >
                <el-menu class="menu-bd" :default-active="activeIndex" mode="horizontal">
                    <!-- <el-menu-item index="/" @click="jump('/')" style="visibility:hidden;">{{ $t('common.home') }}</el-menu-item> -->
                    <el-sub-menu index="/" popper-class="el-menu-popper-reset">
                        <template
                            #title
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >{{ $t('common.developer') }}</template>
                        <el-menu-item
                            index="/-0"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <!-- :href="curLang==='en'?'https://www.hoosmartchain.com/HooSmartChain_EN.pdf':'https://www.hoosmartchain.com/HooSmartChain.pdf'" -->
                            <a
                                href="https://www.hoosmartchain.com/HooSmartChain_EN.pdf"
                                target="_blank"
                            >{{ $t('common.whitePaper') }}</a>
                        </el-menu-item>
                        <el-menu-item
                            index="/-1"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a
                                href="https://docs.hoosmartchain.com/#/en-us/intro"
                                target="_blank"
                            >{{ $t('common.docs') }}</a>
                        </el-menu-item>
                        <!-- <el-menu-item index="2-2">{{ $t('common.github') }}</el-menu-item> -->
                        <!-- <el-menu-item
                            index="/-3"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a
                                href="https://testnet.hscscan.com/"
                                target="_blank"
                            >{{ $t('common.hscte') }}</a>
                        </el-menu-item>
                        <el-menu-item
                            index="/-4"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a
                                href="https://testnet.hscscan.com/hydrant"
                                target="_blank"
                            >{{ $t('common.ffhsct') }}</a>
                        </el-menu-item>-->
                    </el-sub-menu>

                    <el-sub-menu
                        index="2"
                        popper-class="el-menu-popper-reset"
                        @mouseover="onMouseHoverOver"
                        @mouseleave="onMouseHoverOverLeave"
                    >
                        <template #title>{{ $t('common.usehsc') }}</template>
                        <el-menu-item
                            index="2-1"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a
                                :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/wallet' : 'https://docs.hoosmartchain.com/#/wallet'"
                                target="_blank"
                            >{{ $t('common.wallet') }}</a>
                        </el-menu-item>
                        <el-menu-item
                            index="2-2"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a
                                :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/buy_hoo' : 'https://docs.hoosmartchain.com/#/buy_hoo'"
                                target="_blank"
                            >{{ $t('common.buygasfee') }}</a>
                        </el-menu-item>
                        <!-- <el-menu-item index="2-3">{{ $t('common.dapps') }}</el-menu-item> -->
                    </el-sub-menu>

                    <!-- <el-menu-item index="4"><a href="https://www.defibox.com/defirange/?type=all&chain=huc" target="_blank">生态应用</a></el-menu-item> -->
                    <el-sub-menu
                        index="3"
                        popper-class="el-menu-popper-reset"
                        @mouseover="onMouseHoverOver"
                        @mouseleave="onMouseHoverOverLeave"
                    >
                        <template #title>{{ $t('common.explorer') }}</template>
                        <el-menu-item
                            index="3-1"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a href="https://hooscan.com/" target="_blank">{{ $t('common.hscmen') }}</a>
                        </el-menu-item>

                        <el-menu-item
                            index="3-1"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a href="https://hscscan.com/" target="_blank">{{ $t('common.hscme') }}</a>
                        </el-menu-item>
                        <el-menu-item
                            index="3-2"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a
                                href="https://testnet.hscscan.com/"
                                target="_blank"
                            >{{ $t('common.hscte') }}</a>
                        </el-menu-item>
                    </el-sub-menu>

                    <el-sub-menu
                        index="4"
                        popper-class="el-menu-popper-reset"
                        @mouseover="onMouseHoverOver"
                        @mouseleave="onMouseHoverOverLeave"
                    >
                        <template #title>
                            <!-- <el-badge
                                style="line-height: 29px"
                                value="HOT"
                                @mouseover="onMouseHoverOver"
                                @mouseleave="onMouseHoverOverLeave"
                            >
                            </el-badge>-->
                            {{ $t('common.activity') }}
                        </template>
                        <el-menu-item
                            index="4-1"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a
                                target="_blank"
                                @click="jump('/activity/unicorn-program')"
                            >{{ $t('common.activity.unicorn') }}</a>
                        </el-menu-item>
                        <el-menu-item
                            v-if="curLang==='zh_cn'"
                            index="4-2"
                            @mouseover="onMouseHoverOver"
                            @mouseleave="onMouseHoverOverLeave"
                        >
                            <a target="_blank" @click="jump('/activity/duanwu')">端午“粽”动员</a>
                        </el-menu-item>
                    </el-sub-menu>
                    <!-- <el-menu-item
                        index="5"
                        @click="jump('/memorabilia')"
                        style="display: none !important;"
                        @mouseover="onMouseHoverOver"
                        @mouseleave="onMouseHoverOverLeave"
                    >大事记</el-menu-item>-->
                </el-menu>
            </div>

            <div
                class="fr lang float-right"
                @mouseover="onMouseHoverOver"
                @mouseleave="onMouseHoverOverLeave"
                :style="onMenuHover ? {'color': 'black'} : {'color': 'white'}"
            >
                <el-popover
                    placement="bottom"
                    trigger="hover"
                    :show-arrow="true"
                    popper-class="lang-popup"
                >
                    <div
                        class="lang-item-con"
                        @mouseover="onMouseHoverOver"
                        @mouseleave="onMouseHoverOverLeave"
                    >
                        <p class="lang-item" @click="setLang('zh_cn')">简体中文</p>
                        <!-- <p class="lang-item" @click="setLang('zh_tw')">繁體中文</p> -->
                        <p class="lang-item" @click="setLang('en')">English</p>
                        <!-- <p class="lang-item" @click="setLang('ko')">한국어</p> -->
                    </div>
                    <template #reference class="lang-con">
                        <div style="display:flex; justify-content: space-evenly;">
                            <!-- <i class="el-icon-arrow-down"></i> -->

                            <img
                                v-if="onMenuHover"
                                src="../images/header/icon-world.svg"
                                alt="logo"
                                height="26"
                            />
                            <img
                                v-else
                                src="../images/header/icon-world-white.svg"
                                alt="logo"
                                height="26"
                            />
                            <span class="lang-text !hover:bg-red-900">{{ langOptions(curLang) }}</span>
                            <!-- <img src="../images/logo/logo.svg" alt="logo" height="26" /> -->
                            <el-icon>
                                <arrow-down />
                            </el-icon>
                        </div>
                        <!-- <i class="el-icon el-sub-menu__icon-arrow"></i> -->
                    </template>
                </el-popover>
            </div>
            <!-- <el-button
                class="el-primary-button bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 float-right mr-[30px]"
                type="primary"
            >Register</el-button>-->
            <CustomButton
                class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 mr-[30px] float-right"
                title="Register"
                native-type="button"
                @click="register"
            />
        </div>

        <!-- pc header section ends  -->
        <!-- Mobile header section starts -->
        <div class="mobile">
            <div class="clearfix" :style="isOpen ? `background-color: #12171B` : 'transparent'">
                <div class="fl logo">
                    <a href="/">
                        <img src="../images/logo/logo-white.svg" alt="logo" height="15" />
                    </a>
                </div>
                <div class="fr menu-btn" @click="toggleMenu()">
                    <i v-if="!isOpen" class="iconfont hsc-daohang"></i>
                    <i v-else class="iconfont hsc-guanbi"></i>
                </div>
            </div>
            <div v-if="isOpen" class="m-menu-con">
                <el-menu
                    class="m-menu-bd"
                    :default-active="activeIndex"
                    unique-opened
                    mode="vertical"
                >
                    <el-menu-item index="/" @click="jump('/')">{{ $t('common.home') }}</el-menu-item>
                    <el-sub-menu index="2" popper-class="el-menu-popper-reset">
                        <template #title>{{ $t('common.developer') }}</template>
                        <el-menu-item index="2-0">
                            <!-- :href="curLang==='en'?'/HooSmartChain_EN.pdf':'/HooSmartChain.pdf'" -->
                            <!-- <el-icon>
                                <wallet />
                            </el-icon>-->

                            <a
                                :href="curLang==='en'?'https://www.hoosmartchain.com/HooSmartChain_EN.pdf':'https://www.hoosmartchain.com/HooSmartChain.pdf'"
                                target="_blank"
                            >{{ $t('common.whitePaper') }}</a>
                        </el-menu-item>
                        <el-menu-item index="2-1">
                            <a
                                href="https://docs.hoosmartchain.com/"
                                target="_blank"
                            >{{ $t('common.docs') }}</a>
                        </el-menu-item>
                        <!-- <el-menu-item index="2-2">{{ $t('common.github') }}</el-menu-item>
                        <el-menu-item index="2-3">
                            <a
                                href="https://testnet.hscscan.com/"
                                target="_blank"
                            >{{ $t('common.hscte') }}</a>
                        </el-menu-item>
                        <el-menu-item index="2-4">
                            <a
                                href="https://testnet.hscscan.com/hydrant"
                                target="_blank"
                            >{{ $t('common.ffhsct') }}</a>
                        </el-menu-item>-->
                    </el-sub-menu>
                    <el-sub-menu index="3" popper-class="el-menu-popper-reset">
                        <template #title>{{ $t('common.usehsc') }}</template>
                        <el-menu-item index="3-1">
                            <!-- <el-icon>
                                <wallet />
                            </el-icon>-->
                            <a
                                href="https://docs.hoosmartchain.com/#/wallet"
                                target="_blank"
                            >{{ $t('common.wallet') }}</a>
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <a
                                href="https://docs.hoosmartchain.com/#/buy_hoo"
                                target="_blank"
                            >{{ $t('common.buygasfee') }}</a>
                        </el-menu-item>
                        <el-menu-item index="3-3">
                            <!-- <el-icon>
                                <Menu />
                            </el-icon>-->
                            <a href="#" target="_blank">{{ $t('common.dapps') }}</a>
                        </el-menu-item>
                    </el-sub-menu>
                    <!-- <el-menu-item index="4"><a href="https://www.defibox.com/defirange/?type=all&chain=huc" target="_blank">生态应用</a></el-menu-item> -->
                    <el-sub-menu index="5" popper-class="el-menu-popper-reset">
                        <template #title>{{ $t('common.explorer') }}</template>
                        <el-menu-item index="5-1">
                            <a href="https://hooscan.com/" target="_blank">{{ $t('common.hscmen') }}</a>
                        </el-menu-item>
                        <el-menu-item index="5-1">
                            <a href="https://hscscan.com/" target="_blank">{{ $t('common.hscme') }}</a>
                        </el-menu-item>
                        <el-menu-item index="5-2">
                            <a
                                href="https://testnet.hscscan.com/"
                                target="_blank"
                            >{{ $t('common.hscte') }}</a>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="6" popper-class="el-menu-popper-reset">
                        <template #title>{{ $t('common.activity') }}</template>
                        <el-menu-item index="6-1">
                            <a
                                target="_blank"
                                @click="jump('/activity/unicorn-program')"
                            >{{ $t('common.activity.unicorn') }}</a>
                        </el-menu-item>
                        <el-menu-item v-if="curLang==='zh_cn'" index="6-2">
                            <a target="_blank" @click="jump('/activity/duanwu')">端午“粽”动员</a>
                        </el-menu-item>
                    </el-sub-menu>
                    <!-- <el-menu-item index="/memorabilia" @click="jump('/memorabilia')">大事记</el-menu-item> -->
                    <!-- <el-menu-item index="/activity" @click="jump('/activity')">活动</el-menu-item> -->
                    <el-sub-menu index="8">
                        <template #title>{{ $t('common.lang') }}</template>
                        <el-menu-item index="8-1" @click="setLang('zh_cn')">简体中文</el-menu-item>
                        <!-- <el-menu-item index="8-2" @click="setLang('zh_tw')">繁體中文</el-menu-item> -->
                        <el-menu-item index="8-3" @click="setLang('en')">English</el-menu-item>
                        <!-- <el-menu-item index="8-4" @click="setLang('ko')">한국어</el-menu-item> -->
                    </el-sub-menu>
                </el-menu>
            </div>
        </div>
        <!-- Mobile header section ends -->
    </div>
</template>
<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue';
import { Edit, ArrowDown, Wallet, Menu } from '@element-plus/icons-vue';
import CustomButton from '../components/CustomButton.vue';
import router from '../router';

const activeIndex = ref('/');
// mobile
let isOpen = ref(false);
let curLang = ref('en');
let onMenuHover = ref(false);
watchEffect(() => {
    // $route: {
    //     immutable: true,
    //     handler(v) {
    //         this.activeIndex = v.path;
    //     };
    // };
});
// watch: {
//     $route: {
//         immutable: true,
//         handler(v) {
//             this.activeIndex = v.path;
//         },
//     },
// };
// onMounted(() => console.log('on mounted works'));

//     // 移动端导航展开与收起
function toggleMenu() {
    isOpen.value = !isOpen.value;
}
const register = () => window.open('http://hk.mikecrm.com/NtPoo5v', '_blank', '');
// 语言字典
const langOptions = (lang) => {
    const langs = {
        zh_cn: '简体中文',
        zh_tw: '繁體中文',
        en: 'English',
        ko: '한국어',
    };

    return langs[lang];
};
//     // 设置语言
function setLang(lang) {
    curLang.value = 'en';
    // cookie.set('hsc_i18n', lang)
    // window.location.reload()
    console.log('router is: ', router);
    window.location.href = `/${lang}${router.path}`;
}
//     // 路由跳转
function jump(path) {
    isOpen.value = false;
    router.push({
        path,
    });
}
function onMouseHoverOver() {
    onMenuHover.value = true;
    // console.log('@mouseover calling!!!, ', onMenuHover.value);
}
function onMouseHoverOverLeave() {
    onMenuHover.value = false;
    // console.log('@mouseover onMouseHoverOverLeave calling!!!', onMenuHover.value);
}
</script>

<style lang="scss">
@import '../sass/common/_var.scss';
.main-header {
    height: 60px;
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.03);
    padding-left: 3.2%;
    padding-right: 40px;
    .pc {
        max-width: 100%;
        margin: 0 auto;
        // display: flex;
        // justify-content: space-between;
        .logo {
            margin-top: 15px;
            height: 26px;
            width: 220px;
        }
        .menu-con {
            // margin-left: 15%;
            min-width: 50%;
            margin-top: 0px;
            .el-menu {
                .el-sub-menu__hide-arrow {
                    visibility: hidden !important;
                }
                &:hover {
                    background-color: $color-white;
                }
            }
            .menu-bd {
                border-bottom: none;
                background-color: transparent;
                justify-content: flex-end;
                .el-menu-item {
                    padding: 0 16px;
                    font-size: 16px;
                    height: 40px;
                    line-height: 40px;
                    border-bottom: none;
                    color: $color-secondary;
                    a {
                        vertical-align: inherit;
                        &:focus {
                            text-decoration: none;
                        }
                    }
                    &.is-active {
                        color: $color-primary;
                        border-bottom: none;
                    }
                }
                .el-sub-menu {
                    .el-submenu__title {
                        padding: 0 16px;
                        font-size: 16px;
                        height: 40px;
                        line-height: 40px;
                        border-bottom: none;
                        color: $color-secondary;
                        &:hover {
                            color: $color-primary !important;
                        }
                    }
                    &.is-opened {
                        .el-submenu__title {
                            color: $color-primary;
                            &:hover {
                                color: $color-primary !important;
                            }
                        }
                    }
                    .el-sub-menu__title {
                        color: #bbbbbb;
                        &:hover,
                        &.is-opened {
                            color: $color-primary !important;
                        }
                    }
                }
            }
            &:hover {
                .el-menu {
                    .el-sub-menu__title {
                        color: $color-bg;
                        font-size: 15px;
                        font-weight: 600;
                    }
                    .el-menu-item {
                        &:hover {
                            .main-header {
                                background-color: $color-white;
                            }
                            .el-menu-item {
                                .el-sub-menu__title {
                                    color: $color-bg;
                                    font-size: 15px;
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                    &:hover {
                        .main-header {
                            background-color: $color-white;
                        }
                        .el-sub-menu__title {
                            color: $color-bg;
                            font-size: 15px;
                            font-weight: 600;
                        }
                    }
                }
                .lang-con {
                    .lang-text {
                        font-size: 14px;
                        color: $color-bg;
                        margin-right: 3px;
                    }
                }
            }
            .el-menu,
            .el-sub-menu {
                .el-sub-menu__title {
                    color: $color-bg;
                    font-size: 15px;
                    font-weight: 600;
                }
                .el-menu-item {
                    &:hover {
                        .main-header {
                            background-color: $color-white;
                        }
                        .el-menu-item {
                            .el-sub-menu__title {
                                color: $color-bg;
                                font-size: 15px;
                                font-weight: 600;
                            }
                        }
                    }
                }
                &:hover {
                    .main-header {
                        background-color: $color-white;
                    }
                    .el-sub-menu__title {
                        color: $color-bg;
                        font-size: 15px;
                        font-weight: 600;
                    }
                }
            }
        }
        .lang {
            margin-top: 15px;
            width: 90px;
            color: $color-white;
            cursor: pointer;
            img {
                color: $color-white;
            }
            .lang-con {
                .lang-text {
                    font-size: 14px;
                    color: rgba($color: $color-secondary, $alpha: 0.7);
                    margin-right: 3px;
                }
            }
            .el-tooltip__trigger {
                .el-icon {
                    padding-top: 4px;
                }
            }
            &:hover {
                .el-tooltip__trigger {
                    color: $color-bg;
                }
            }
        }
        .el-badge__content {
            border: none;
            border-radius: 3px;
            font-size: 8px;
            font-weight: 600;
            // line-height: 10px;
            font-style: normal;
        }
    }
    .mobile {
        display: none;
    }
}

.el-menu-popper-reset {
    .el-menu--popup {
        min-width: 140px;
        background: $color-white;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        padding: 10px;
        // margin-top: 20px;
        // margin-left: 15px;
        border-radius: 5px;
        .el-menu-item {
            color: $color-secondary;
            a {
                color: $color-secondary;
                display: block;
                width: 100%;
                &:hover {
                    color: $color-primary;
                }
            }
            &:hover {
                color: $color-primary !important;
                background-color: #f9f9f9;
            }
        }
    }
}

.lang-popup {
    &.el-popover {
        padding: 10px 0;
        min-width: 100px;
        .lang-item-con {
            p {
                margin: 0;
                padding: 0;
                cursor: pointer;
            }
            .lang-item {
                padding: 0 12px;
                height: 36px;
                line-height: 36px;
                font-size: 13px;
                color: $color-secondary;
                &:hover {
                    color: $color-primary;
                    background-color: #f9f9f9;
                }
            }
        }
    }
}
.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
    border-bottom: none;
}
</style>

<style lang="scss">
@import '../sass/common/_var.scss';
@media (max-width: 1000px) {
    .main-header {
        .pc {
            display: none;
        }
        height: 50px;
        padding: 0;
        .mobile {
            display: block;
            .logo {
                padding-top: 15px;
                margin-left: 20px;
                height: 50px;
            }
            .menu-btn {
                margin-top: 11px;
                margin-right: 20px;
                i {
                    font-size: 20px;
                }
                .iconfont.hsc-daohang,
                .iconfont.hsc-guanbi {
                    color: $color-white;
                }
            }
            .m-menu-con {
                // background: $color-white;
                // background: transparent; // or
                background-color: #12171b; //
                height: calc(100vh - 40px);
                width: 100%;
                .m-menu-bd {
                    height: inherit;
                    background-color: black;
                    background: url('../images/header/mobile-bg/glow.png') no-repeat;
                    background-size: cover;
                    border-right: none;
                    .el-menu-item {
                        font-size: 18px;
                        color: $color-white;
                        font-weight: 600;
                        line-height: 20px;
                        &.is-active {
                            color: $color-primary;
                        }
                        &:hover {
                            background-color: transparent;
                            color: $color-white; //
                        }
                    }
                    .el-sub-menu {
                        .el-menu--inline {
                            background-color: transparent;
                            color: $color-white;
                            .el-icon {
                                color: $color-primary;
                                margin-left: 5%;
                            }
                        }
                        .el-sub-menu__title {
                            font-size: 18px;
                            color: $color-white;
                            font-weight: 600;
                            line-height: 20px;
                            // &:hover {
                            //     }
                            &:hover {
                                color: $color-primary !important;
                                background-color: transparent;
                            }
                        }
                        .el-menu-item {
                            height: 40px;
                            font-size: 14px;
                            line-height: 40px;
                            // color: rgba($color: $color-secondary, $alpha: 0.7);
                            color: $color-white;
                            // margin-left: 10%;
                            padding: 0 20px !important;
                            a {
                                display: block;
                                // color: rgba($color: $color-secondary, $alpha: 0.7);
                                color: $color-white;
                                margin-left: 4%;
                            }
                            &:hover {
                                background-color: $color-primary;
                                color: $color-secondary; //
                            }
                        }
                        &:hover {
                            color: $color-primary !important;
                            // background-color: transparent !important;
                        }
                    }
                }
            }
        }
    }
}
</style>
