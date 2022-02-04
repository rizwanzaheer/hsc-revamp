<template>
    <el-tabs class="custom-tabs" tabPosition="left" :stretch="true">
        <!-- tab 1 start -->
        <el-tab-pane>
            <template #label>
                <div class="flex justify-center items-center custom-tab-container">
                    <h1 class="w-[60%] text-left">
                        TVL Basic
                        <br />rewards plan
                        <br />
                        <span>All projects</span>
                    </h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                    <!-- <span>Route</span> -->
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[12%]">
                <el-col :span="24">
                    <h1 class="text-white">Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Net TVL</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">1M</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="value"
                            :marks="marks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :span="8">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Basic Grants</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">10K</h2>
                </el-col>
                <el-col :span="16">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Monthly continuous Rewards</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">4K</h2>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[12px] leading-[20px] mt-[20px] underline text-right underline-offset-2"
                    >
                        *In USDT — maintain at least 1 month
                        <span
                            style="transform: translateY(3px);
                            display: inline-block;
                            font-size: 12px;"
                        >
                            <el-icon>
                                <arrow-right />
                            </el-icon>
                        </span>
                    </h6>
                    <!-- <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">4K</h2> -->
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 1 ends -->
        <!-- tab 2 start -->
        <el-tab-pane>
            <template #label>
                <div class="flex justify-center items-center custom-tab-container">
                    <h1 class="w-[60%] text-left">
                        Volume bonus
                        <br />
                        <span>GameFi, NFT</span>
                    </h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                    <!-- <span>Route</span> -->
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[12%]">
                <el-col :span="24">
                    <h1 class="text-white">Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Real transaction volume (Monthly)</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">1M</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="value"
                            :marks="marks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :span="8">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Reward coefficient: X</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">x 0.1</h2>
                </el-col>
                <el-col :span="7">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Reward Bonus A</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">1K</h2>
                </el-col>
                <el-col :span="9">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Rewards Bonus B</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">400</h2>
                </el-col>
                <el-col :span="24">
                    <h6 class="text-white text-[12px] leading-[20px] mt-[20px] text-right">
                        *In USDT
                        <!-- <el-icon>
                            <arrow-right />
                        </el-icon>-->
                    </h6>
                    <!-- <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">4K</h2> -->
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 2 ends -->
        <!-- tab 3 start -->
        <el-tab-pane>
            <template #label>
                <div class="flex justify-center items-center custom-tab-container">
                    <h1 class="w-[60%] text-left">
                        Capital Hub
                        <br />Rewards Plan
                        <br />
                        <span>Cross-chain Projects</span>
                    </h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                    <!-- <span>Route</span> -->
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[12%]">
                <el-col :span="24">
                    <h1 class="text-white">Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Requirement 1：Net inflow</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">22k</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="value"
                            :marks="marks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :span="8">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >
                        Requirement 2：
                        <br />Standards monthly
                        <br />trading volume
                    </h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] uppercase"
                    >10K</h2>
                </el-col>
                <el-col :span="7">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Monthly Rewards</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] uppercase"
                    >1960</h2>
                </el-col>
                <el-col :span="9">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >HSC capital allocation</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] uppercase"
                    >50K</h2>
                </el-col>
                <el-col :span="24">
                    <h6 class="text-white text-[12px] leading-[20px] mt-[0px] text-right">
                        *In USDT
                        <!-- <el-icon>
                            <arrow-right />
                        </el-icon>-->
                    </h6>
                    <!-- <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">4K</h2> -->
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 3 ends -->
        <!-- tab 4 start -->
        <el-tab-pane>
            <template #label>
                <div class="flex justify-center items-center custom-tab-container">
                    <h1 class="w-[60%] text-left">
                        HOO Bonus
                        <!-- <br />Rewards Plan -->
                        <br />
                        <span>Stake HOO to get Bonus</span>
                    </h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                    <!-- <span>Route</span> -->
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[12%]">
                <el-col :span="24">
                    <h1 class="text-white">Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Staking number</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">100k</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="value"
                            :marks="marks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :span="8">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Reward coefficient: y</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">x 0.1</h2>
                </el-col>
                <el-col :span="7">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Standard Staking Bonus</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">1K</h2>
                </el-col>
                <el-col :span="9">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Monthly Staking Bonus</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">400</h2>
                </el-col>
                <el-col :span="24">
                    <h6 class="text-white text-[12px] leading-[20px] mt-[20px] text-right">
                        *In USDT
                        <!-- <el-icon>
                            <arrow-right />
                        </el-icon>-->
                    </h6>
                    <!-- <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">4K</h2> -->
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 4 ends -->
        <!-- <el-tab-pane label="`TVL Basic rewards plan <br />All projects`">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane :label="`TVL Basic rewards plan <br />All projects`">Task</el-tab-pane>-->
    </el-tabs>
</template>

<script  lang="ts" setup>
import { defineProps, toRefs, ref, reactive } from 'vue';
import type { CSSProperties } from 'vue';
import { Calendar, ArrowRight } from '@element-plus/icons-vue';
const props = defineProps({
    tabPosition: String,
});
const { tabPosition } = toRefs(props);

console.log('props are : ', tabPosition);

// for slider section
interface Mark {
    style: CSSProperties;
    label: string;
}

type Marks = Record<number, Mark | string>;

const value = ref([30, 60]);
const marks = reactive<Marks>({
    0: '0',
    20: '1M',
    40: '5M',
    60: '10M',
    80: {
        style: {
            color: '#C1C9D2',
        },
        label: '50M',
    },
    100: {
        style: {
            color: '#C1C9D2',
        },
        label: '100M',
    },
});
</script>
<style  lang="scss">
@import '../sass/common/_var.scss';
:root {
    --el-color-primary: var($color-primary);
}
.custom-slider-container {
    display: flex;
    align-items: center;
}
.custom-slider-container .el-slider {
    margin-top: 0;
    margin-left: 12px;
}
.el-slider__bar {
    background-color: $color-primary;
    // --el-slider-main-bg-color: $color-primary !important;
    height: 23px;
    width: 35px;
    border-radius: 20px;
}
.el-slider__runway {
    height: 23px;
    background: rgba(1, 1, 1, 0.31);
    border-radius: 20px;
}
.el-slider__button-wrapper {
    transform: translate(-50%, 12%);
    .el-slider__button {
        height: 35px;
        width: 35px;
    }
}
.el-slider__marks-text {
    margin-top: 50px;
}
.el-slider__marks-stop {
    background-color: transparent;
}
</style>

<style lang="scss">
@import '../sass/common/_var.scss';
.custom-tabs {
    /* height: 387px;
    min-height: 387px; */

    background: linear-gradient(269.98deg, rgba(50, 70, 86, 0.3) 0.71%, rgba(110, 105, 119, 0.012) 99.98%);
    box-shadow: 0px 14px 25px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    /* border-color: transparent; */
    .el-tabs__header,
    .el-tabs__nav-wrap,
    .el-tabs__nav-scroll,
    .el-tabs__nav {
        height: 387px;
        min-height: 387px;
    }
    // .el-tabs__nav {
    //     background: $tabs-bg-color;
    // }

    .el-tabs__item {
        height: 97px;
        color: #a6a6a6;
        width: 316px;
        // background-color: $tabs-bg-color;
    }
    .is-active {
        color: $color-primary;
        .el-icon {
            visibility: hidden;
        }
        // background-color: transparent !important;
        &::after {
            content: '';
            position: absolute;
            top: 100%;
            width: 100%;
            left: 0;
            height: 3px;
            border-radius: 2px;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom-left-radius: 2px;
            background: linear-gradient(270deg, #02ead0 0%, rgba(2, 234, 208, 0) 100%);
        }
    }
    .el-tabs__active-bar {
        visibility: hidden;
    }
    .el-tabs__nav-scroll,
    .el-tabs__nav,
    .el-tabs__nav-wrap {
        &::after {
            background-color: transparent !important;
        }
    }
}
.custom-tabs > .el-tabs__content {
    padding: 32px;
    /* background-color: #f4f5f7; */
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    height: 387px;
    min-height: 387px;
}
.custom-tab-container {
    padding: 20px 10px;
    h1 {
        font-size: 16px;
        line-height: 19.5px;
        font-weight: 600;
        span {
            font-size: 12px;
            line-height: 14.64px;
            font-weight: 400;
        }
    }
}
</style>