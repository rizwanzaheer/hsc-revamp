<template>
    <div class="main-header">
        <div class="clearfix pc">
            <div class="fl logo">
                <a style="cursor: pointer" @click="jump('/')">
                    <img src="../images/logo/logo-white.svg" alt="logo" height="26" />
                </a>
            </div>

            <div class="fl menu-con">
                <el-menu class="menu-bd" :default-active="activeIndex" mode="horizontal">
                    <!-- <el-menu-item index="/" @click="jump('/')" style="visibility:hidden;">{{ $t('common.home') }}</el-menu-item> -->
                    <el-sub-menu index="/" popper-class="el-menu-popper-reset">
                        <template #title>{{ $t('common.developer') }}</template>
                        <el-menu-item index="/-0">
                            <a
                                :href="curLang==='en'?'/HooSmartChain_EN.pdf':'/HooSmartChain.pdf'"
                                target="_blank"
                            >{{ $t('common.whitePaper') }}</a>
                        </el-menu-item>
                        <el-menu-item index="/-1">
                            <a
                                href="https://docs.hoosmartchain.com/"
                                target="_blank"
                            >{{ $t('common.docs') }}</a>
                        </el-menu-item>
                        <!-- <el-menu-item index="2-2">{{ $t('common.github') }}</el-menu-item> -->
                        <el-menu-item index="/-3">
                            <a
                                href="https://testnet.hscscan.com/"
                                target="_blank"
                            >{{ $t('common.hscte') }}</a>
                        </el-menu-item>
                        <el-menu-item index="/-4">
                            <a
                                href="https://testnet.hscscan.com/hydrant"
                                target="_blank"
                            >{{ $t('common.ffhsct') }}</a>
                        </el-menu-item>
                    </el-sub-menu>

                    <el-sub-menu index="2" popper-class="el-menu-popper-reset">
                        <template #title>{{ $t('common.usehsc') }}</template>
                        <el-menu-item index="2-1">
                            <a
                                :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/wallet' : 'https://docs.hoosmartchain.com/#/wallet'"
                                target="_blank"
                            >{{ $t('common.wallet') }}</a>
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <a
                                :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/buy_hoo' : 'https://docs.hoosmartchain.com/#/buy_hoo'"
                                target="_blank"
                            >{{ $t('common.buygasfee') }}</a>
                        </el-menu-item>
                        <!-- <el-menu-item index="2-3">{{ $t('common.dapps') }}</el-menu-item> -->
                    </el-sub-menu>

                    <!-- <el-menu-item index="4"><a href="https://www.defibox.com/defirange/?type=all&chain=huc" target="_blank">生态应用</a></el-menu-item> -->
                    <el-sub-menu index="3" popper-class="el-menu-popper-reset">
                        <template #title>{{ $t('common.explorer') }}</template>
                        <el-menu-item index="3-1">
                            <a href="https://hooscan.com/" target="_blank">{{ $t('common.hscmen') }}</a>
                        </el-menu-item>

                        <el-menu-item index="3-1">
                            <a href="https://hscscan.com/" target="_blank">{{ $t('common.hscme') }}</a>
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <a
                                href="https://testnet.hscscan.com/"
                                target="_blank"
                            >{{ $t('common.hscte') }}</a>
                        </el-menu-item>
                    </el-sub-menu>

                    <el-sub-menu index="4" popper-class="el-menu-popper-reset">
                        <template #title>
                            <el-badge
                                style="line-height: 29px"
                                value="HOT"
                            >{{ $t('common.activity') }}</el-badge>
                        </template>
                        <el-menu-item index="4-1">
                            <a
                                target="_blank"
                                @click="jump('/activity/unicorn-program')"
                            >{{ $t('common.activity.unicorn') }}</a>
                        </el-menu-item>
                        <el-menu-item v-if="curLang==='zh_cn'" index="4-2">
                            <a target="_blank" @click="jump('/activity/duanwu')">端午“粽”动员</a>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-menu-item
                        index="5"
                        @click="jump('/memorabilia')"
                        style="visibility: hidden !important;"
                    >大事记</el-menu-item>
                </el-menu>
            </div>

            <div class="fr lang float-right">
                <el-popover
                    placement="bottom"
                    trigger="hover"
                    :show-arrow="true"
                    popper-class="lang-popup"
                >
                    <div class="lang-item-con">
                        <p class="lang-item" @click="setLang('zh_cn')">简体中文</p>
                        <!-- <p class="lang-item" @click="setLang('zh_tw')">繁體中文</p> -->
                        <p class="lang-item" @click="setLang('en')">English</p>
                        <!-- <p class="lang-item" @click="setLang('ko')">한국어</p> -->
                    </div>
                    <template #reference class="lang-con">
                        <div style="display:flex; justify-content: space-evenly;">
                            <!-- <i class="el-icon-arrow-down"></i> -->

                            <img src="../images/header/icon-world-white.svg" alt="logo" height="26" />
                            <span class="lang-text">{{ langOptions(curLang) }}</span>
                            <!-- <img src="../images/logo/logo.svg" alt="logo" height="26" /> -->
                            <el-icon>
                                <arrow-down />
                                <br />
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
                @click="testnet"
            />
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue';
import { Edit, ArrowDown } from '@element-plus/icons-vue';
import CustomButton from '../components/CustomButton.vue';

const activeIndex = ref('/');
// mobile
const isOpen = ref(false);
let curLang = ref('en');
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
onMounted(() => console.log('on mounted works'));

//     // 移动端导航展开与收起
function toggleMenu() {
    this.isOpen = !this.isOpen;
}
const testnet = () => alert('testnet');
// 语言字典
const langOptions = (lang) => {
    console.log('calling langOptions is: ', lang);
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
    curLang = 'en';
    // cookie.set('hsc_i18n', lang)
    // window.location.reload()
    console.log('this.$route is: ', this.$route);
    window.location.href = `/${lang}${this.$route.path}`;
}
//     // 路由跳转
function jump(path) {
    this.isOpen = false;
    this.$router.push({
        path,
    });
}
</script>

<style lang="scss">
@import '../sass/common/_var.scss';
.main-header {
    height: 60px;
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.03);
    .pc {
        max-width: 100%;
        margin: 0 auto;
        .logo {
            margin-top: 15px;
            height: 26px;
            width: 220px;
        }
        .menu-con {
            margin-left: 60px;
            margin-top: 0px;
            .el-menu {
                .el-sub-menu__hide-arrow {
                    visibility: hidden !important;
                }
            }
            .menu-bd {
                border-bottom: none;
                background-color: transparent;
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
                        color: $color-white;
                        &:hover,
                        &.is-opened {
                            color: $color-primary !important;
                        }
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
            color: $color-secondary !important;
            a {
                color: $color-secondary;
                display: block;
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
            }
            .m-menu-con {
                background: $color-white;
                height: calc(100vh - 40px);
                width: 100%;
                .m-menu-bd {
                    .el-menu-item {
                        font-size: 16px;
                        color: $color-secondary;
                        &.is-active {
                            color: $color-primary;
                        }
                        &:hover {
                            background-color: $color-white;
                        }
                    }
                    .el-sub-menu {
                        .el-submenu__title {
                            font-size: 16px;
                            color: $color-secondary;
                            // &:hover {
                            //     background-color: $color-white;
                            // }
                            &:hover {
                                color: $color-primary !important;
                            }
                        }
                        .el-menu-item {
                            height: 40px;
                            font-size: 14px;
                            line-height: 40px;
                            color: rgba($color: $color-secondary, $alpha: 0.7);
                            padding: 0 20px !important;
                            a {
                                display: block;
                                color: rgba($color: $color-secondary, $alpha: 0.7);
                            }
                            &:hover {
                                background-color: $color-white;
                            }
                        }
                        &:hover {
                            color: $color-primary !important;
                        }
                    }
                }
            }
        }
    }
}
</style>
