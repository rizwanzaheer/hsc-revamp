<template>
    <el-main style="padding: 0px">
        <div class="landing-con">
            <div class="cosmic-origin-banner">
                <div>
                    <h1 class="text-white text-[30px] uppercase font-[800]">Cosmic Origin Project</h1>
                    <pre><span class="pink">contract #cosmicoriginproject {</span>
<span class="blue">string public greet</span>

<span class="pink">=</span> <span class="blue">"Hello World!";</span>
    <span class="pink">=</span> <span class="blue">"deploy'#DeLife'";</span>
        <span class="pink">=</span> <span class="blue">"TVL";</span>
            <span class="pink">=</span> <span class="blue">"Game-Fi + NFT";</span>
        <span class="pink">=</span> <span class="blue">"Cross Chain Portal";</span>
    <span class="pink">=</span> <span class="blue">"Staking Bonus "; }</span>
<span class="pink">=</span> <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black h-[30px]"
                        title="Apply Now"
                        native-type="button"
                        @click="openURL('http://hk.mikecrm.com/NtPoo5v')"
                    />
</pre>
                </div>
            </div>
            <!-- visualization section ends -->

            <!-- cosmic origin project section start -->

            <el-row :gutter="20" class="mt-10 mb-16">
                <el-col :xs="20" :sm="20" lg="20" :offset="2">
                    <h2 class="text-[#02EAD0] text-[18px] text-left leading-[30px] font-[600] not-italic">Project Vision</h2>

                    <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-2">
                        Hoo Smart Chain believes that nurturing the growth of an ecosystem for innovation is vital to the blockchain industry. We have created a rewards program and welcome all
                        developers and community members to grow together with us. We aim to visualise blockchain data and create an entirely new paradigm of interacting with De-Fi, Game-Fi, Social-Fi
                        and other merging blockchain technologies.
                    </p>

                    <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                        The Cosmic Origin Project will operate in 4 schemes. We’ve made a handy calculator for you to estimate your rewards below.
                    </p>

                    <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                        Once the number of registered projects reaches 60, the Cosmic Origin Project will officially be triggered, and will last for 6 months from the start date.
                    </p>

                    <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">Go fast alone, but we will go further together!</p>
                </el-col>
            </el-row>
            <!-- cosmic tab section start  -->
            <el-row :gutter="20" justify="center">
                <el-col :span="20">
                    <CustomTabs :tabPosition="left" :onTabChange="handleTabChange" />
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :xs="20" :sm="20" lg="20" :offset="2">
                    <div v-if="activeTabName === 'first' || activeTabName == null">
                        <h2 class="text-[#02EAD0] text-[18px] mt-6 text-left leading-[30px] font-[600]">TVL Rewards</h2>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400]">
                            The first is the TVL Scheme. This is calculated based on the Net TVL for the project calculated in USDT. <strong>This is aimed at all projects.</strong>
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            <strong>Example 1:</strong> If your project reaches 1 Million in TVL based off a random monthly snapshot, then you will be eligible for
                            <strong>Standard Basic Rewards A</strong> of <strong>10K USDT</strong> as a one-off reward.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            If you maintain your TVL for another month at 1 Million, then you will be eligible for <strong>Monthly Continuous Reward B</strong> of <strong>4K</strong> USDT.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            Once you reach the next tier to 5 Million TVL, then you will be eligible for the next tier for Standard Basic Rewards A of <strong>20K USDT</strong> and Monthly Continuous
                            rewards B for that tier <strong>10K USDT</strong>.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            The TVL Rewards will be the basis to calculate the Volume Bonus Rewards of Game-Fi and NFT, and HOO Staking Bonus Rewards.
                        </p>
                    </div>

                    <div v-if="activeTabName === 'second' || activeTabName == null">
                        <h2 class="text-[#02EAD0] text-[18px] mt-6 text-left leading-[30px] font-[600]">Volume Bonus Reward for Game-Fi and NFT</h2>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400]">
                            The second scheme is the Volume Bonus for Game-fi and NFT projects. This reward is a bonus based off a percentage of the <strong>TVL Rewards</strong>. Projects will first
                            need to fulfil the TVL Rewards criteria to be eligible for the Volume Bonus Reward.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6"><strong>Volume Bonus Reward</strong> can be calculated as:</p>
                        <ul class="pl-8">
                            <li class="list-disc text-[14px] mt-2 text-white"><strong>TVL Standard Basic Rewards A x Coefficient X = Volume Bonus Reward A </strong></li>
                            <li class="list-disc text-[14px] mt-2 text-white"><strong>TVL Monthly Continuous Rewards B x Coefficient X = Volume Bonus Reward B </strong></li>
                            <li class="text-[14px] mt-2 text-white italic">Coefficient X is dependent on the Real Transaction Volume.</li>
                        </ul>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            <strong>Example 2:</strong> If your <strong>NFT project</strong> reaches TVL 1 Million and Real Transactional volume of 1 Million USDT, then you will received
                            <strong>Volume Bonus Reward A</strong> of 10000 x 0.1 = 1000 USDT. (This is bonus on top of your TVL Standard Basic Reward of 10000)
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            If the TVL and Real Transactional Volume is maintained for a month, then the <strong>Volume Bonus Reward B</strong> will be 4000 x 0.1 = 400 USDT.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            If the TVL increases to 5M, and Real Transactional Volume increases to 5M, then the <strong>Volume Bonus Reward A</strong> will be 20000 x 0.3 = 6000 USDT, and
                            <strong>Volume Bonus Reward B</strong> would be 10000 x 0.3 = 3000 USDT.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            *Note - Volume Bonus Rewards are based off the TVL Basic Rewards. Projects will need to fulfil the criteria for TVL Basic Rewards first in order to be eligible for Volume
                            Bonus Rewards. Projects will then receive their TVL Rewards + Volume Bonus Rewards.
                        </p>
                    </div>

                    <div v-if="activeTabName === 'third' || activeTabName == null">
                        <h2 class="text-[#02EAD0] text-[18px] mt-6 text-left leading-[30px] font-[600]">HOO Staking Bonus Rewards</h2>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400]">
                            This scheme is an extra incentive to stake the <strong>HOO Token</strong>, the native token for Hoo Smart Chain. Projects will first need to fulfil the TVL Rewards criteria
                            to be eligible for the HOO Staking Bonus Reward.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6"><strong>Hoo Stalking Bonus Reward</strong> can be calculated as :</p>
                        <ul class="pl-8">
                            <li class="list-disc text-[14px] mt-2 text-white"><strong>TVL Standard Basic Rewards A x Coefficient Y = Staking Bonus Reward A</strong></li>
                            <li class="list-disc text-[14px] mt-2 text-white"><strong>TVL Monthly Continuous Rewards B x Coefficient Y = Staking Bonus Reward B</strong></li>
                            <li class="text-[14px] mt-2 text-white italic">Coefficient Y is dependent on the amount of staked HOO tokens.</li>
                        </ul>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            <strong>Example 3: </strong>If your DeFi project reaches TVL of 1 Million USDT, and you’ve staked 500K HOO tokens. Then you will qualify for the second tier of Staking
                            rewards, with a Coefficient Y of 0.2. So the Staking Bonus Reward A will be 10000 x 0.2 = 2000 USDT
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            If the TVL and Staked HOO is maintained for a month, then the Staked Bonus Reward B will 4000 x 0.2 = 800 USDT.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            If the TVL increases to 10M, and staked HOO remains at 500K, then the Staking Reward Bonus A would be 50000 x 0.2 = 10000 UDST.
                        </p>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            *Note – HOO Staking Bonus Rewards are based off the TVL Basic Rewards. Projects will need to fulfil the criteria for TVL Basic Rewards first in order to be eligible for
                            bonus rewards. Projects will then receive their TVL Rewards + HOO Staking Bonus Rewards.
                        </p>
                    </div>

                    <div v-if="activeTabName === 'fourth' || activeTabName == null">
                        <h2 class="text-[#02EAD0] text-[18px] mt-6 text-left leading-[30px] font-[600]">Cross Chain Portal Rewards</h2>
                        <p class="text-white text-[15px] leading-[21px] text-left text-[400]">This scheme is designed for cross chain projects, such as cross chain bridges.</p>

                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            There are two requirements for this scheme, first is the Net Inflow of capital into Hoo Smart Chain, and second is the Standard Monthly Volume, both are calculated in USDT.
                        </p>

                        <p class="text-white text-[15px] leading-[21px] text-left text-[400] mt-6">
                            <strong>Example 4:</strong> If you project reaches net capital inflow of 200K USDT, and monthly trading volume of 1 Million UDST. Then the project will be eligible for 2000
                            USDT reward. The Cross Chain Portal Rewards can be redeemed on a monthly basis.
                        </p>
                    </div>
                </el-col>
            </el-row>

            <!-- terms and conditions section start -->
            <el-row class="mt-14">
                <el-col :xs="20" :sm="20" lg="20" :offset="2">
                    <h2 class="text-[#02EAD0] text-[18px] text-left leading-[30px] font-[600]">Terms and Conditions</h2>

                    <h2 class="text-white text-[15px] text-left leading-[23px] text-[700] font-bold mt-2">Rewards Date</h2>
                    <p class="text-white text-[15px] leading-[23px] text-left text-[400]">
                        The First Phase of the Cosmic Origin Project was officially announced on 9th of March 2022. Once the number of registered projects reaches 60, the Cosmic Origin Project will
                        officially be triggered, and will last for 6 months from the start date.
                    </p>
                    <p class="text-white text-[15px] leading-[23px] text-left text-[400] mt-6">This is the first phase of the Project, and the second phase will be announced later on the year.</p>

                    <h2 class="text-white text-[15px] mt-5 text-left leading-[23px] text-[700] not-italic font-bold">Details</h2>
                    <ol class="list-decimal text-white text-[15px] leading-[23px] ml-[20px] font-[400]">
                        <li>
                            TVL rewards will be evaluated based on the value of
                            <span
                                class="underline underline-offset-2 cursor-pointer"
                                native-type="button"
                                @click="openURL('https://docs.hoosmartchain.com/#/en-us/COPMainstreamAssetList?id=mainstream-asset-list-used-for-tvl-snapshot-calculation')"
                                >mainstream tokens</span
                            >, and other tokens will not be included in the standard of TVL.
                        </li>
                        <li class="mt-2">TVL Rewards A can only be rewarded once. TVL Rewards B can be redeemed on a monthly basis thereafter.</li>
                        <li class="mt-2">Volume Bonus Rewards for Game-fi and NFT and HOO Staking Bonus Rewards can be redeemed on top of TVL Rewards A and B.</li>
                        <li class="mt-2">
                            All project metrics (TVL and Real Transactional Volume) for rewards will be calculated by random snapshot based on value of mainstream tokens. If project does not reach the
                            reward requirements at the time of which the snapshot was taken, the bonus will be cancelled.
                        </li>
                        <li class="mt-2">
                            Hoo Smart Chain Foundation will reserve final right to interpret the definition of malicious trading behaviour. If malicious trading behaviour is found including bots, the
                            reward will be cancelled.
                        </li>
                        <li class="mt-2">
                            Volume Bonus Rewards and Hoo Staking Bonus Rewards are based on TVL Rewards A & B. They are awarded based on corresponding TVL Reward x the coefficient which is a given
                            percentage.
                        </li>
                        <li class="mt-2">All rewards will be paid out in USDT.</li>
                    </ol>

                    <h2 class="text-white text-[15px] mt-5 text-left leading-[23px] text-[700] not-italic font-bold">Reward Payment</h2>
                    <p class="text-white text-[15px] leading-[23px] text-left text-[400]">All rewards are accumulated in the bonus pool, with the following two withdrawal methods:</p>
                    <ol class="list-decimal text-white text-[15px] leading-[23px] ml-[20px] mt-2">
                        <li>One-time withdrawal: the reward is accumulated for one year, and you can apply for one-time withdrawal after one year from the reward was calculated and presented.</li>
                        <li class="mt-2">
                            Withdrawal in batches: you can apply for withdrawal of 10% of the bonus pool every month. If the project develops to a high reward level, the monthly withdrawal volume can
                            be increased by 10%. The remaining reward can be withdrawn directly after one year.
                        </li>
                    </ol>

                    <p class="text-white text-[15px] leading-[23px] text-left text-[400] italic mt-6">
                        Hoo Smart Chain Foundation reserves the right to interpret the terms of the grants and rewards program in event of any dispute.
                    </p>
                </el-col>
            </el-row>
            <!-- terms and conditions section ends -->

            <!-- cosmic tab section ends  -->
            <el-row justify="center" class="mt-10">
                <el-col :xs="22" :sm="22" :md="12">
                    <img src="../../images/million/100-MILLION.png" style="width: 100%" />
                    <h1 class="million-text text-center text-white font-[500] text-[18px]">
                        This is an example of the potential rewards available to a Dex + Game-Fi Project that is staking HOO tokens. It can take advantage of various schemes to achieve a great reward
                    </h1>
                </el-col>
                <!-- <el-col :xs="22" :sm="22" :md="24">
                    <h1 class="million-text text-center text-white font-[500] text-[18px]">
                        This is an example of the potential rewards available to a Dex + Game-Fi Project that is staking HOO tokens. It can take advantage of various schemes to achieve a great reward
                    </h1>
                </el-col> -->
            </el-row>
            <!-- cosmic origin project section start -->

            <!-- Join cosmic section starts -->
            <el-row class="mt-20 !mb-20" justify="center">
                <el-col :lg="21" :xs="24" :sm="24" style="background: linear-gradient(271.11deg, #719ee6 -9.09%, #02ead0 72.29%)">
                    <el-row justify="center" :gutter="10" class="!items-center min-h-[130px]">
                        <el-col :lg="14" :xs="24" :md="12" :sm="24" class="h-32">
                            <div class="grid-content flex items-center h-[inherit] justify-center lg:justify-start">
                                <h1 class="text-[#12171B] leading-[36.57px] font-[600] text-[30px] mr-20 sm:mr-0 ml-20 sm:ml-0 md:ml-20 text-center md:text-left">
                                    {{ $t('common.btn.joinCosmicProject') }}
                                </h1>
                            </div>
                        </el-col>
                        <el-col :lg="10" :xs="24" :md="12" :sm="24" class="h-32">
                            <div class="grid-content text-center flex-col flex md:flex-row justify-center items-center h-[inherit]">
                                <el-button
                                    type="info"
                                    plain
                                    class="hover:bg-black hover:text-white text-[15px] leading-[18px] md:mt-4 border-black text-black w-[60%] md:w-[150px] h-[45px]"
                                    native-type="button"
                                    @click="openURL('http://hk.mikecrm.com/NtPoo5v')"
                                    >{{ $t('common.btn.registerNow') }}</el-button
                                >
                                <el-link class="!text-black text-[15px] leading-[24px] font-[500] ml-8 mt-3" :underline="false" href="https://docs.hoosmartchain.com/#/en-us/intro" target="_blank">
                                    {{ $t('common.readDocumentation') }}
                                    <span style="transform: translateY(1px); display: inline-block; font-size: 12px">
                                        <el-icon>
                                            <arrow-right />
                                        </el-icon>
                                    </span>
                                </el-link>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- Join cosmic section ends -->

            <!-- hsc community section start -->
            <el-row class="hsc-community-con mt-20">
                <el-col :span="24" class="mt-[6rem]">
                    <el-row :gutter="20" justify="center ">
                        <el-col :span="24" :xs="20" :sm="20">
                            <h1 class="text-white text-[30px] md:text-[40px] leading-[42px] md:leading-[49px] font-[600] text-center mt-10">
                                Join our community below
                                <br />& we’ll help you out!
                            </h1>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" justify="center " class="mt-14">
                        <el-col :xs="20" :sm="20" md="6">
                            <div class="hsc-community-icon-con flex justify-evenly">
                                <p class="hsc-community-icon-5" @click="openURL('https://discord.com/invite/n6ahyKV24d')">
                                    <a href>Discord</a>
                                </p>
                                <p class="hsc-community-icon-3" @click="openURL('https://t.me/HooSmartChain')">
                                    <a href>Telegram</a>
                                </p>
                                <p class="hsc-community-icon-4" @click="openURL('https://twitter.com/HooSmartChain')">
                                    <a href>Twitter</a>
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- hsc community section ends -->
        </div>
    </el-main>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { ref, watch } from 'vue';
import CustomButton from '../../components/CustomButton.vue';
import CustomTabs from '../../components/CustomTabs.vue';

const activeTabName = ref(null);

const handleTabChange = (data) => {
    activeTabName.value = data;
};

const openURL = (uri) => {
    // alert('forDeveloperRegisterNow calling!!');
    // window.open(document.URL, '_blank', '');
    window.open(uri, '_blank', '');
};
</script>

<style lang="scss">
@import '../../sass/common/_var.scss';

@media (max-width: 1400px) {
    .million-text {
        font-size: 16px !important;
    }
}

@media (max-width: 1000px) {
    .million-text {
        font-size: 18px !important;
    }
}

@media (max-width: 700px) {
    .million-text {
        font-size: 14px !important;
    }
}

@media (max-width: 400px) {
    .million-text {
        font-size: 12px !important;
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

.cosmic-origin-banner {
    background: url('../../images/landing-page-header/cosmic-origin-project.png') no-repeat;
    background-size: cover;
    min-height: 440px;
    background-position: 70%;
    margin-top: 10px;
    display: flex;
    align-items: center;

    div {
        margin-left: 10%;
        h1 {
            text-shadow: 0px 0px 20px rgba(17, 64, 104, 1);
        }
        span {
            font-size: 16px;
            &.blue {
                color: $color-primary;
            }

            &.pink {
                color: $color-pink;
            }
        }
    }
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
    background: url('../../images/banner/use-bg.png') no-repeat center 108px;
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

    .cosmic-origin-banner {
        min-height: 0;
        margin-left: 0;
        margin-right: 0;

        padding: 20px;
    }
}

@media (max-width: 600px) {
    .cosmic-origin-banner {
        div {
            margin-left: 0;

            h1 {
                font-size: 24px;
            }
            span {
                font-size: 13px !important;
            }

            button {
                width: 100px;
                height: 30px;
                span {
                    font-size: 13px !important;
                }
            }
        }
    }
}

@media (max-width: 450px) {
    .cosmic-origin-banner {
        background-position: initial;
        justify-content: center;
    }
}
</style>
