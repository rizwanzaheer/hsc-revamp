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
                <el-col :lg="3" :offset="1">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">181M</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Total value locked (USDT)</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="3">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">25,425</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Number of transactions</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="3">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">126</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">transaction per second</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="3">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">65,098</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Active addresses</h5>
                    </div>
                </el-col>
                <span class="border-l-2 border-white w-[25px] h-[25px] ml-2 mt-[25px]"></span>
                <el-col :lg="3">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px]">27</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase">Active Projects</h5>
                    </div>
                </el-col>
            </el-row>

            <!-- number counter section ends  -->

            <!-- new and update section start -->
            <el-row :gutter="20" justify="center">
                <el-col :lg="16" class="h-[55px] bg-gradient-to-r from-[#559BC8] to-[#2BE5C3]">
                    <el-col :lg="6" :md="12">
                        <div class="grid-content">
                            <h2 class="text-[15px] text-white leading-[24px] mt-5">News & Update:</h2>
                        </div>
                    </el-col>
                    <el-col :lg="15">
                        <div class="grid-content">
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
                    <el-col :lg="3" justify="center">
                        <div class="grid-content">
                            <el-button
                                type="info"
                                plain
                                class="hover:bg-black hover:text-white mt-4 ml-[70px] border-black text-black"
                            >See more news</el-button>
                        </div>
                    </el-col>
                </el-col>
            </el-row>
            <!-- new and update section ends -->

            <!-- Infinite Innovation section start -->

            <el-row :gutter="20">
                <el-col :lg="24" justify="center">
                    <h1 class="text-white text-[40px] mt-5 text-center">Infinite Innovation</h1>>
                    <h1
                        class="text-white text-[18px] mt-5 text-center"
                    >Our vision for a vertically integrated blockchain ecosystem will take place in four stages</h1>>
                </el-col>
            </el-row>
            <!-- Infinite Innovation section start -->
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
