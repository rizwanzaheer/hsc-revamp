<template>
    <div class="main-footer">
        <div class="bd pc">
            <div class="ft-con">
                <h4>{{ $t('common.developer') }}</h4>
                <p>
                    <!-- :href="curLang==='en'?'/HooSmartChain_EN.pdf':'/HooSmartChain.pdf'" -->
                    <a
                        href="/HooSmartChain_EN.pdf"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.whitePaper') }}</a>
                </p>
                <p>
                    <a
                        href="https://docs.hoosmartchain.com/#/en-us/intro/"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.docs') }}</a>
                </p>
                <!-- <p>
                    <a
                        href="https://github.com/hoosmartchain/hoo-smartchain"
                        target="_blank"
                    >{{ $t('common.github') }}</a>
                </p>-->
                <!-- <p>
                    <a
                        href="https://testnet.hscscan.com/"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.hscte') }}</a>
                </p>-->
                <!-- <p>
                    <a
                        href="https://testnet.hscscan.com/hydrant"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.ffhsct') }}</a>
                </p>-->
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.usehsc') }}</h4>
                <p>
                    <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/wallet' : 'https://docs.hoosmartchain.com/#/wallet'" -->
                    <a
                        href="https://docs.hoosmartchain.com/#/en-us/wallet"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.wallet') }}</a>
                </p>
                <p>
                    <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/buy_hoo' : 'https://docs.hoosmartchain.com/#/buy_hoo'" -->
                    <a
                        href="https://docs.hoosmartchain.com/#/en-us/buy_hoo"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.buygasfee') }}</a>
                </p>
                <p>
                    <a class="hover:underline hover:underline-offset-4">{{ $t('common.dapps') }}</a>
                </p>
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.explorer') }}</h4>
                <p>
                    <a
                        href="https://hooscan.com/"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.hscmen') }}</a>
                </p>
                <p>
                    <a
                        href="https://hscscan.com/"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.hscme') }}</a>
                </p>
                <!-- <p>
                    <a
                        href="https://testnet.hscscan.com/"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.hscte') }}</a>
                </p>-->
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.abouthsc') }}</h4>
                <p>
                    <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/intro' : 'https://docs.hoosmartchain.com/#/intro'" -->
                    <a
                        href="https://docs.hoosmartchain.com/#/en-us/intro"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.aboutus') }}</a>
                </p>
                <p>
                    <a
                        href="/brand"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.brandresoures') }}</a>
                </p>
                <p>
                    <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/disclaimer' : 'https://docs.hoosmartchain.com/#/disclaimer'" -->
                    <a
                        href="https://docs.hoosmartchain.com/#/en-us/disclaimer"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.disclaimer') }}</a>
                </p>
            </div>
            <div class="ft-con">
                <h4>{{ $t('common.contactus') }}</h4>
                <p>
                    <a
                        href="http://hk.mikecrm.com/GADM58m"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >AMA Request Form</a>
                </p>
                <p>
                    <a
                        href="http://hk.mikecrm.com/yQ3un8R"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.paf') }}</a>
                </p>
                <p>
                    <a
                        class="hover:underline hover:underline-offset-4"
                        href="http://hk.mikecrm.com/Ojim7jO"
                        target="_blank"
                    >{{ $t('common.caf') }}</a>
                </p>
                <p>
                    <a
                        href="https://discord.com/invite/n6ahyKV24d"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.techinicalSupport') }}</a>
                </p>
                <p>
                    <a
                        href="mailto:service@hoosmartchain.com"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.userService') }}</a>
                </p>
                <p>
                    <a
                        href="mailto:foundation@hoosmartchain.com"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.seekInvestments') }}</a>
                </p>
                <p>
                    <a
                        href="mailto:hsc@hoosmartchain.com"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
                    >{{ $t('common.businessContacts') }}</a>
                </p>
                <p>
                    <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/faq' : 'https://docs.hoosmartchain.com/#/faq'" -->
                    <a
                        href="https://docs.hoosmartchain.com/#/en-us/faq"
                        target="_blank"
                        class="hover:underline hover:underline-offset-4"
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
                    <a href="https://discord.com/invite/n6ahyKV24d" target="_blank">Discord</a>
                </p>
            </div>
        </div>

        <!-- <div class="friend-link">
            <p>
                <span>{{ $t('common.friend-link') }}</span>
                <a href="https://eapy.com/" target="_blank">{{ $t('common.link-explorer') }}</a>
                <a href="https://hooscan.com/" target="_blank">{{ $t('common.browser') }}</a>
                <a href="https://hoo.as/" target="_blank">{{ $t('common.hoo') }}</a>
            </p>
        </div>-->
        <div class="mobile">
            <el-menu
                class="m-menu-bd"
                unique-opened
                mode="vertical"
                background-color="#181D22"
                text-color="white"
                active-text-color="#fff"
            >
                <el-sub-menu index="1">
                    <template #title>{{ $t('common.developer') }}</template>
                    <el-menu-item index="1-1">
                        <!-- :href="curLang==='en'?'/HooSmartChain_EN.pdf':'/HooSmartChain.pdf'" -->
                        <a
                            href="/HooSmartChain_EN.pdf"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.whitePaper') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-0">
                        <a
                            href="https://docs.hoosmartchain.com/"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.developer') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <a
                            href="https://github.com/hoosmartchain/hoo-smartchain"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.github') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <a
                            href="https://testnet.hscscan.com/"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.hscte') }}</a>
                    </el-menu-item>
                    <el-menu-item index="1-4">
                        <a
                            href="https://testnet.hscscan.com/hydrant"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.ffhsct') }}</a>
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>{{ $t('common.usehsc') }}</template>
                    <el-menu-item index="2-1">
                        <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/wallet' : 'https://docs.hoosmartchain.com/#/wallet'" -->
                        <a
                            href="https://docs.hoosmartchain.com/#/en-us/wallet"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.wallet') }}</a>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <a
                            href="https://docs.hoosmartchain.com/#/buy_hoo"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.buygasfee') }}</a>
                    </el-menu-item>
                    <el-menu-item index="2-3">{{ $t('common.dapps') }}</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>{{ $t('common.explorer') }}</template>
                    <el-menu-item index="3-1">
                        <a
                            href="https://hooscan.com/"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.hscmen') }}</a>
                    </el-menu-item>
                    <el-menu-item index="3-1">
                        <a
                            class="hover:underline hover:underline-offset-4"
                            href="https://hscscan.com/"
                            target="_blank"
                        >{{ $t('common.hscme') }}</a>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <a
                            href="https://testnet.hscscan.com/"
                            class="hover:underline hover:underline-offset-4"
                            target="_blank"
                        >{{ $t('common.hscte') }}</a>
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="4">
                    <template #title>{{ $t('common.abouthsc') }}</template>
                    <el-menu-item index="4-1">
                        <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/intro' : 'https://docs.hoosmartchain.com/#/intro'" -->
                        <a
                            href="https://docs.hoosmartchain.com/#/en-us/intro"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.aboutus') }}</a>
                    </el-menu-item>
                    <el-menu-item index="4-4">
                        <a
                            href="brand"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.brandresoures') }}</a>
                    </el-menu-item>
                    <el-menu-item index="4-5">
                        <!-- :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/disclaimer' : 'https://docs.hoosmartchain.com/#/disclaimer'" -->
                        <a
                            href="https://docs.hoosmartchain.com/#/en-us/disclaimer"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.disclaimer') }}</a>
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="5">
                    <template #title>{{ $t('common.contactus') }}</template>
                    <el-menu-item index="5-1">
                        <a href="http://hk.mikecrm.com/GADM58m" target="_blank">AMA Request Form</a>
                    </el-menu-item>
                    <el-menu-item index="5-2">
                        <a
                            href="http://hk.mikecrm.com/yQ3un8R"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.paf') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-3">
                        <a
                            href="http://hk.mikecrm.com/Ojim7jO"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.caf') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-4">
                        <a
                            href="mailto:support@hoosmartchain.com"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.techinicalSupport') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-5">
                        <a
                            href="mailto:service@hoosmartchain.com"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.userService') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-6">
                        <a
                            href="mailto:foundation@hoosmartchain.com"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.seekInvestments') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-7">
                        <a
                            href="mailto:hsc@hoosmartchain.com"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.businessContacts') }}</a>
                    </el-menu-item>
                    <el-menu-item index="5-8">
                        <a
                            :href="curLang==='en' ? 'https://docs.hoosmartchain.com/#/en-us/faq' : 'https://docs.hoosmartchain.com/#/faq'"
                            target="_blank"
                            class="hover:underline hover:underline-offset-4"
                        >{{ $t('common.faq') }}</a>
                    </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="6">
                    <template #title>{{ $t('common.keepInTouch') }}</template>
                    <el-menu-item index="6-1">
                        <img src="../images/icon/join/twitter-1.svg" alt height="10" />
                        <a
                            class="pl-2"
                            href="https://twitter.com/HooSmartChain"
                            target="_blank"
                        >Twitter</a>
                    </el-menu-item>
                    <el-menu-item index="6-2">
                        <img src="../images/icon/join/telegram-1.svg" alt height="10" />
                        <a class="pl-3" href="https://t.me/HooSmartChain" target="_blank">Telegram</a>
                    </el-menu-item>
                    <el-menu-item index="6-3">
                        <img src="../images/icon/join/discord.svg" alt height="10" />
                        <a
                            class="pl-3"
                            href="https://discord.com/invite/n6ahyKV24d"
                            target="_blank"
                        >Discord</a>
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
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="copyright">
            <div class="copyright-con clearfix">
                <div class="fl copyright-l">
                    <!-- <img src="../images/logo/logo-white.svg" alt height="18" /> -->
                    <el-row class="mobile md:!hidden text-left">
                        <el-col :xs="12" :sm="12" class="!flex flex-col mt-[1%]">
                            <a class="font-[600]">{{ $t('common.friend-link') }}</a>
                            <a
                                class="hover:underline hover:underline-offset-4"
                                href="https://eapy.com/"
                                target="_blank"
                            >{{ $t('common.link-explorer') }}</a>
                            <a
                                class="hover:underline hover:underline-offset-4"
                                href="https://hooscan.com/"
                                target="_blank"
                            >{{ $t('common.browser') }}</a>
                            <a
                                class="hover:underline hover:underline-offset-4"
                                href="https://hoo.as/"
                                target="_blank"
                            >{{ $t('common.hoo') }}</a>
                        </el-col>
                        <el-col :xs="12" :sm="12" class="!flex flex-col mt-[8.2%]">
                            <a
                                class="hover:underline hover:underline-offset-4"
                            >{{ $t('common.privacy') }}</a>
                            <a
                                class="hover:underline hover:underline-offset-4"
                            >{{ $t('common.terms') }}</a>
                            <a
                                class="hover:underline hover:underline-offset-4"
                            >{{ $t('common.cookies') }}</a>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :xs="24">
                            <p>{{ $t('common.app.copyright') }}</p>
                        </el-col>
                    </el-row>
                </div>
                <div class="fr copyright-r text-white">
                    <a>{{ $t('common.friend-link') }}</a>
                    <a
                        class="hover:underline hover:underline-offset-4"
                        href="https://eapy.com/"
                        target="_blank"
                    >{{ $t('common.link-explorer') }}</a>
                    <a
                        class="hover:underline hover:underline-offset-4"
                        href="https://hooscan.com/"
                        target="_blank"
                    >{{ $t('common.browser') }}</a>
                    <a
                        class="hover:underline hover:underline-offset-4"
                        href="https://hoo.as/"
                        target="_blank"
                    >{{ $t('common.hoo') }}</a>
                    <a class="hover:underline hover:underline-offset-4">{{ $t('common.privacy') }}</a>
                    <a class="hover:underline hover:underline-offset-4">{{ $t('common.terms') }}</a>
                    <a class="hover:underline hover:underline-offset-4">{{ $t('common.cookies') }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import logoSrc from '../images/icon/join/wechat.svg';
let curLang = ref('en');
import router from '../router';

function toBrand() {
    router.push({
        path: '/brand',
    });
}
</script>

<style lang="scss">
@import '../sass/common/_var.scss';
.main-footer {
    background-image: url('../images/stars/stars.svg'); //left center;
    background-repeat: repeat;
    background-color: $footer-bg-color;
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
                    color: $color-white;
                    transition: all 0.3s ease-out;
                    font-size: 14px;
                    line-height: 35px;
                    &:hover {
                        color: $color-white;
                        // text-decoration: underline;
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
        background: #12171b;
        .copyright-con {
            max-width: 100%;
            margin: 70px auto 0;
            .copyright-l {
                height: 80px;
                line-height: 80px;
                p {
                    display: inline-block;
                    margin-left: 50px;
                    margin-bottom: 0;
                    font-size: 14px;
                    color: $color-white;
                    vertical-align: -2px;
                    line-height: 35px;
                }
                .mobile {
                    display: none;
                }
            }
            .copyright-r {
                height: 80px;
                line-height: 80px;
                padding-right: 40px;

                a {
                    margin-left: 30px;
                    font-size: 14px;
                    color: $color-white;
                    font-weight: normal;
                    transition: all 0.3s ease-out;
                    line-height: 35px;
                    &:hover {
                        color: $color-white;
                    }
                }
                :first-child {
                    font-weight: 600;
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
            // padding-bottom: 35px;
            .m-menu-bd {
                &.el-menu {
                    border-right: none;
                }
                .el-menu-item {
                    font-size: 16px;
                    color: $color-white;
                    &.is-active {
                        color: $color-primary;
                    }
                    &:hover {
                        background-color: $color-white;
                    }
                }
                .el-sub-menu {
                    .el-sub-menu__title {
                        font-size: 16px;
                        color: $color-white;
                        // background-color: #232e42 !important;
                        &:hover {
                            background-color: $color-primary;
                        }
                    }
                    .el-menu-item {
                        height: 40px;
                        font-size: 14px;
                        line-height: 40px;
                        color: rgba($color: $color-white, $alpha: 0.7);
                        // color: $color-white;
                        // padding: 0 20px !important;
                        a {
                            // color: #8f92a1;
                            color: $color-white;
                            display: inline-block;
                            width: calc(100% - 40px);
                        }
                        &:hover {
                            background-color: $color-primary;
                        }
                    }
                }
            }
        }
        .friend-link {
            bottom: 170px;
        }
        .copyright {
            // padding-left: 20px;
            // padding-right: 20px;
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
                        margin: 20px 0 20px;
                    }
                    .mobile {
                        display: flex;
                        a {
                            color: $color-white;
                            font-size: 12px;
                            margin: 0 10px;
                            line-height: 35px;
                            padding-left: 10px;
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
