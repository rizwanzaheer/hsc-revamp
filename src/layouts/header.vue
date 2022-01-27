<template>
    <div class="main-header">
        <div class="clearfix pc">
            <div class="fl logo">
                <a style="cursor: pointer" @click="jump('/')">
                    <img src="../images/logo/logo.svg" alt="logo" height="26" />
                </a>
            </div>

            <div class="fl menu-con">
                <el-menu class="menu-bd" :default-active="activeIndex" mode="horizontal">
                    <el-menu-item index="/" @click="jump('/')">{{ $t('common.home') }}</el-menu-item>
                    <el-submenu index="2" popper-class="el-menu-popper-reset">
                        <template slot="title">{{ $t('common.developer') }}</template>
                        <el-menu-item index="2-0">
                            <a
                                :href="curLang==='en'?'/HooSmartChain_EN.pdf':'/HooSmartChain.pdf'"
                                target="_blank"
                            >{{ $t('common.whitePaper') }}</a>
                        </el-menu-item>
                        <el-menu-item index="2-1">
                            <a
                                href="https://docs.hoosmartchain.com/"
                                target="_blank"
                            >{{ $t('common.docs') }}</a>
                        </el-menu-item>
                        <el-menu-item index="2-2">{{ $t('common.github') }}</el-menu-item>
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
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="3" popper-class="el-menu-popper-reset">
                        <template slot="title">{{ $t('common.usehsc') }}</template>
                        <el-menu-item index="3-1">
                            <a
                                :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/wallet' : 'https://docs.hoosmartchain.com/#/wallet'"
                                target="_blank"
                            >{{ $t('common.wallet') }}</a>
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <a
                                :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/buy_hoo' : 'https://docs.hoosmartchain.com/#/buy_hoo'"
                                target="_blank"
                            >{{ $t('common.buygasfee') }}</a>
                        </el-menu-item>
                        <el-menu-item index="3-3">{{ $t('common.dapps') }}</el-menu-item>
                    </el-submenu>
                    <!-- <el-menu-item index="4"><a href="https://www.defibox.com/defirange/?type=all&chain=huc" target="_blank">生态应用</a></el-menu-item> -->
                    <el-submenu index="5" popper-class="el-menu-popper-reset">
                        <!-- <template slot="title">{{ $t('common.explorer') }}</template>
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
                        </el-menu-item>-->
                    </el-submenu>
                    <el-submenu index="6" popper-class="el-menu-popper-reset">
                        <!-- <template slot="title">
                            <el-badge
                                style="line-height: 29px"
                                value="HOT"
                            >{{ $t('common.activity') }}</el-badge>
                        </template>
                        <el-menu-item index="6-1">
                            <a
                                target="_blank"
                                @click="jump('/activity/unicorn-program')"
                            >{{ $t('common.activity.unicorn') }}</a>
                        </el-menu-item>
                        <el-menu-item v-if="curLang==='zh_cn'" index="6-2">
                            <a target="_blank" @click="jump('/activity/duanwu')">端午“粽”动员</a>
                        </el-menu-item>-->
                    </el-submenu>
                    <!-- <el-menu-item index="/memorabilia" @click="jump('/memorabilia')">大事记</el-menu-item> -->
                    <!-- <el-menu-item index="/activity" @click="jump('/activity')">活动</el-menu-item> -->
                </el-menu>
            </div>

            <div class="fr lang">
                <el-popover
                    placement="bottom"
                    trigger="hover"
                    :show-arrow="false"
                    popper-class="lang-popup"
                >
                    <div class="lang-item-con">
                        <p class="lang-item" @click="setLang('zh_cn')">简体中文</p>
                        <!-- <p class="lang-item" @click="setLang('zh_tw')">繁體中文</p> -->
                        <p class="lang-item" @click="setLang('en')">English</p>
                        <!-- <p class="lang-item" @click="setLang('ko')">한국어</p> -->
                    </div>
                    <span slot="reference" class="lang-con">
                        <span class="lang-text">{{ langOptions(curLang) }}</span>
                        <i class="el-icon-arrow-down"></i>
                    </span>
                </el-popover>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
const activeIndex = ref('/');
// mobile
const isOpen = ref(false);
let curLang = ref('en');
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
const setLang = (lang) => {
    curLang = 'en';
    // cookie.set('hsc_i18n', lang)
    // window.location.reload()
    window.location.href = `/${lang}${this.$route.path}`;
};
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
    height: 80px;
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.03);
    .pc {
        max-width: 1200px;
        margin: 0 auto;
        .logo {
            margin-top: 25px;
            height: 26px;
            width: 220px;
        }
        .menu-con {
            margin-left: 60px;
            margin-top: 20px;
            .menu-bd {
                border-bottom: none;
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
                .el-submenu {
                    .el-submenu__title {
                        padding: 0 16px;
                        font-size: 16px;
                        height: 40px;
                        line-height: 40px;
                        border-bottom: none;
                        color: $color-secondary;
                    }
                    &.is-opened {
                        .el-submenu__title {
                            color: $color-primary;
                        }
                    }
                }
            }
        }
        .lang {
            margin-top: 30px;
            .lang-con {
                cursor: pointer;
                .lang-text {
                    font-size: 14px;
                    color: rgba($color: $color-secondary, $alpha: 0.7);
                    margin-right: 3px;
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
        padding: 10px 0;
        margin-top: 20px;
        margin-left: 15px;
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
                    .el-submenu {
                        .el-submenu__title {
                            font-size: 16px;
                            color: $color-secondary;
                            &:hover {
                                background-color: $color-white;
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
                    }
                }
            }
        }
    }
}
</style>
