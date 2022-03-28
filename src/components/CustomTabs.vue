<template>
    <el-tabs class="custom-tabs" v-model="activeName" :tabPosition="currentTabPosition" :stretch="true">
        <!-- tab 1 start -->
        <el-tab-pane name="first">
            <template #label>
                <div class="flex items-center custom-tab-container">
                    <h1 class="w-[100%] md:w-[70%] text-left" v-html="$t('home.priceCalculator.tabOne.Title')"></h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[0%] md:pl-[5%]">
                <el-col :span="24">
                    <h1 class="text-white text-[19px] font-[600] leading-[23px]" v-html="$t('home.priceCalculator.sectionOne.Title')"></h1>
                </el-col>
                <el-col :span="24">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px] tracking-wider" v-html="$t('home.priceCalculator.sectionOne.calcTitle')"></h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] tracking-wider">{{ tvlMarks[tvlValue] }}</h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider v-model="tvlValue" :marks="tvlMarks" :show-tooltip="false" height="24" size="large" step="20"></el-slider>
                    </div>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8">
                    <h6
                        class="text-white text-[12px] leading-[15px] md:text-[14px] md:leading-[17.07px] font-[600] mt-[70px] uppercase tracking-wider"
                        v-html="$t('home.priceCalculator.sectionOne.footerTitleOne')"
                    ></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">
                        <!-- 10K -->
                        {{ tvlMarksBasicGrants[tvlValue] }}
                    </h2>
                </el-col>
                <el-col :xs="24" :sm="24" :md="16">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-5 md:mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionOne.footerTitleTwo')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">
                        {{ tvlMarksMonthlyRewards[tvlValue] }}
                    </h2>
                </el-col>
                <el-col class="text-left md:text-right" :span="24">
                    <a :href="`${isExternal ? 'landing-page/#tvl' : '#tvl'}`" class="text-white text-[12px] leading-[20px] mt-[20px] underline text-left md:text-right underline-offset-2 cursor-pointer" native-type="button">
                        *Maintain at least 1 month
                        <!-- <span style="transform: translateY(3px); display: inline-block; font-size: 12px">
                            <el-icon>
                                <arrow-right />
                            </el-icon>
                        </span> -->
                    </a>
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 1 ends -->

        <!-- tab 2 start -->
        <el-tab-pane name="second">
            <template #label>
                <div class="flex items-center custom-tab-container">
                    <h1 class="w-[100%] md:w-[70%] text-left" v-html="$t('home.priceCalculator.tabTwo.Title')"></h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[0%] md:pl-[5%]">
                <el-col :span="24">
                    <h1 class="text-white text-[19px] font-[600] leading-[23px]" v-html="$t('home.priceCalculator.sectionTwo.Title')"></h1>
                </el-col>

                <!-- RTV SLIDER -->
                <el-col :span="24">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px] tracking-wider" v-html="$t('home.priceCalculator.sectionTwo.calcTitle')"></h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] tracking-wider">
                        {{ volumeBonusMarks[volumeBonusValue] }}
                    </h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider v-model="volumeBonusValue" :marks="volumeBonusMarks" :show-tooltip="false" height="24" size="large" :step="20"></el-slider>
                    </div>
                </el-col>
                <!-- RTV SLIDER -->

                <!-- TVL SLIDER -->
                <el-col class="mt-10" :span="24">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px] tracking-wider" v-html="$t('home.priceCalculator.sectionTwo.calcTitleTwo')"></h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] tracking-wider">
                        {{ tvlMarks[tvlValue] }}
                    </h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider v-model="tvlValue" :marks="tvlMarks" :show-tooltip="false" height="24" size="large" :step="20"></el-slider>
                    </div>
                </el-col>
                <!-- TVL SLIDER -->

                <el-col :xs="24" :sm="24" :md="8">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionTwo.footerTitleOne')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">x {{ volumeBonusRewardCoefficientX[volumeBonusValue] }}</h2>
                </el-col>
                <el-col :xs="24" :sm="24" :md="7">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-5 md:mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionTwo.footerTitleTwo')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">
                        {{ volumeBonusRewards.a }}
                    </h2>
                </el-col>
                <el-col :xs="24" :sm="24" :md="9">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-5 md:mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionTwo.footerTitleThree')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">
                        {{ volumeBonusRewards.b }}
                    </h2>
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 2 ends -->

        <!-- tab 3 start -->
        <el-tab-pane name="third">
            <template #label>
                <div class="flex items-center custom-tab-container">
                    <h1 class="w-[100%] md:w-[70%] text-left" v-html="$t('home.priceCalculator.tabThree.Title')"></h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[0%] md:pl-[5%]">
                <el-col :span="24">
                    <h1 class="text-white text-[19px] font-[600] leading-[23px]" v-html="$t('home.priceCalculator.sectionThree.Title')"></h1>
                </el-col>

                <!-- STAKE HOO SLIDER -->
                <el-col :span="24">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px] tracking-wider" v-html="$t('home.priceCalculator.sectionThree.calcTitle')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">
                        {{ stakeHooBonusMarks[stakeHooBonusValue] }}
                    </h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider v-model="stakeHooBonusValue" :marks="stakeHooBonusMarks" :show-tooltip="false" height="24" size="large" step="20"></el-slider>
                    </div>
                </el-col>
                <!-- STAKE HOO SLIDER -->

                <!-- TVL SLIDER -->
                <el-col class="mt-10" :span="24">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px] tracking-wider" v-html="$t('home.priceCalculator.sectionTwo.calcTitleTwo')"></h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] tracking-wider">
                        {{ tvlMarks[tvlValue] }}
                    </h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider v-model="tvlValue" :marks="tvlMarks" :show-tooltip="false" height="24" size="large" :step="20"></el-slider>
                    </div>
                </el-col>
                <!-- TVL SLIDER -->

                <el-col :xs="24" :sm="24" :md="8">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionThree.footerTitleOne')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">x {{ stakeHooBonusRewardCoefficientY[stakeHooBonusValue] }}</h2>
                </el-col>

                <el-col :xs="24" :sm="24" :md="7">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-5 md:mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionThree.footerTitleTwo')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">
                        {{ stakeHooBonusRewards.a }}
                    </h2>
                </el-col>

                <el-col :xs="24" :sm="24" :md="9">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-5 md:mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionThree.footerTitleThree')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] tracking-wider">
                        {{ stakeHooBonusRewards.b }}
                    </h2>
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 3 ends -->

        <!-- tab 4 start -->
        <el-tab-pane name="fourth">
            <template #label>
                <div class="flex items-center custom-tab-container">
                    <h1 class="w-[100%] md:w-[70%] text-left" v-html="$t('home.priceCalculator.tabFour.Title')"></h1>
                    <el-icon>
                        <arrow-right />
                    </el-icon>
                </div>
            </template>
            <!-- content section starts -->
            <el-row :gutter="60" class="pl-[0%] md:pl-[5%]">
                <el-col :span="24">
                    <h1 class="text-white text-[19px] font-[600] leading-[23px]" v-html="$t('home.priceCalculator.sectionFour.Title')"></h1>
                </el-col>
                <el-col :span="24">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[40px] tracking-wider" v-html="$t('home.priceCalculator.sectionFour.calcTitle')"></h6>
                    <h2 class="text-[#02EAD0] text-[22px] leading-[26.82px] font-[600] tracking-wider">
                        {{ typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label }}
                    </h2>
                </el-col>
                <el-col :span="24">
                    <div class="custom-slider-container pr-[12%]">
                        <el-slider v-model="capitalHubValue" :marks="capitalHubMarks" :show-tooltip="false" height="24" size="large" :step="33"></el-slider>
                    </div>
                </el-col>
                <el-col :sm="24" :xs="24" :md="8">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionFour.footerTitleOne')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] uppercase tracking-wider">
                        {{ capitalHubRequireStandardMonthlyVolume[typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label] }}
                    </h2>
                </el-col>
                <el-col :sm="24" :xs="24" :md="7">
                    <h6 class="text-white text-[14px] leading-[17.07px] font-[600] mt-5 md:mt-[70px] uppercase tracking-wider" v-html="$t('home.priceCalculator.sectionFour.footerTitleTwo')"></h6>
                    <h2 class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] uppercase tracking-wider">
                        {{ capitalHubMonthlyRewards[typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label] }}
                    </h2>
                </el-col>
                <!-- <el-col :sm="24" :xs="24" :md="9">
                    <h6
                        class="text-white text-[14px] leading-[17.07px] font-[600] mt-2 md:mt-[70px] uppercase tracking-wider"
                        v-html="$t('home.priceCalculator.sectionThree.footerTitleThree')"
                    ></h6>
                    <h2
                        class="text-[#02EAD0] text-[20px] leading-[24px] md:text-[22px] md:leading-[26.82px] font-[600] uppercase tracking-wider"
                    >{{capitalHubCapitalAllocation[typeof capitalHubMarks[capitalHubValue] === 'string' ? capitalHubMarks[capitalHubValue] : capitalHubMarks[capitalHubValue].label]}}</h2>
                </el-col> -->
                <!-- <el-col class="text-left md:text-right" :sm="24" :xs="24" :md="24">
                    <a class="text-white text-[12px] leading-[20px] mt-[20px] text-left md:text-right tracking-wider">*Maintain at least 1 month</a>
                </el-col> -->

                <el-col class="text-left md:text-right" :span="24">
                    <a :href="`${isExternal ? 'landing-page/#cross-chain' : '#cross-chain'}`" class="text-white text-[12px] leading-[20px] mt-[20px] underline text-left md:text-right underline-offset-2 cursor-pointer" native-type="button">
                        *Maintain at least 1 month
                        <!-- <span style="transform: translateY(3px); display: inline-block; font-size: 12px">
                            <el-icon>
                                <arrow-right />
                            </el-icon>
                        </span> -->
                    </a>
                </el-col>
            </el-row>
            <!-- content section ends -->
        </el-tab-pane>
        <!-- tab 4 ends -->
    </el-tabs>
</template>

<script lang="ts" setup>
import { defineProps, toRefs, ref, reactive, onMounted, onBeforeUnmount, watch, watchEffect } from 'vue';
import type { CSSProperties } from 'vue';
import { Calendar, ArrowRight } from '@element-plus/icons-vue';
const props = defineProps({
    tabPosition: String,
    isExternal: Boolean,
    onTabChange: {
        type: Function,
        default: (data: String): String => data,
    },
});
const { tabPosition, onTabChange } = toRefs(props);

const activeName = ref('first');

let currentTabPosition = ref('left');
let curWidth = ref(0);
let curHeight = ref(0);

onMounted(() => {
    if (window.innerWidth <= 1000) {
        currentTabPosition.value = 'top';
    }

    window.addEventListener('resize', resizeHandler);
});

watch(activeName, () => {
    onTabChange.value(activeName.value);
});

function resizeHandler() {
    curHeight.value = window.innerHeight;
    curWidth.value = window.innerWidth;
    if (
        curWidth.value <= 950
        // curHeight.value < 950 ||
    ) {
        console.log('in if');
        currentTabPosition.value = 'top';
    } else currentTabPosition.value = 'left';
}

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
});

// for slider section
interface Mark {
    style?: CSSProperties;
    label?: string;
}

type Marks = Record<number, Mark | string>;

// tvl section start here
const tvlValue = ref(0);
const tvlMarks = reactive<Marks>({
    0: '0',
    20: '1M',
    40: '5M',
    60: '10M',
    80: '50M',
    100: '100M',
});
const tvlMarksBasicGrants = reactive<Marks>({
    0: '0',
    20: '10K',
    40: '20K',
    60: '50K',
    80: '200K',
    100: '400K',
});
const tvlMarksMonthlyRewards = reactive<Marks>({
    0: '0',
    20: '4K',
    40: '10K',
    60: '20K',
    80: '80K',
    100: '150K',
});
// tvl section ends here

// Volume bonus section start here
const volumeBonusValue = ref(0);
const volumeBonusRewards = ref({
    a: 0,
    b: 0,
});
const volumeBonusMarks = {
    0: '0',
    20: '1M',
    40: '5M',
    60: '10M',
    80: '50M',
    100: '100M',
};
const volumeBonusRewardCoefficientX = {
    0: 0,
    20: 0.1,
    40: 0.3,
    60: 0.5,
    80: 1,
    100: 2,
};
const volumeBonusTvlRewards = {
    20: {
        20: { a: '1K', b: '400' },
        40: { a: '2K', b: '1K' },
        60: { a: '5K', b: '2K' },
        80: { a: '20K', b: '8K' },
        100: { a: '40K', b: '15K' },
    },
    40: {
        20: { a: '3K', b: '1.2K' },
        40: { a: '6K', b: '3K' },
        60: { a: '15K', b: '6K' },
        80: { a: '60K', b: '24K' },
        100: { a: '120K', b: '45K' },
    },
    60: {
        20: { a: '5K', b: '2K' },
        40: { a: '10K', b: '5K' },
        60: { a: '25K', b: '10K' },
        80: { a: '100K', b: '40K' },
        100: { a: '200K', b: '75K' },
    },
    80: {
        20: { a: '10K', b: '4K' },
        40: { a: '20K', b: '10K' },
        60: { a: '50K', b: '20K' },
        80: { a: '200K', b: '80K' },
        100: { a: '400K', b: '150K' },
    },
    100: {
        20: { a: '20K', b: '8K' },
        40: { a: '40K', b: '20K' },
        60: { a: '100K', b: '40K' },
        80: { a: '400K', b: '160K' },
        100: { a: '800K', b: '300K' },
    },
};
watch([volumeBonusValue, tvlValue], ([volumeBonusValueNew, tvlValueNew]) => {
    if (volumeBonusValueNew !== 0 && tvlValueNew !== 0) {
        volumeBonusRewards.value = volumeBonusTvlRewards[volumeBonusValueNew][tvlValueNew];
    } else {
        volumeBonusRewards.value = {
            a: 0,
            b: 0,
        };
    }
});
// Volume bonus section ends here

// Stake Hoo Bonus section start here
const stakeHooBonusValue = ref(0);
const stakeHooBonusRewards = ref({
    a: 0,
    b: 0,
});
const stakeHooBonusMarks = {
    0: '0',
    20: '100K',
    40: '500K',
    60: '1M',
    80: '2M',
    100: '5M',
};
const stakeHooBonusRewardCoefficientY = {
    0: '0',
    20: '0.1',
    40: '0.2',
    60: '0.3',
    80: '0.5',
    100: '1',
};
const stakeHooBonusTvlRewards = {
    20: {
        20: { a: '1K', b: '400' },
        40: { a: '2K', b: '1K' },
        60: { a: '5K', b: '2K' },
        80: { a: '20K', b: '8K' },
        100: { a: '40K', b: '15K' },
    },
    40: {
        20: { a: '2K', b: '800' },
        40: { a: '4K', b: '2K' },
        60: { a: '10K', b: '4K' },
        80: { a: '40K', b: '16K' },
        100: { a: '80K', b: '30K' },
    },
    60: {
        20: { a: '3K', b: '1.2K' },
        40: { a: '6K', b: '3K' },
        60: { a: '15K', b: '6K' },
        80: { a: '60K', b: '24K' },
        100: { a: '120K', b: '45K' },
    },
    80: {
        20: { a: '5K', b: '2K' },
        40: { a: '10K', b: '5K' },
        60: { a: '25K', b: '10K' },
        80: { a: '100K', b: '40K' },
        100: { a: '200K', b: '75K' },
    },
    100: {
        20: { a: '10K', b: '4K' },
        40: { a: '20K', b: '10K' },
        60: { a: '50K', b: '20K' },
        80: { a: '200K', b: '80K' },
        100: { a: '400K', b: '150K' },
    },
};
watch([stakeHooBonusValue, tvlValue], ([stakeHooBonusValueNew, tvlValueNew]) => {
    if (stakeHooBonusValueNew !== 0 && tvlValueNew !== 0) {
        stakeHooBonusRewards.value = stakeHooBonusTvlRewards[stakeHooBonusValueNew][tvlValueNew];
    } else {
        stakeHooBonusRewards.value = {
            a: 0,
            b: 0,
        };
    }
});
// stake Hoo Bonus section start here

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
    '200k': '2000',
    '400k': '3000',
    '1M': '4000',
});
const capitalHubCapitalAllocation = reactive<Marks>({
    '0': '0',
    '200k': '50k',
    '400k': '100k',
    '1M': '200k',
});
// Volume bonus section ends here

function resetTabValues() {
    tvlValue.value = 0;
}
</script>
<style lang="scss">
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

    // background: linear-gradient(269.98deg, rgba(50, 70, 86, 0.3) 0.71%, rgba(110, 105, 119, 0.012) 99.98%);

    background: linear-gradient(269.98deg, rgba(50, 70, 86, 0.5) 100%, rgba(110, 105, 119, 0.012) 99.98%);

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
    // height: 387px;
    // min-height: 387px;
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
            top: 0;
            bottom: 0;
            font-size: 2rem;
            .el-icon {
                top: 30%;
            }
        }
    }
    .custom-tabs > .el-tabs__content {
        padding: 0 32px 32px;
        /* background-color: #f4f5f7; */
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
        // height: 480px;
        // min-height: 480px;
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

@media (max-width: 750px) {
    .custom-tab-container {
        h1 {
            font-size: 14px;
        }
    }
}
</style>
