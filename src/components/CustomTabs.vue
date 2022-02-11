<template>
    <el-tabs class="custom-tabs" :tabPosition="currentTabPosition" :stretch="true">
        <!-- tab 1 start -->
        <el-tab-pane>
            <template #label>
                <div class="flex justify-center items-center custom-tab-container">
                    <h1 class="w-[100%] md:w-[70%] text-left">
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
                    <h1
                        class="text-white text-[19px] font-[600] leading-[23px]"
                    >Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Net TVL</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">
                        <!-- {{tvlValue}}M and -->
                        {{typeof marks[tvlValue] === 'string' ? marks[tvlValue] : marks[tvlValue].label}}
                    </h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="tvlValue"
                            :marks="tvlMarks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                            step="20"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :span="8">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Basic Grants</h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]">
                        <!-- 10K -->
                        {{tvlMarksBasicGrants[typeof marks[tvlValue] === 'string' ? marks[tvlValue] : marks[tvlValue].label]}}
                    </h2>
                </el-col>
                <el-col :span="16">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Monthly continuous Rewards</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{tvlMarksMonthlyRewards[typeof marks[tvlValue] === 'string' ? marks[tvlValue] : marks[tvlValue].label]}}</h2>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[12px] leading-[20px] mt-[20px] underline text-right underline-offset-2 cursor-pointer"
                        native-type="button"
                        @click="$router.push({name: 'LandingPage'})"
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
                    <h1
                        class="text-white text-[19px] font-[600] leading-[23px]"
                    >Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Real transaction volume (Monthly)</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{typeof volumeBonusMarks[volumeBonusValue] === 'string' ? volumeBonusMarks[volumeBonusValue] : volumeBonusMarks[volumeBonusValue].label}}</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="volumeBonusValue"
                            :marks="volumeBonusMarks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                            :step="20"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :span="8">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Reward coefficient: X</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >x {{volumeBonusRewardCoefficientX[typeof volumeBonusMarks[volumeBonusValue] === 'string' ? volumeBonusMarks[volumeBonusValue] : volumeBonusMarks[volumeBonusValue].label]}}</h2>
                </el-col>
                <el-col :span="7">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Reward Bonus A</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{volumeBonusRewardsBonusA[typeof volumeBonusMarks[volumeBonusValue] === 'string' ? volumeBonusMarks[volumeBonusValue] : volumeBonusMarks[volumeBonusValue].label]}}</h2>
                </el-col>
                <el-col :span="9">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Rewards Bonus B</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{volumeBonusRewardsBonusB[typeof volumeBonusMarks[volumeBonusValue] === 'string' ? volumeBonusMarks[volumeBonusValue] : volumeBonusMarks[volumeBonusValue].label]}}</h2>
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
                    <h1
                        class="text-white text-[19px] font-[600] leading-[23px]"
                    >Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Requirement 1：Net inflow</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label}}</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="capitalHubValue"
                            :marks="capitalHubMarks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                            :step="33"
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
                    >{{capitalHubRequireStandardMonthlyVolume[typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label]}}</h2>
                </el-col>
                <el-col :span="7">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Monthly Rewards</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] uppercase"
                    >{{capitalHubMonthlyRewards[typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label]}}</h2>
                </el-col>
                <el-col :span="9">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >HSC capital allocation</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] uppercase"
                    >{{capitalHubCapitalAllocation[typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label]}}</h2>
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
                    <h1
                        class="text-white text-[19px] font-[600] leading-[23px]"
                    >Estimate your rewards</h1>
                </el-col>
                <el-col :span="24">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px]"
                    >Staking number</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{typeof stakeHooBonusMarks[stakeHooBonusValue] === 'string' ? stakeHooBonusMarks[stakeHooBonusValue] : stakeHooBonusMarks[stakeHooBonusValue].label}}</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider
                            v-model="stakeHooBonusValue"
                            :marks="stakeHooBonusMarks"
                            :show-tooltip="false"
                            height="24"
                            size="large"
                            step="20"
                        ></el-slider>
                    </div>
                </el-col>
                <el-col :span="8">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Reward coefficient: y</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >x {{stakeHooBonusRewardCoefficientY[typeof stakeHooBonusMarks[stakeHooBonusValue] === 'string' ? stakeHooBonusMarks[stakeHooBonusValue] : stakeHooBonusMarks[stakeHooBonusValue].label]}}</h2>
                </el-col>
                <el-col :span="7">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Standard Staking Bonus</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{stakeHooBonusStandard[typeof stakeHooBonusMarks[stakeHooBonusValue] === 'string' ? stakeHooBonusMarks[stakeHooBonusValue] : stakeHooBonusMarks[stakeHooBonusValue].label]}}</h2>
                </el-col>
                <el-col :span="9">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase"
                    >Monthly Staking Bonus</h6>
                    <h2
                        class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600]"
                    >{{stakeHooBonusMonthlyStakingBonus[typeof stakeHooBonusMarks[stakeHooBonusValue] === 'string' ? stakeHooBonusMarks[stakeHooBonusValue] : stakeHooBonusMarks[stakeHooBonusValue].label]}}</h2>
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
import { defineProps, toRefs, ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import type { CSSProperties } from 'vue';
import { Calendar, ArrowRight } from '@element-plus/icons-vue';
const props = defineProps({
    tabPosition: String,
});
const { tabPosition } = toRefs(props);
let currentTabPosition = ref('left');
let curWidth = ref(0);
let curHeight = ref(0);

onMounted(() => {
    window.addEventListener('resize', resizeHandler);
});
function resizeHandler() {
    console.log('resizeHandler is calling: ');
    curHeight.value = window.innerHeight;
    curWidth.value = window.innerWidth;
    console.log('curHeight.value is calling: ', curHeight.value);
    console.log('curWidth.value is calling: ', curWidth.value);
    if ((curHeight.value || curWidth.value) < 900) {
        currentTabPosition.value = 'top';
    } else currentTabPosition.value = 'left';
}

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
});

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
// tvl section start here
const tvlValue = ref(0);
const tvlMarks = reactive<Marks>({
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
const tvlMarksBasicGrants = reactive<Marks>({
    '0': '0',
    '1M': '10K',
    '5M': '20K',
    '10M': '50K',
    '50M': '200K',
    '100M': '400K',
});
const tvlMarksMonthlyRewards = reactive<Marks>({
    '0': '0',
    '1M': '4K',
    '5M': '10K',
    '10M': '20K',
    '50M': '80K',
    '100M': '150K',
});
// tvl section start here

// Volume bonus section start here
const volumeBonusValue = ref(0);
const volumeBonusMarks = reactive<Marks>({
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
const volumeBonusRewardCoefficientX = reactive<Marks>({
    '0': '0',
    '1M': '0.1',
    '5M': '0.3',
    '10M': '0.5',
    '50M': '1',
    '100M': '2',
});
const volumeBonusRewardsBonusA = reactive<Marks>({
    '0': '0',
    '1M': '1K',
    '5M': '6K',
    '10M': '25K',
    '50M': '200K',
    '100M': '800K',
});
const volumeBonusRewardsBonusB = reactive<Marks>({
    '0': '0',
    '1M': '400',
    '5M': '3K',
    '10M': '10K',
    '50M': '80K',
    '100M': '300K',
});
// Volume bonus section ends here

// capital hub section start here
const capitalHubValue = ref(0);
const capitalHubMarks = reactive<Marks>({
    0: '0',
    33: '200k',
    66: '400k',
    99: {
        style: {
            color: '#C1C9D2',
        },
        label: '1M',
    },
});
const capitalHubRequireStandardMonthlyVolume = reactive<Marks>({
    '0': '0',
    '200k': '1M',
    '400k': '2M',
    '1M': '5M',
});
const capitalHubMonthlyRewards = reactive<Marks>({
    '0': '0',
    '200k': '1960',
    '400k': '4200',
    '1M': '11200',
});
const capitalHubCapitalAllocation = reactive<Marks>({
    '0': '0',
    '200k': '50k',
    '400k': '100k',
    '1M': '200k',
});
// Volume bonus section ends here

// Stake Hoo Bonus section start here
const stakeHooBonusValue = ref(0);
const stakeHooBonusMarks = reactive<Marks>({
    0: '0',
    20: '100K',
    40: '500K',
    60: '1M',
    80: {
        style: {
            color: '#C1C9D2',
        },
        label: '2M',
    },
    100: {
        style: {
            color: '#C1C9D2',
        },
        label: '5M',
    },
});
const stakeHooBonusRewardCoefficientY = reactive<Marks>({
    '0': '0',
    '100K': '0.1',
    '500K': '0.2',
    '1M': '0.3',
    '2M': '0.5',
    '5M': '1',
});
const stakeHooBonusStandard = reactive<Marks>({
    '0': '0',
    '100K': '1K',
    '500K': '4K',
    '1M': '15K',
    '2M': '100K',
    '5M': '400K',
});
const stakeHooBonusMonthlyStakingBonus = reactive<Marks>({
    '0': '0',
    '100K': '400',
    '500K': '2K',
    '1M': '6K',
    '2M': '40K',
    '5M': '150K',
});
// stake Hoo Bonus section start here
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
        border: none;
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


<style lang="scss">
@import '../sass/common/_var.scss';
@media (max-width: 1000px) {
    .custom-tabs {
        .el-tabs__header,
        .el-tabs__nav-wrap,
        .el-tabs__nav-scroll,
        .el-tabs__nav {
            height: 100px;
            min-height: 100px;
            max-height: 101px;
        }
        .el-tabs__item {
            height: calc(100% - 10px);
            color: #a6a6a6;
            width: 140px;
            padding-left: 0px;
            // background-color: $tabs-bg-color;
        }
        .el-tabs__nav-prev,
        .el-tabs__nav-next {
            top: 30%;
        }
    }
    .custom-tabs > .el-tabs__content {
        padding: 32px;
        /* background-color: #f4f5f7; */
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
        height: 420px;
        min-height: 420px;
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
        .el-icon {
            display: none;
        }
    }
}
</style>
