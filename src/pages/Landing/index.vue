<template>
    <el-main>
        <div class="home-con">
            <!-- new and update section start -->
            <el-row class="mt-20" justify="center">
                <el-col :span="21" class="h-[55px] bg-gradient-to-r from-[#559BC8] to-[#2BE5C3]">
                    <el-row justify="center" :gutter="10">
                        <el-col :span="5">
                            <div
                                class="grid-content text-center flex justify-center items-center news-container"
                            >
                                <img src="../../images/news/news.svg" class />
                                <h2
                                    class="text-[15px] text-white leading-[24px] ml-5"
                                >News & Update:</h2>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="grid-content text-center">
                                <h1 class="text-white text-[15px] mt-5">
                                    Hoo Smart Chain Heads Towards a New Journey.
                                    <el-link
                                        class="text-[15px] leading-[24px] font-[500] ml-8"
                                        :underline="true"
                                        href="https://hoo.com"
                                        target="_blank"
                                    >
                                        Read Documentation
                                        <!-- <i class="el-icon-view el-icon--right"></i> -->
                                        <el-icon>
                                            <arrow-right />
                                        </el-icon>
                                    </el-link>
                                </h1>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="grid-content text-center">
                                <el-button
                                    type="info"
                                    plain
                                    class="hover:bg-black hover:text-white mt-4 border-black text-black"
                                >See more news</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- new and update section ends -->

            <!-- Infinite Innovation section start -->

            <el-row :gutter="20" class="mt-20">
                <el-col :lg="24" justify="center">
                    <h2
                        class="text-white text-[40px] mt-5 text-center leading-[48.76px] text-[600] not-italic"
                    >Infinite Innovation</h2>
                    <h5
                        class="text-white text-[18px] text-center leading-[30px]"
                    >Our vision for a vertically integrated blockchain ecosystem will take place in four stages</h5>
                </el-col>
            </el-row>
            <!-- Infinite Innovation section start -->

            <!-- visualization section starts -->
            <el-row justify="center">
                <el-col :span="24">
                    <p
                        class="text-[16px] leading-[30px] font-[500] text-white text-center"
                    >Start visualising your journey and apply grant</p>
                </el-col>
                <el-col :span="24" class="flex justify-center">
                    <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[226px] h-[57px]"
                        title="Apply Now"
                        target="_blank"
                        href="https://hoo.com"
                    />
                </el-col>
            </el-row>
            <!-- visualization section ends -->

            <!-- developer/user section start -->

            <el-row :gutter="40" justify="center" class="mt-40">
                <!-- <el-col :span="12" class="s-title bg-gradient-to-r from-[#559BC8] to-[#2BE5C3]">
                    <span v-html="$t('home.block2.title')"></span>
                </el-col>-->
                <el-col
                    :md="10"
                    :sm="12"
                    :xs="12"
                    class="desc desc-1 mr-[30px] !p-[40px] min-h-[390px] w-[540px] for-dev rounded-[10px]"
                    :gutter="40"
                >
                    <div class="desc-con">
                        <p
                            class="title text-[#12171B] leading-[36.57px] font-[600] text-[30px] capitalize"
                            v-html="$t('home.block2.item1.title')"
                        ></p>
                        <p class="text-[#12171B] leading-[24px] font-[500] text-[15px]">
                            Hoo provides you with the documentation, resources,
                            and support you need to get your project up and running.
                        </p>
                        <p class="info" v-html="$t('home.block2.item1.desc')"></p>
                        <div
                            class="steps flex place-content-evenly mt-10"
                            style="align-items:center;"
                        >
                            <a class="step p-2 w-[130px]">
                                <img src="../../images/icon/use/dev1.svg" alt="dev" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center"
                                >{{ $t('home.block2.item1.content1') }}</p>
                            </a>
                            <a class="arrow p-2">
                                <img src="../../images/icon/use/arrow.svg" alt="arrow" />
                            </a>
                            <a class="step p-2 w-[130px]">
                                <img src="../../images/icon/use/dev2.svg" alt="dev2" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center"
                                >{{ $t('home.block2.item1.content2') }}</p>
                            </a>
                            <a class="arrow p-2">
                                <img src="../../images/icon/use/arrow.svg" alt="allow" />
                            </a>
                            <a class="step p-2 w-[130px]">
                                <img src="../../images/icon/use/dev3.svg" alt="dev3" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center"
                                >{{ $t('home.block2.item1.content3') }}</p>
                            </a>
                        </div>
                    </div>
                    <el-row justify="center" class="mt-10">
                        <!-- <el-col :span="24">
                            <p
                                class="text-[16px] leading-[30px] font-[500] text-white text-center"
                            >Start visualising your journey and apply grant</p>
                        </el-col>-->
                        <el-col :span="24" class="flex justify-center">
                            <CustomButton
                                class="bg-black text-white hover:bg-[#8FFDFF] hover:text-black mt-3 mr-[30px] justify:center w-[150px] h-[45px] leading-[18.29px] font-[600] text-[15px]"
                                title="Register Now"
                                target="_blank"
                                href="https://hoo.com"
                            />
                            <el-button
                                type="info"
                                plain
                                class="hover:bg-black hover:text-white mt-3 border-black text-black w-[170px] h-[45px] leading-[18px] font-[600] text-[15px]"
                            >View White Paper</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    :md="10"
                    :sm="12"
                    :xs="12"
                    class="desc desc-2 ml-[30px] min-h-[390px] w-[540px] !p-[40px] rounded-[10px] for-user"
                    :gutter="40"
                >
                    <div class="desc-con">
                        <p
                            class="title title text-[#12171B] leading-[36.57px] font-[600] text-[30px] capitalize"
                            v-html="$t('home.block2.item2.title')"
                        ></p>
                        <p
                            class="text-[#12171B] leading-[24px] font-[500] text-[15px]"
                        >We want to make sure that users can easily accomplish goals by providing support and resources</p>
                        <p class="info" v-html="$t('home.block2.item2.desc')"></p>
                        <div
                            class="steps flex place-content-evenly align-center mt-10"
                            style="align-items:center;"
                        >
                            <a class="step p-2 w-[130px]">
                                <img src="../../images/icon/use/user1.svg" alt />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center"
                                >{{ $t('home.block2.item2.content1') }}</p>
                            </a>
                            <a class="arrow p-2">
                                <img src="../../images/icon/use/arrow.svg" alt="allow" />
                            </a>
                            <a class="step p-2 w-[130px]">
                                <img src="../../images/icon/use/user2.svg" alt />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center"
                                >{{ $t('home.block2.item2.content2') }}</p>
                            </a>
                            <a class="arrow p-2">
                                <img src="../../images/icon/use/arrow.svg" alt="allow" />
                            </a>
                            <a class="step p-2 w-[130px]">
                                <img src="../../images/icon/use/user3.svg" alt />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center"
                                >{{ $t('home.block2.item2.content3') }}</p>
                            </a>
                        </div>
                    </div>
                    <el-row justify="center" class="mt-10">
                        <!-- <el-col :span="24">
                            <p
                                class="text-[16px] leading-[30px] font-[500] text-white text-center"
                            >Start visualising your journey and apply grant</p>
                        </el-col>-->
                        <el-col :span="24" class="flex justify-center">
                            <CustomButton
                                class="bg-black text-white hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[150px] h-[45px] leading-[18.29px] font-[600] text-[15px]"
                                title="Learn more"
                                target="_blank"
                                href="https://hoo.com"
                            />
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <!-- developer/user section ends -->

            <!-- cosmic origin project section start -->

            <el-row :gutter="20" class="mt-20" justify="center">
                <el-col :lg="12">
                    <h2
                        class="text-white text-[40px] mt-5 text-center leading-[48.76px] text-[600] not-italic"
                    >Cosmic Origin Project</h2>
                    <h5
                        class="text-white text-[18px] text-center leading-[30px]"
                    >We provide support to all developers though grants, bonus schemes, technical Support, as well as Media exposure, marketing to grow our ecosystem.</h5>
                </el-col>
            </el-row>

            <!-- cosmic tab section start  -->
            <el-row :gutter="20" justify="center">
                <el-col :span="20">
                    <CustomTabs :tabPosition="left" />
                </el-col>
            </el-row>

            <!-- cosmic tab section ends  -->

            <el-row justify="center" class="mt-10">
                <el-col :span="24">
                    <p
                        class="text-[16px] leading-[30px] font-[500] text-white text-center"
                    >Be part of Cosmic Origin Project.</p>
                </el-col>
                <el-col :span="24" class="flex justify-center">
                    <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[226px] h-[57px]"
                        title="Apply Now"
                        target="_blank"
                        href="https://hoo.com"
                    />
                </el-col>
            </el-row>
            <!-- cosmic origin project section start -->

            <!-- hsc community section start -->
            <el-row class="hsc-community-con mt-20">
                <el-col :span="24" class="mt-[6rem]">
                    <el-row :gutter="20" justify="center ">
                        <el-col :span="24">
                            <h1
                                class="text-white text-[40px] leading-[49px] font-[600] text-center mt-10"
                            >
                                Join our community below
                                <br />& we’ll help you out!
                            </h1>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" justify="center " class="mt-14">
                        <el-col :span="6">
                            <div class="hsc-community-icon-con flex justify-evenly">
                                <!-- <p class="hsc-community-icon-1">
                                    <a href>Website</a>
                                </p>
                                <p class="hsc-community-icon-2">
                                    <a href>Medium</a>
                                </p>-->
                                <p class="hsc-community-icon-5">
                                    <a href>Discord</a>
                                </p>
                                <p class="hsc-community-icon-3">
                                    <a href>Telegram</a>
                                </p>
                                <p class="hsc-community-icon-4">
                                    <a href>Twitter</a>
                                </p>
                            </div>
                            <!-- <el-col :span="4" class="grid-content">1</el-col>
                            <el-col :span="4" class="grid-content">2</el-col>
                            <el-col :span="4" class="grid-content">3</el-col>
                            <el-col :span="4" class="grid-content">4</el-col>
                            <el-col :span="4" class="grid-content">5</el-col>-->
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- hsc community section ends -->

            <!-- Join cosmic section starts -->
            <el-row class="mt-20" justify="center">
                <el-col
                    :span="21"
                    style="background: linear-gradient(271.11deg, #719EE6 -9.09%, #02EAD0 72.29%);"
                >
                    <el-row justify="center" :gutter="10" class="!items-center min-h-[130px]">
                        <el-col :span="14" class="h-32">
                            <div class="grid-content">
                                <h1
                                    class="text-[#12171B] leading-[36.57px] font-[600] text-[30px] mt-[4%] ml-20"
                                >Be part of HMC Project Rewards Programme</h1>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div class="grid-content text-center">
                                <!-- <el-button
                                    type="info"
                                    plain
                                    class="hover:bg-black hover:text-white mt-4 border-black text-black"
                                >Register Now</el-button>-->
                                <a
                                    class="text-[15px] bg-[#12171B] leading-[18px] no-underline font-[600] text-white"
                                    style="box-shadow: 0px 3px 0px rgba(50, 50, 50, 0.37); border-radius: 6px; text-decoration: none !important; padding:12px 25px !important; "
                                    href="https://hoo.com"
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
</script>

<style  lang="scss">
@import '../../sass/common/_var.scss';
/* // just for carousel start */

.el-carousel__container {
    height: 40px;
}
.el-carousel__indicators--horizontal {
    display: none;
}
.el-carousel__item {
    display: flex;
    justify-content: space-evenly;
    // margin-left: 70px;
    // margin-right: 70px;
}
.el-carousel__item h3 {
    /* color: #475669; */
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
}

.el-carousel__item:nth-child(2n + 1) {
    /* background-color: #CBCBCB; */
}
.el-carousel__arrow {
    margin-top: 10px;
    .el-icon {
        color: #cbcbcb;
        font-size: 16px;
        font-weight: bold;
    }
}

.el-carousel__arrow--right {
    margin-right: -30px;
}
.el-carousel__arrow--left {
    margin-left: -30px;
}
/* // just for carousel ends */
</style>


<style lang="scss">
@import '../../sass/common/_var.scss';

.banner-con {
    padding-left: 40px;
    padding-right: 40px;
}
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
        // color: 'inherit' !important;
        .el-link--inner {
            color: rgb(59 130 246 / 0.5) !important;
        }
    }
    &::after {
        text-decoration: none !important;
    }
}
.news-container {
    clip-path: polygon(0px 0px, 100% 0px, 95% 100%, 0% 100%);
    background: #3e8fb9;
    height: 108%;
}

// .home-con {
//     background: url('../../images/banner/main-banner.png') no-repeat left center;
//     background-size: 100%;
//     // &:hover {
//     //     background: url('../images/icon/join/twitter.svg') no-repeat left center;
//     //     background-size: 25px 28px;
//     //     a {
//     //         color: $color-white;
//     //         text-decoration: none;
//     //         margin-left: 5px;
//     //     }
//     //     cursor: pointer;
//     // }
// }
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
    // display: flex;
    // flex-flow: row nowrap;
    // justify-content: space-between;
    // padding: 0 33px;
    // align-items: center;
    a {
        // display: block;
        // text-align: center;
        &.step {
            // width: 160px;
            height: 105px;
            display: flex;
            flex-direction: column;
            align-items: center;

            // border-radius: 10px;
            // padding-top: 40px;

            transition: all 0.3s ease-out;
            // &:hover {
            //     background-color: $color-bg;
            //     box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
            // }
        }
        &.arrow {
            // margin-top: 56px;
            transform: translate(-16px, -70%);
            // img {
            //     width: 26px;
            //     height: 21px;
            // }
        }
        // img {
        //     width: 50px;
        //     height: 50px;
        // }
        // p {
        //     font-size: 16px;
        //     margin-top: 18px;
        //     color: $color-secondary;
        // }
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
                // margin-left: 5px;
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
                // margin-left: 5px;
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
                // margin-left: 5px;
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
                // margin-left: 5px;
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
                // margin-left: 5px;
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
            .desc {
                background: #f9f9f9;
                border-radius: 10px;
                margin-bottom: 0;
                &.desc-1 {
                    padding-left: 10px;
                    padding-right: 10px;
                    margin-bottom: 25px;
                }
                &.desc-2 {
                    padding-left: 10px;
                    padding-right: 10px;
                }
                .desc-con {
                    height: 230px;
                    .title {
                        font-size: 18px;
                        margin-bottom: 0;
                        padding-top: 25px;
                    }
                    .info {
                        font-size: 13px;
                        span {
                            font-size: 30px;
                        }
                        margin-bottom: 10px;
                    }
                    .steps {
                        padding: 0 10px;
                        a {
                            &.step {
                                width: 96px;
                                height: 158px;
                                padding-top: 10px;
                                &:hover {
                                    background-color: transparent;
                                    box-shadow: none;
                                }
                            }
                            &.arrow {
                                margin-top: 26px;
                                img {
                                    width: 20px;
                                    height: 16px;
                                }
                            }
                            img {
                                width: 50px;
                                height: 50px;
                            }
                            p {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
