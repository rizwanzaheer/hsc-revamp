<template>
    <el-main>
        <div class="landing-con">
            <!-- visualization section starts -->
            <el-row justify="center" class="first-main-banner">
                <el-col :span="24" class="mt-[20%] md:mt-[16%]">
                    <h2
                        class="text-white text-[30px] md:text-[40px] mt-5 text-center leading-[42px] md:leading-[48.76px] text-[600] not-italic"
                    >Cosmic Origin Project</h2>
                </el-col>
                <el-col :span="24" class="flex justify-center">
                    <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[226px] h-[57px]"
                        title="Enroll Now"
                        native-type="button"
                        @click="openURL('http://hk.mikecrm.com/NtPoo5v')"
                    />
                </el-col>
            </el-row>
            <!-- visualization section ends -->

            <!-- cosmic origin project section start -->

            <el-row :gutter="20" class="mt-20 mb-16">
                <el-col :xs="20" :sm="20" lg="20" :offset="2">
                    <h2
                        class="text-[#02EAD0] text-[18px] mt-5 text-left leading-[30px] font-[600] not-italic mb-2"
                    >Project Vision</h2>
                    <p class="text-white text-[15px] leading-[21px] text-left text-[400]">
                        Every life in our universe has its own unique story to tell, from the smallest organism to the greatest civilizations to an entire planets, from insignificance to greatness and perhaps into decline. At HSC Foundation we strive to provide the sunlight and soil for pudding projects to realise their potential.
                        <br />
                        <br />HSC believes that nurturing the growth of an ecosystem for innovation is vital to the blockchain industry. We have created a grants and rewards programme and welcome all developers and community members to grow together with us. We aim to visualise blockchain data and create an entirely new paradigm of interacting with decentralised finance (De-fi), Game-fi, social-fi and other merging blockchain technologies. We hope to do this together, realising our dream for a sprawling interconnected Metaverse.
                        <br />
                        <br />
                        <span class="text-[400]">Go fast alone, but we will go further together!</span>
                    </p>
                </el-col>
            </el-row>

            <!-- cosmic tab section start  -->
            <el-row :gutter="20" justify="center">
                <el-col :span="20">
                    <CustomTabs :tabPosition="left" />
                </el-col>
            </el-row>

            <!-- terms and conditions section start -->
            <el-row class="mt-20 mb-16">
                <el-col :xs="20" :sm="20" lg="20" :offset="2">
                    <h2
                        class="text-[#02EAD0] text-[18px] mt-5 text-left leading-[30px] text-[600] not-italic mb-2"
                    >Terms and Conditions</h2>
                    <h2
                        class="text-white text-[15px] mt-5 text-left leading-[23px] text-[700] not-italic mb-2 font-bold"
                    >Rewards Date</h2>
                    <p class="text-white text-[15px] leading-[23px] text-left text-[400]">
                        Phase 1 of Cosmic Origins Project Date: 0:00 January 14, 2022 to 24:00 July 30, 2022. With a plan for Phase 2 to be announced for second half of 2022.
                        <br />
                        <br />
                    </p>
                    <h2
                        class="text-white text-[15px] mt-5 text-left leading-[23px] text-[700] not-italic mb-2 font-bold"
                    >Details</h2>
                    <ol
                        class="list-decimal text-white text-[15px] leading-[23px] ml-[20px] font-[400]"
                    >
                        <li>
                            TVL rewards will be evaluated based on the value of mainstream tokens **, and other tokens will not be included in the standard of TVL. You may find a list of
                            <span
                                class="underline underline-offset-2 cursor-pointer"
                                native-type="button"
                                @click="openURL('https://docs.hoosmartchain.com/#/en-us/crosschain')"
                            >mainstream tokens.</span>
                        </li>
                        <li>TVL Rewards A can only be rewarded once. TVL Rewards B can be redeemed on a monthly basis thereafter.</li>
                        <li>Game-fi and NFT Volume Bonus can also be redeemed once, on top of TVL Rewards A and B.</li>
                        <li>All projects metrics for rewards will be calculated by a random snapshot. If project does not reached the reward requirements at the time of which the snapshot was taken, the bonus will be cancelled.</li>
                        <li>If malicious trading behaviour is found including bots, the reward will be cancelled with immediate effect. HSC Foundation Reserves the Right to interpret what is malicious trading behaviour.</li>
                        <li>Transaction Volume Bonus Rewards are based on TVL Rewards A & B. They are awarded based on corresponding reward level x the coefficient which is a given percentage of the reward.</li>
                        <li>All rewards will be paid out in USDT.</li>
                    </ol>
                    <br />
                    <h2
                        class="text-[#02EAD0] text-[18px] mt-5 text-left leading-[30px] text-[600] not-italic mb-2"
                    >Reward payment</h2>
                    <p class="text-white text-[15px] leading-[23px] text-left text-[400]">
                        All rewards are accumulated in the bonus pool, with the following two withdrawal methods:
                        <br />
                        <br />
                    </p>
                    <ol class="list-decimal text-white text-[15px] leading-[23px] ml-[20px]">
                        <li>One-time withdrawal: the reward is accumulated for one year, and you can apply for one-time withdrawal after one year.</li>
                        <li>Withdrawal in batches: you can apply for withdrawal of 10% of the bonus pool every month. If the project develops to a high reward level, the monthly withdrawal volume can be increased by 10%. The remaining reward can be withdrawn directly after one year.</li>
                    </ol>
                    <br />
                    <br />

                    <p class="text-white text-[15px] leading-[23px] text-left text-[400] italic">
                        The HSC Foundation reserves the right to interpret the terms of the grants and rewards programme in event of any dispute.
                        <br />
                        <br />
                    </p>
                </el-col>
            </el-row>
            <!-- terms and conditions section ends -->

            <!-- cosmic tab section ends  -->

            <el-row justify="center" class="mt-10">
                <el-col :xs="22" :sm="22" :md="12">
                    <img src="../../images/million/100-MILLION.png" style="width: 100%" />
                </el-col>
            </el-row>
            <!-- cosmic origin project section start -->

            <!-- hsc community section start -->
            <el-row class="hsc-community-con mt-20">
                <el-col :span="24" class="mt-[6rem]">
                    <el-row :gutter="20" justify="center ">
                        <el-col :span="24" :xs="20" :sm="20">
                            <h1
                                class="text-white text-[30px] md:text-[40px] leading-[42px] md:leading-[49px] font-[600] text-center mt-10"
                            >
                                Join our community below
                                <br />& we’ll help you out!
                            </h1>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" justify="center " class="mt-14">
                        <el-col :xs="20" :sm="20" md="6">
                            <div class="hsc-community-icon-con flex justify-evenly">
                                <p
                                    class="hsc-community-icon-5"
                                    @click="openURL('https://discord.com/invite/n6ahyKV24d')"
                                >
                                    <a href>Discord</a>
                                </p>
                                <p
                                    class="hsc-community-icon-3"
                                    @click="openURL('https://t.me/HooSmartChain')"
                                >
                                    <a href>Telegram</a>
                                </p>
                                <p
                                    class="hsc-community-icon-4"
                                    @click="openURL('https://twitter.com/HooSmartChain')"
                                >
                                    <a href>Twitter</a>
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- hsc community section ends -->

            <!-- Join cosmic section starts -->
            <el-row class="mt-24 !mb-20" justify="center">
                <el-col
                    :span="21"
                    style="background: linear-gradient(271.11deg, #719EE6 -9.09%, #02EAD0 72.29%);"
                >
                    <el-row justify="center" :gutter="10" class="!items-center min-h-[130px]">
                        <el-col :span="16" class="h-[inherit]">
                            <div class="grid-content pl-3 md:pl-0 flex justify-left items-center">
                                <h1
                                    class="text-[#12171B] leading-[28px] md:leading-[36.57px] font-[600] text-[16px] md:text-[30px] ml-2 md:ml-20"
                                >Be part of HMC Project Rewards Programme</h1>
                            </div>
                        </el-col>
                        <el-col :span="8" class="h-[inherit]">
                            <div
                                class="grid-content text-center flex justify-center md:justify-end items-center md:pr-[10%]"
                            >
                                <a
                                    class="text-[8px] md:text-[15px] bg-[#12171B] leading-[16px] md:leading-[18px] no-underline font-[600] text-white"
                                    style="box-shadow: 0px 3px 0px rgba(50, 50, 50, 0.37); border-radius: 6px; text-decoration: none !important; padding:12px 25px !important; "
                                    href="http://hk.mikecrm.com/NtPoo5v"
                                    target="_blank"
                                >Join now</a>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- Join cosmic section ends -->
        </div>
    </el-main>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import CustomButton from '../../components/CustomButton.vue';
import CustomTabs from '../../components/CustomTabs.vue';
const openURL = (uri) => {
    // alert('forDeveloperRegisterNow calling!!');
    // window.open(document.URL, '_blank', '');
    window.open(uri, '_blank', '');
};
</script>


<style lang="scss">
@import '../../sass/common/_var.scss';
.new-journey {
    &:hover {
        span {
            border-color: $color-primary;
        }
    }
}

.el-link--default {
    color: white !important;
    text-decoration: underline !important;
    &:hover {
        text-decoration: none !important;
        .el-link--inner {
            color: rgb(59 130 246 / 0.5) !important;
        }
    }
    &::after {
        text-decoration: none !important;
    }
}
.first-main-banner {
    background: url('../../images/landing-page-header/confetti-main.png') no-repeat;
    background-size: cover;
    min-height: 390px;
    // padding: 60px;
    margin-left: 100px;
    margin-right: 100px;
    background-position: center;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.section-2 {
    margin-top: 70px;
    background: url('~@/images/banner/use-bg.png') no-repeat center 108px;
    background-size: 1920px 410px;
    .s-title {
        text-align: center;
        font-weight: normal;
        font-size: 30px;
        color: $color-secondary;
        margin-bottom: 80px;
        .t-mark {
            background: rgba($color: $color-primary, $alpha: 0.4);
        }
    }
    .row {
        margin-right: -40px;
        margin-left: -40px;
    }
    .desc {
        margin-bottom: 50px;
        &.desc-1 {
            padding-left: 10px;
            padding-right: 15px;
        }
        &.desc-2 {
            padding-left: 15px;
            padding-right: 10px;
        }
        .desc-con {
            height: 342px;
            box-sizing: border-box;
            border-radius: 10px;
            position: relative;
            .title {
                text-align: center;
                font-size: 30px;
                color: $color-secondary;
                padding-top: 20px;
                span {
                    color: $color-primary;
                }
            }
            .info {
                text-align: center;
                font-size: 20px;
                color: rgba($color: $color-secondary, $alpha: 0.8);
                span {
                    font-size: 36px;
                    color: rgba($color: $color-primary, $alpha: 0.8);
                }
                margin-bottom: 30px;
            }
            .steps {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                padding: 0 33px;
                align-items: center;
                a {
                    display: block;
                    text-align: center;
                    &.step {
                        width: 160px;
                        height: 174px;
                        border-radius: 10px;
                        padding-top: 40px;
                        transition: all 0.3s ease-out;
                        &:hover {
                            background-color: $color-white;
                            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
                        }
                    }
                    &.arrow {
                        margin-top: 56px;
                        transform: translate(-16px, -70%);
                        img {
                            width: 26px;
                            height: 21px;
                        }
                    }
                    img {
                        width: 50px;
                        height: 50px;
                    }
                    p {
                        font-size: 16px;
                        margin-top: 18px;
                        color: $color-secondary;
                    }
                }
            }
        }
    }
}
.steps {
    a {
        &.step {
            height: 105px;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s ease-out;
        }
        &.arrow {
            transform: translate(-16px, -70%);
        }
    }
}

.for-dev {
    background: linear-gradient(284.46deg, #8071e6 -2.02%, #02ead0 33.84%);
}
.for-user {
    background: linear-gradient(284.46deg, #719ee6 -2.02%, #02ead0 33.84%);
}

.road-map-con {
    background: linear-gradient(90.98deg, rgba(125, 114, 179, 0.165) 0.7%, rgba(110, 105, 119, 0.012) 99.98%);
    box-shadow: 0px 14px 25px rgba(0, 0, 0, 0.05);
    min-height: 538px;
    clip-path: polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%);
}
.hsc-community-con {
    background: linear-gradient(269.99deg, rgba(125, 114, 179, 0.165) 0.7%, rgba(110, 105, 119, 0.012) 99.98%);
    box-shadow: 0px 14px 25px rgba(0, 0, 0, 0.05);
    min-height: 408px;
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
}

.hsc-community-icon-con {
    min-height: 104px;
    p {
        padding-top: 70px;
        min-width: 60px;
        text-align: center;
        a {
            color: $community-icon-text-bg;
            font-weight: 500;
            font-size: 12px;
            line-height: 30px;
        }
    }
    .hsc-community-icon-1 {
        background: url('../../images/social/web.svg') no-repeat top center;
        background-size: 60px 60px;
        &:hover {
            background: url('../../images/social/web-hover.svg') no-repeat top center;
            background-size: 60px 60px;
            a {
                color: $color-white;
                text-decoration: none;
            }
            cursor: pointer;
        }
    }
    .hsc-community-icon-2 {
        background: url('../../images/social/medium.svg') no-repeat top center;
        background-size: 60px 60px;
        &:hover {
            background: url('../../images/social/medium-hover.svg') no-repeat top center;
            background-size: 60px 60px;
            a {
                color: $color-white;
                text-decoration: none;
            }
            cursor: pointer;
        }
    }
    .hsc-community-icon-3 {
        background: url('../../images/social/telegram.svg') no-repeat top center;
        background-size: 60px 60px;
        &:hover {
            background: url('../../images/social/telegram-hover.svg') no-repeat top center;
            background-size: 60px 60px;
            a {
                color: $color-white;
                text-decoration: none;
            }
            cursor: pointer;
        }
    }
    .hsc-community-icon-4 {
        background: url('../../images/social/twitter.svg') no-repeat top center;
        background-size: 60px 60px;
        &:hover {
            background: url('../../images/social/twitter-hover.svg') no-repeat top center;
            background-size: 60px 60px;
            a {
                color: $color-white;
                text-decoration: none;
            }
            cursor: pointer;
        }
    }
    .hsc-community-icon-5 {
        background: url('../../images/social/discord.svg') no-repeat top center;
        background-size: 60px 60px;
        &:hover {
            background: url('../../images/social/discord-hover.svg') no-repeat top center;
            background-size: 60px 60px;
            a {
                color: $color-white;
                text-decoration: none;
            }
            cursor: pointer;
        }
    }
}
</style>

<style lang="scss">
@media (max-width: 1000px) {
    .home-con {
        .section-2 {
            margin-top: 30px;
            background: none;
            background-size: none;
            .s-title {
                font-size: 18px;
                margin-bottom: 25px;
            }
            .row {
                margin-right: -5px;
                margin-left: -5px;
            }
        }
    }
    .first-main-banner {
        background-size: contain;
        min-height: 0px;
        margin-left: 10px;
        margin-right: 10px;
        background-position: top;
    }
}
</style>
