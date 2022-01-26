<template>
    <div class="main-header">
        <div class="clearfix pc">
            <div class="fl logo">
                <a style="cursor: pointer" @click="jump('/')">
                    <img src="../images/logo/logo.svg" alt="logo" height="26" />
                </a>
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
let curLang = ref('');
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
    this.curLang = 'en';
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
