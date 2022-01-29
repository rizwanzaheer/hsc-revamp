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

            <!-- <el-row>
                <el-col :span="24" :gutter="20">
                    <div class="grid-content bg-purple-dark">tetsdfad</div>
                </el-col>
            </el-row>-->
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
</style>