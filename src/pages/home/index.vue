<template>
    <el-main>
        <div class="home-con">
            <!-- <h1>Dynamic home page loading here!</h1> -->
            <div class="banner-con">
                <el-button
                    type="text"
                    class="uppercase text-[#E2459A] text-[15px] hover:text-[#02ead0] text-lg new-journey"
                >
                    New Journey
                    <span class="border-b-2 border-[#E2459A] w-[25px] ml-2"></span>
                </el-button>
                <h3
                    class="text-[34px] font-[600] leading-[41.45px] text-white"
                >Building an Ecological</h3>
                <h1 class="text-[90px] font-[700] leading-[109.71px] text-white ml-[-4px]">Metaverse</h1>
                <p
                    class="text-[18px] leading-[21.94px] text-white"
                >Providing innovative solutions for growth in world of Blockchains</p>

                <br />
                <br />
                <br />
                <p
                    class="text-[15px] leading-[30px] font-[500] italic text-white"
                >Deploy here and apply for supports</p>
                <CustomButton
                    class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 mr-[30px]"
                    title="Register"
                    target="_blank"
                />

                <el-link
                    class="text-[15px] leading-[19.29px]"
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
            </div>

            <!-- number counter section start  -->

            <el-row :gutter="20" justify="center" class="mt-[70px]">
                <el-col :lg="4" :offset="1">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">181M</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Total value locked (USDT)</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="4">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">25,425</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Number of transactions</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="4">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">126</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">transaction per second</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="4">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">65,098</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Active addresses</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="4">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">27</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Active Projects</h5>
                    </div>
                </el-col>
            </el-row>

            <!-- number counter section ends  -->

            <!-- new and update section start -->
            <el-row class="mt-20" justify="center">
                <el-col :span="21" class="h-[55px] bg-gradient-to-r from-[#559BC8] to-[#2BE5C3]">
                    <el-row justify="center" :gutter="10">
                        <el-col :span="5">
                            <div class="grid-content text-center flex justify-center items-center">
                                <img src="../../images/news/news.svg" class="mt-5" />
                                <h2
                                    class="text-[15px] text-white leading-[24px] mt-5 ml-5"
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

            <!-- Staging section start -->
            <el-row justify="center">
                <!-- first row start -->
                <el-col :span="21" :md="24">
                    <el-row :gutter="20" class="absolute mt-[160px] z-10 text-white">
                        <el-col :span="6" class="mt-[320px] !pl-[15%]">
                            <div class="grid-content w-60">
                                <h4
                                    class="text-[18px] leading-[21.94px] font-[600] mb-4"
                                >Visual Blockchain</h4>
                                <p>All data, interactions on chain will be visualised in a physical way. Allowing a intuitive and unique experience.</p>
                            </div>
                        </el-col>
                        <el-col :span="6" class="!pl-[10%] !mt-[75px]">
                            <div class="grid-content w-65">
                                <h4
                                    class="text-[18px] leading-[21.94px] font-[600] mb-4"
                                >3D Blockchain</h4>
                                <p>Interactions with Defi protocols, NFTs will become 3D representations on chain to be collected and shown off by the metaverse's inhabitants. Communities will inhabit and thrive.</p>
                            </div>
                        </el-col>
                        <el-col :span="6" class="mt-[320px] !pl-[12%]">
                            <div class="grid-content w-60">
                                <h4 class="text-[18px] leading-[21.94px] font-[600] mb-4">Social-Fi</h4>
                                <p>Aligning the interests for the community with Defi, Game-fi, Social-fi together will be a positive sum game for the entire community.</p>
                            </div>
                        </el-col>
                        <el-col :span="6" class="!pl-[3%]">
                            <div class="grid-content w-[18rem]">
                                <h4
                                    class="text-[18px] leading-[21.94px] font-[600] mb-4"
                                >Metaverse Chain</h4>
                                <p>When visualization, blockchain technology and a thriving ecosystem are brought together, HSC will enter the Metaverse phase. Combining VR, wearable devices and bleeding edge technologies to bring immersive, interaction and innovative concepts.</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>

                <!-- first row ends -->
                <!-- second row starts -->
                <el-col :span="21">
                    <el-row justify="center">
                        <el-col :span="24">
                            <div class="grid-content place-items-center">
                                <img
                                    src="../../images/stages/4-stages.png"
                                    alt="4-stages-image.png"
                                />
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- second row ends -->

                <!-- third row start -->

                <el-col :span="21">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple"></div>
                        </el-col>
                    </el-row>
                </el-col>
                <!-- third row ends -->
            </el-row>
            <!-- Staging section ends -->
        </div>
    </el-main>
</template>
<script setup>
import CustomButton from '../../components/CustomButton.vue';
import { ArrowRight } from '@element-plus/icons-vue';
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
        // color: 'inherit' !important;
        .el-link--inner {
            color: rgb(59 130 246 / 0.5) !important;
        }
    }
    &::after {
        text-decoration: none !important;
    }
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
</style>
