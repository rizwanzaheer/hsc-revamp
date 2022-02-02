<template>
    <div class="main-footer">
        <div class="bd pc">
            <div class="ft-con">
                <h4>{{ $t('common.developer') }}</h4>
                <p>
                    <a
                        :href="curLang==='en'?'/HooSmartChain_EN.pdf':'/HooSmartChain.pdf'"
                        target="_blank"
                    >{{ $t('common.whitePaper') }}</a>
                </p>
                <p>
                    <a
                        href="https://docs.hoosmartchain.com/"
                        target="_blank"
                    >{{ $t('common.docs') }}</a>
                </p>
                <p>
                    <a
                        href="https://github.com/hoosmartchain/hoo-smartchain"
                        target="_blank"
                    >{{ $t('common.github') }}</a>
                </p>
                <p>
                    <a href="https://testnet.hscscan.com/" target="_blank">{{ $t('common.hscte') }}</a>
                </p>
                <p>
                    <a
                        href="https://testnet.hscscan.com/hydrant"
                        target="_blank"
                    >{{ $t('common.ffhsct') }}</a>
                </p>
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.usehsc') }}</h4>
                <p>
                    <a
                        :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/wallet' : 'https://docs.hoosmartchain.com/#/wallet'"
                        target="_blank"
                    >{{ $t('common.wallet') }}</a>
                </p>
                <p>
                    <a
                        :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/buy_hoo' : 'https://docs.hoosmartchain.com/#/buy_hoo'"
                        target="_blank"
                    >{{ $t('common.buygasfee') }}</a>
                </p>
                <p>
                    <a>{{ $t('common.dapps') }}</a>
                </p>
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.explorer') }}</h4>
                <p>
                    <a href="https://hooscan.com/" target="_blank">{{ $t('common.hscmen') }}</a>
                </p>
                <p>
                    <a href="https://hscscan.com/" target="_blank">{{ $t('common.hscme') }}</a>
                </p>
                <p>
                    <a href="https://testnet.hscscan.com/" target="_blank">{{ $t('common.hscte') }}</a>
                </p>
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.abouthsc') }}</h4>
                <p>
                    <a
                        :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/intro' : 'https://docs.hoosmartchain.com/#/intro'"
                        target="_blank"
                    >{{ $t('common.aboutus') }}</a>
                </p>
                <p>
                    <a href="javascript:;" @click="toBrand()">{{ $t('common.brandresoures') }}</a>
                </p>
                <p>
                    <a
                        :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/disclaimer' : 'https://docs.hoosmartchain.com/#/disclaimer'"
                        target="_blank"
                    >{{ $t('common.disclaimer') }}</a>
                </p>
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.contactus') }}</h4>
                <p>
                    <router-link to="/ama/request">AMA Request Form</router-link>
                </p>
                <p>
                    <a href="http://hk.mikecrm.com/yQ3un8R" target="_blank">{{ $t('common.paf') }}</a>
                </p>
                <p>
                    <a href="http://hk.mikecrm.com/Ojim7jO" target="_blank">{{ $t('common.caf') }}</a>
                </p>
                <p>
                    <a
                        href="mailto:support@hoosmartchain.com"
                        target="_blank"
                    >{{ $t('common.techinicalSupport') }}</a>
                </p>
                <p>
                    <a
                        href="mailto:service@hoosmartchain.com"
                        target="_blank"
                    >{{ $t('common.userService') }}</a>
                </p>
                <p>
                    <a
                        href="mailto:foundation@hoosmartchain.com"
                        target="_blank"
                    >{{ $t('common.seekInvestments') }}</a>
                </p>
                <p>
                    <a
                        href="mailto:hsc@hoosmartchain.com"
                        target="_blank"
                    >{{ $t('common.businessContacts') }}</a>
                </p>
                <p>
                    <a
                        :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/faq' : 'https://docs.hoosmartchain.com/#/faq'"
                        target="_blank"
                    >{{ $t('common.faq') }}</a>
                </p>
            </div>
            <div class="ft-con join">
                <h4>{{ $t('common.keepInTouch') }}</h4>
                <p class="join-1">
                    <a href="https://twitter.com/HooSmartChain" target="_blank">Twitter</a>
                </p>
                <p class="join-2">
                    <a href="https://t.me/HooSmartChain" target="_blank">Telegram</a>
                </p>
                <!-- <p class="join-3">
          <el-popover placement="left" width="200" trigger="hover">
            <div class="address-title-img">
              <img src="../images/icon/join/wechat-2.jpg" alt="" height="180" />
            </div>
            <a slot="reference">Wechat</a>
          </el-popover>
        </p>
        <p class="join-5">
          <el-popover placement="left" width="200" trigger="hover">
            <div class="address-title-img">
              <img src="../images/common/qrcode_group.png" alt="" height="180" />
            </div>
            <a slot="reference">{{ $t('common.community.qqgroup') }}</a>
          </el-popover>
                </p>-->
                <!-- <p class="join-4"><a href="mailto:hsc@hoosmartchain.com" target="_blank">Email</a></p> -->
                <p class="join-6">
                    <a href="https://t.me/HooSmartChain" target="_blank">Discord</a>
                </p>
            </div>
        </div>

        <div class="friend-link">
            <p>
                <span>{{ $t('common.friend-link') }}</span>
                <a href="https://eapy.com/" target="_blank">{{ $t('common.link-explorer') }}</a>
                <a href="https://hooscan.com/" target="_blank">{{ $t('common.browser') }}</a>
                <a href="https://hoo.as/" target="_blank">{{ $t('common.hoo') }}</a>
            </p>
        </div>
        <div class="mobile">
            <el-menu
                class="m-menu-bd"
                unique-opened
                mode="vertical"
                background-color="#232E42"
                text-color="#8F92A1"
                active-text-color="#fff"
            >
                <el-submenu index="1">
                    <template slot="title">{{ $t('common.developer') }}</template>
                    <el-menu-item index="1-1">
                        <a
                            :href="curLang==='en'?'/HooSmartChain_EN.pdf':'/HooSmartChain.pdf'"
                            target="_blank"
                        >{{ $t('common.whitePaper') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-0">
                        <a
                            href="https://docs.hoosmartchain.com/"
                            target="_blank"
                        >{{ $t('common.developer') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <a
                            href="https://github.com/hoosmartchain/hoo-smartchain"
                            target="_blank"
                        >{{ $t('common.github') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <a
                            href="https://testnet.hscscan.com/"
                            target="_blank"
                        >{{ $t('common.hscte') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-4">
                        <a
                            href="https://testnet.hscscan.com/hydrant"
                            target="_blank"
                        >{{ $t('common.ffhsct') }}</a>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">{{ $t('common.usehsc') }}</template>
                    <el-menu-item index="2-1">
                        <a
                            :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/wallet' : 'https://docs.hoosmartchain.com/#/wallet'"
                            target="_blank"
                        >{{ $t('common.wallet') }}</a>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <a
                            href="https://docs.hoosmartchain.com/#/buy_hoo"
                            target="_blank"
                        >{{ $t('common.buygasfee') }}</a>
                    </el-menu-item>
                    <el-menu-item index="2-3">{{ $t('common.dapps') }}</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">{{ $t('common.explorer') }}</template>
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
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">{{ $t('common.abouthsc') }}</template>
                    <el-menu-item index="4-1">
                        <a
                            :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/intro' : 'https://docs.hoosmartchain.com/#/intro'"
                            target="_blank"
                        >{{ $t('common.aboutus') }}</a>
                    </el-menu-item>
                    <el-menu-item index="4-4">
                        <a href="javascript:;" @click="toBrand()">{{ $t('common.brandresoures') }}</a>
                    </el-menu-item>
                    <el-menu-item index="4-5">
                        <a
                            :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/disclaimer' : 'https://docs.hoosmartchain.com/#/disclaimer'"
                            target="_blank"
                        >{{ $t('common.disclaimer') }}</a>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">{{ $t('common.contactus') }}</template>
                    <el-menu-item index="5-1">
                        <router-link to="/ama/request">AMA Request Form</router-link>
                    </el-menu-item>
                    <el-menu-item index="5-2">
                        <a
                            href="http://hk.mikecrm.com/yQ3un8R"
                            target="_blank"
                        >{{ $t('common.paf') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-3">
                        <a
                            href="http://hk.mikecrm.com/Ojim7jO"
                            target="_blank"
                        >{{ $t('common.caf') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-4">
                        <a
                            href="mailto:support@hoosmartchain.com"
                            target="_blank"
                        >{{ $t('common.techinicalSupport') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-5">
                        <a
                            href="mailto:service@hoosmartchain.com"
                            target="_blank"
                        >{{ $t('common.userService') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-6">
                        <a
                            href="mailto:foundation@hoosmartchain.com"
                            target="_blank"
                        >{{ $t('common.seekInvestments') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-7">
                        <a
                            href="mailto:hsc@hoosmartchain.com"
                            target="_blank"
                        >{{ $t('common.businessContacts') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-8">
                        <a
                            :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/faq' : 'https://docs.hoosmartchain.com/#/faq'"
                            target="_blank"
                        >{{ $t('common.faq') }}</a>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">{{ $t('common.keepInTouch') }}</template>
                    <el-menu-item index="6-1">
                        <img src="../images/icon/join/twitter-1.svg" alt height="10" />
                        <a href="https://twitter.com/HooSmartChain" target="_blank">Twitter</a>
                    </el-menu-item>
                    <el-menu-item index="6-2">
                        <img src="../images/icon/join/telegram-1.svg" alt height="10" />
                        <a href="https://t.me/HooSmartChain" target="_blank">Telegram</a>
                    </el-menu-item>
                    <el-menu-item index="6-3">
                        <img src="../images/icon/join/telegram-1.svg" alt height="10" />
                        <a href="https://t.me/HooSmartChain" target="_blank">Discord</a>
                    </el-menu-item>
                    <!-- <el-menu-item index="6-2"><img src="../images/icon/join/wechat-1.svg" alt="" height="10" />
            <el-popover placement="top-start" width="200" trigger="hover">
              <div class="address-title-img">
                <img src="../images/icon/join/wechat-2.jpg" alt="" height="180" />
              </div>
              <a slot="reference">Wechat</a>
            </el-popover>
          </el-menu-item>

          <el-menu-item index="6-2"><img src="../images/icon/join/qq-1.svg" alt="" height="14" />
            <el-popover placement="top-start" width="200" trigger="hover">
              <div class="address-title-img">
                <img src="../images/common/qrcode_group.png" alt="" height="180" />
              </div>
              <a slot="reference">{{ $t('common.community.qqgroup') }}</a>
            </el-popover>
                    </el-menu-item>-->

                    <!-- <el-menu-item index="6-4"><img src="../images/icon/join/email-1.svg" alt="" height="10"> <a href="mailto:hsc@hoosmartchain.com" target="_blank">Email</a></el-menu-item> -->
                </el-submenu>
            </el-menu>
        </div>
        <div class="copyright">
            <div class="copyright-con clearfix">
                <div class="fl copyright-l">
                    <img src="../images/logo/logo-white.svg" alt height="18" />
                    <div class="mobile">
                        <a>{{ $t('common.privacy') }}</a>
                        <a>{{ $t('common.terms') }}</a>
                        <a>{{ $t('common.cookies') }}</a>
                    </div>
                    <p>© 2020 - 2021 Hoosmartchain.com. All rights reserved.</p>
                </div>
                <div class="fr copyright-r">
                    <a>{{ $t('common.privacy') }}</a>
                    <a>{{ $t('common.terms') }}</a>
                    <a>{{ $t('common.cookies') }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import logoSrc from '../images/icon/join/wechat.svg';
let curLang = ref('en');

console.log('this.$i18n is: ', this);

function toBrand() {
    this.$router.push({
        path: '/brand',
    });
}
</script>

<style lang="scss">
@import '../sass/common/_var.scss';
.main-footer {
    // background: #232e42;
    position: relative;
    .bd {
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .ft-con {
            min-width: 100px;
            color: $color-white;
            margin-top: 80px;
            h4 {
                margin: 0;
                padding: 0;
                font-size: 20px;
                margin-bottom: 30px;
                font-weight: normal;
            }
            p {
                margin: 0;
                padding: 0;
                line-height: 32px;
                a {
                    color: #8f92a1;
                    transition: all 0.3s ease-out;
                    font-size: 16px;
                    &:hover {
                        color: $color-white;
                        text-decoration: none;
                    }
                }
            }
            &.join {
                p {
                    padding-left: 25px;
                }
                .join-1 {
                    background: url('../images/icon/join/twitter-1.svg') no-repeat left center;
                    background-size: 19px 19px;
                    &:hover {
                        background: url('../images/icon/join/twitter.svg') no-repeat left center;
                        background-size: 25px 28px;
                        a {
                            color: $color-white;
                            text-decoration: none;
                            margin-left: 5px;
                        }
                        cursor: pointer;
                    }
                }
                .join-2 {
                    background: url('../images/icon/join/telegram-1.svg') no-repeat left center;
                    background-size: 19px 19px;
                    &:hover {
                        background: url('../images/icon/join/telegram.svg') no-repeat left center;
                        background-size: 25px 25px;
                        a {
                            color: $color-white;
                            text-decoration: none;
                            margin-left: 5px;
                        }
                        cursor: pointer;
                    }
                }
                .join-3 {
                    background: url('../images/icon/join/wechat-1.svg') no-repeat left center;
                    background-size: 19px 13px;
                    &:hover {
                        background: url('../images/icon/join/wechat.svg') no-repeat left center;
                        background-size: 25px 25px;
                        a {
                            color: $color-white;
                            text-decoration: none;
                            margin-left: 5px;
                        }
                        cursor: pointer;
                    }
                }
                .join-4 {
                    background: url('../images/icon/join/email-1.svg') no-repeat left center;
                    background-size: 19px 12px;
                    &:hover {
                        background: url('../images/icon/join/email.svg') no-repeat left center;
                        background-size: 25px 25px;
                        a {
                            color: $color-white;
                            text-decoration: none;
                            margin-left: 5px;
                        }
                        cursor: pointer;
                    }
                }
                .join-5 {
                    background: url('../images/icon/join/qq-1.svg') no-repeat left center;
                    background-size: 19px 19px;
                    &:hover {
                        background: url('../images/icon/join/qq.svg') no-repeat left center;
                        background-size: 25px 25px;
                        a {
                            color: $color-white;
                            text-decoration: none;
                            margin-left: 5px;
                        }
                        cursor: pointer;
                    }
                }
                .join-6 {
                    background: url('../images/icon/join/discord.svg') no-repeat left center;
                    background-size: 19px 19px;
                    &:hover {
                        background: url('../images/icon/join/discord-hover.svg') no-repeat left center;
                        background-size: 25px 25px;
                        a {
                            color: $color-white;
                            text-decoration: none;
                            margin-left: 5px;
                        }
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .friend-link {
        position: absolute;
        bottom: 80px;
        width: 100%;
        text-align: center;
        color: #8f92a1;
        a {
            color: #8f92a1;
            transition: all 0.3s ease-out;
            margin-right: 10px;
            &:hover {
                color: $color-white;
                text-decoration: none;
            }
        }
    }
    .copyright {
        background: #0a172d;
        .copyright-con {
            max-width: 1200px;
            margin: 70px auto 0;
            .copyright-l {
                height: 80px;
                line-height: 80px;
                p {
                    display: inline-block;
                    margin-left: 50px;
                    margin-bottom: 0;
                    font-size: 16px;
                    color: #8f92a1;
                    vertical-align: -2px;
                }
                .mobile {
                    display: none;
                }
            }
            .copyright-r {
                height: 80px;
                line-height: 80px;
                a {
                    margin-left: 50px;
                    font-size: 16px;
                    color: #8f92a1;
                    transition: all 0.3s ease-out;
                    &:hover {
                        color: $color-white;
                    }
                }
            }
        }
    }
    > .mobile {
        display: none;
    }
}
</style>

<style lang="scss">
@import '../sass/common/_var.scss';
@media (max-width: 1000px) {
    .main-footer {
        .pc {
            display: none;
        }
        > .mobile {
            display: block;
            padding-top: 35px;
            padding-bottom: 35px;
            .m-menu-bd {
                &.el-menu {
                    border-right: none;
                }
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
                        background-color: #232e42 !important;
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
                            color: #8f92a1;
                            display: inline-block;
                            width: calc(100% - 40px);
                        }
                        &:hover {
                            background-color: $color-white;
                        }
                    }
                }
            }
        }
        .friend-link {
            bottom: 170px;
        }
        .copyright {
            padding-left: 20px;
            padding-right: 20px;
            .copyright-con {
                text-align: center;
                margin-top: 0;
                .copyright-l {
                    margin-top: 40px;
                    height: auto;
                    line-height: unset;
                    float: none;
                    img {
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 12px;
                        margin: 20px 0 50px;
                    }
                    .mobile {
                        display: block;
                        a {
                            color: #8f92a1;
                            font-size: 16px;
                            margin: 0 10px;
                        }
                    }
                }
                .copyright-r {
                    display: none;
                }
            }
        }
    }
}
</style>
