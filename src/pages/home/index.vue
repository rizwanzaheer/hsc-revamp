<template>
    <el-main class="home-main-bg-container">
        <div class="home-con">
            <div class="banner-con text-center sm:text-left md:text-left lgs:text-left">
                <el-button
                    type="text"
                    class="uppercase text-[#E2459A] text-[15px] hover:text-[#02ead0] text-lg new-journey"
                >
                    {{$t('home.newJourneyTitle')}}
                    <span
                        class="border-b-2 border-[#E2459A] w-[25px] ml-2"
                    ></span>
                </el-button>
                <h3
                    class="text-[26px] sm:text-[34px] font-[600] leading-[41.45px] text-white"
                >{{$t('home.banner.subTitleMain')}}</h3>
                <h1
                    class="text-[50px] sm:text-[90px] font-[700] sm:leading-[109.71px] md:leading-none text-white ml-[-4px]"
                >{{$t('home.banner.Title')}}</h1>
                <p
                    class="text-[16px] sm:text-[18px] leading-[21.94px] text-white"
                >{{$t('home.banner.slogan')}}</p>

                <br />
                <br />
                <br />
                <p
                    class="text-[15px] leading-[30px] font-[500] italic text-white"
                >{{$t('home.banner.supportTitle')}}</p>

                <div
                    class="flex flex-wrap md:justify-start justify-center gap-[3rem] items-center mt-4"
                >
                    <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black w-10/12 md:w-52"
                        :title="$t('common.btn.applyNow')"
                        native-type="button"
                        @click="$router.push({name: 'LandingPage'})"
                    />
                    <div class="flex items-center gap-2">
                        <el-link
                            class="text-[15px] text-white leading-[19.29px] hover:text-red-900"
                            :underline="false"
                            href="https://docs.hoosmartchain.com/#/en-us/intro"
                            target="_blank"
                        >
                            {{ $t('common.readDocumentation') }}
                            <span
                                style="transform: translateY(2px);
                            display: inline-block;
                            font-size: 12px;"
                            >
                                <el-icon>
                                    <arrow-right />
                                </el-icon>
                            </span>
                        </el-link>
                    </div>
                </div>
            </div>

            <!-- number counter section start  -->

            <el-row justify="center" class="mt-[70px] pricing-container mr-4 ml-4 md:mr-0 md:ml-0">
                <el-col :sm="22" :md="3" :lg="4" :xs="22" class="md:ml-[5%]">
                    <div class="grid-content my-2">
                        <h1
                            class="text-white text-[35px] font-[600]"
                        >{{$t('home.counter.sectionOneValue')}}</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700] tracking-wider"
                        >{{$t('home.counter.sectionOneTitle')}}</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content my-2">
                        <h1
                            class="text-white text-[35px] font-[600]"
                        >{{$t('home.counter.sectionTwoValue')}}</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700] tracking-wider"
                        >{{$t('home.counter.sectionTwoTitle')}}</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content my-2">
                        <h1
                            class="text-white text-[35px] font-[600]"
                        >{{$t('home.counter.sectionThreeValue')}}</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700] tracking-wider"
                        >{{$t('home.counter.sectionThreeTitle')}}</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content my-2">
                        <h1
                            class="text-white text-[35px] font-[600]"
                        >{{$t('home.counter.sectionFourValue')}}</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700] tracking-wider"
                        >{{$t('home.counter.sectionFourTitle')}}</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content">
                        <h1
                            class="text-white text-[35px] font-[600]"
                        >{{$t('home.counter.sectionFiveValue')}}</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700] tracking-wider"
                        >{{$t('home.counter.sectionFiveTitle')}}</h5>
                    </div>
                </el-col>
            </el-row>

            <!-- number counter section ends  -->

            <!-- new and update section start -->
            <el-row class="mt-20 md:mt-10" justify="center">
                <el-col
                    :md="21"
                    :sm="24"
                    :xs="24"
                    class="min-h-[55px] bg-gradient-to-r from-[#559BC8] to-[#2BE5C3]"
                >
                    <el-row justify="center" :gutter="10" class="h-[100%]">
                        <el-col :md="5" :sm="24">
                            <div
                                class="grid-content text-center flex justify-center items-center news-container"
                            >
                                <img src="../../images/news/news.svg" class />
                                <h2
                                    class="text-[15px] md:text-[16px] text-white leading-[24px] md:leading-[20px] ml-5 font-[400] md:font-[600]"
                                >{{$t('home.news.updateTitle')}}</h2>
                            </div>
                        </el-col>
                        <el-col :md="14" :xs="20">
                            <div
                                class="grid-content text-center h-[100%] flex flex-col lg:flex-row justify-center align-center"
                            >
                                <h1
                                    class="text-white text-[15px] mt-5"
                                >{{$t('home.news.newsTitle')}}</h1>
                                <el-link
                                    class="text-[15px] leading-[24px] font-[500] ml-8"
                                    :underline="false"
                                    href="https://medium.com/@HooSmartChain1/what-the-future-holds-for-hsc-8bfdc7e2e592"
                                    target="_blank"
                                >
                                    {{$t('common.readDocumentation')}}
                                    <span
                                        style="transform: translateY(1px);
                                                display: inline-block;
                                                font-size: 12px;"
                                    >
                                        <el-icon>
                                            <arrow-right />
                                        </el-icon>
                                    </span>
                                </el-link>
                            </div>
                        </el-col>
                        <el-col :md="5">
                            <div
                                class="grid-content text-center h-[100%] flex justify-center align-center mb-14 md:mb-[0px]"
                            >
                                <el-button
                                    type="info"
                                    native-type="button"
                                    @click="openURL('https://medium.com/@HooSmartChain1')"
                                    plain
                                    class="hover:bg-black hover:text-white my-auto border-black hover:border-transparent text-black py-[1.6rem] md:py-1"
                                >{{$t('common.news.seeMoreNews')}}</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- new and update section ends -->

            <!-- Infinite Innovation section start -->

            <el-row :gutter="20" class="mt-20 justify-center">
                <el-col :xs="20" :sm="20" :lg="24" justify="center">
                    <h2
                        class="text-white text-[35px] md:text-[40px] mt-5 text-center leading-[42.67px] md:leading-[48.76px] font-[600] not-italic"
                    >{{$t('home.infiniteSection.title')}}</h2>
                    <h5
                        class="text-white text-[16px] md:text-[18px] font-[500] text-center leading-[25px] md:leading-[30px]"
                    >{{$t('home.infiniteSection.para')}}</h5>
                </el-col>
            </el-row>
            <!-- Infinite Innovation section start -->

            <!-- Staging section start -->
            <el-row justify="center" class="staging-container">
                <!-- first row start -->
                <el-col :span="21" :md="24" :xl="24">
                    <el-row
                        :gutter="20"
                        class="absolute mt-[10%] lg:mt-[5%] xl:mt-[10%] z-10 text-white 2xl:w-[100%]"
                    >
                        <el-col
                            :span="6"
                            :lg="6"
                            :xl="6"
                            class="mt-[18%] lg:mt-[25%] xl:mt-[20%] 2xl:mt-[20%] !pl-[15%] 2xl:!pl-[16%]"
                        >
                            <div class="grid-content w-60 2xl:w-[100%]">
                                <h4
                                    class="text-[18px] 2xl:text-[30px] leading-[21.94px] 2xl:leading-[32px] font-[600] mb-4"
                                >{{$t('home.stages.lower.blockOneTitle')}}</h4>
                                <p class="2xl:text-[16px]">{{$t('home.stages.lower.blockOnePara')}}</p>
                            </div>
                        </el-col>
                        <el-col :span="6" :lg="6" :xl="6" class="!pl-[10%] lg:mt-[0%] xl:mt-[0%]">
                            <div class="grid-content w-65 2xl:w-[100%]">
                                <h4
                                    class="text-[18px] 2xl:text-[30px] leading-[21.94px] 2xl:leading-[32px] font-[600] mb-4"
                                >{{$t('home.stages.upper.blockOneTitle')}}</h4>
                                <p class="2xl:text-[16px]">{{$t('home.stages.upper.blockOnePara')}}</p>
                            </div>
                        </el-col>
                        <el-col
                            :span="6"
                            :lg="6"
                            :xl="6"
                            class="mt-[18%] lg:mt-[25%] xl:mt-[20%] !pl-[12%] lg:!pl-[9%] xl:!pl-[12%]"
                        >
                            <div class="grid-content w-60 2xl:w-[100%]">
                                <h4
                                    class="text-[18px] 2xl:text-[30px] leading-[21.94px] 2xl:leading-[32px] font-[600] mb-4"
                                >{{$t('home.stages.lower.blockTwoTitle')}}</h4>
                                <p class="2xl:text-[16px]">{{$t('home.stages.lower.blockTwoPara')}}</p>
                            </div>
                        </el-col>
                        <el-col :span="6" :lg="6" :xl="6" class="!pl-[3%]">
                            <div class="grid-content w-[18rem] 2xl:w-[100%]">
                                <h4
                                    class="text-[18px] 2xl:text-[32px] leading-[21.94px] 2xl:leading-[32px] font-[600] mb-4"
                                >{{$t('home.stages.upper.blockTwoTitle')}}</h4>
                                <p class="2xl:text-[18px]">{{$t('home.stages.upper.blockTwoPara')}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>

                <!-- first row ends -->
                <!-- second row starts -->
                <el-col :span="21">
                    <img src="../../images/stages/4-stages.png" alt="4-stages-image.png" />
                </el-col>
                <!-- second row ends -->
            </el-row>

            <div class="staging-container-mob-v">
                <img src="../../images/stages/stages-mob.png" alt="stages-mob.png" />
            </div>
            <!-- Staging section ends -->

            <!-- visualization section starts -->
            <el-row justify="center" class="gap-4">
                <el-col :span="24" :xs="20" :sm="20">
                    <p
                        class="text-[16px] leading-[22px] md:leading-[30px] font-[500] text-white text-center"
                    >{{$t('home.visualization.Title')}}</p>
                </el-col>
                <el-col :span="24" class="flex justify-center">
                    <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[226px] h-[57px]"
                        :title="$t('common.btn.applyNow')"
                        native-type="button"
                        @click="$router.push({name: 'LandingPage'})"
                    />
                </el-col>
            </el-row>
            <!-- visualization section ends -->

            <!-- developer/user section start -->

            <el-row :gutter="20" class="justify-evenly mt-40">
                <el-col
                    :md="10"
                    :sm="20"
                    :xs="20"
                    class="desc desc-1 !p-[30px] md:!p-[40px] min-h-[390px] w-[540px] for-dev rounded-[10px] m-1 mb-[10%] lg:mb-0"
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
                            class="steps flex place-content-evenly mt-4 md:mt-10 flex-col md:flex-row"
                            style="align-items:center;"
                        >
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/dev1.svg" alt="dev" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-0 md:mt-5 text-left md:text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item1.content1') }}</p>
                            </a>
                            <a
                                class="arrow p-0 md:p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0"
                            >
                                <img src="../../images/icon/use/arrow.svg" alt="arrow" />
                            </a>
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/dev2.svg" alt="dev2" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-0 md:mt-5 text-left md:text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item1.content2') }}</p>
                            </a>
                            <a
                                class="arrow p-0 md:p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0"
                            >
                                <img src="../../images/icon/use/arrow.svg" alt="allow" />
                            </a>
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/dev3.svg" alt="dev3" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-0 md:mt-5 text-left md:text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item1.content3') }}</p>
                            </a>
                        </div>
                    </div>
                    <el-row justify="center" class="mt-10">
                        <el-col
                            :span="24"
                            class="flex-col flex md:flex-row items-center justify-center"
                        >
                            <CustomButton
                                class="custom-button-reg-hover bg-black text-white hover:text-white md:mt-3 md:mr-[30px] justify:center w-[100%] md:w-[150px] h-[45px] leading-[18.29px] font-[600] text-[15px]"
                                title="Register Now"
                                native-type="button"
                                @click="$router.push({name: 'LandingPage'})"
                            />
                            <el-button
                                type="info"
                                plain
                                class="!ml-0 hover:bg-black hover:text-white mt-3 border-black hover:border-transparent text-black w-[100%] md:w-[170px] h-[45px] leading-[18px] font-[600] text-[15px]"
                                native-type="button"
                                @click="openURL('https://www.hoosmartchain.com/HooSmartChain_EN.pdf')"
                            >{{$t('common.btn.whitePaper')}}</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    :md="10"
                    :sm="20"
                    :xs="20"
                    class="desc desc-2 min-h-[390px] w-[540px] !p-[30px] md:!p-[40px] rounded-[10px] for-user m-1"
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
                            class="steps flex place-content-evenly mt-4 md:mt-10 flex-col md:flex-row"
                            style="align-items:center;"
                        >
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/user1.svg" alt="user1.svg" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item2.content1') }}</p>
                            </a>
                            <a
                                class="arrow p-0 md:p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0"
                            >
                                <img src="../../images/icon/use/arrow.svg" alt="allow" />
                            </a>
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/user2.svg" alt="user2.svg" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item2.content2') }}</p>
                            </a>
                            <a
                                class="arrow p-0 md:p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0"
                            >
                                <img src="../../images/icon/use/arrow.svg" alt="allow" />
                            </a>
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/user3.svg" alt="user3.svg" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item2.content3') }}</p>
                            </a>
                        </div>
                    </div>
                    <el-row justify="center" class="mt-10">
                        <el-col
                            :span="24"
                            class="flex-col flex md:flex-row items-center justify-center"
                        >
                            <CustomButton
                                class="bg-black text-white hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[100%] md:w-[150px] h-[45px] leading-[18.29px] font-[600] text-[15px]"
                                :title="$t('common.btn.learnMore')"
                                native-type="button"
                                @click="openURL('https://docs.hoosmartchain.com/#/en-us/intro')"
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
                        class="text-white text-[35px] md:text-[40px] mt-5 p-[7%] md:p-0 text-center leading-[43px] md:leading-[48.76px] text-[600] not-italic"
                    >{{$t('home.hsc.cosmic.title')}}</h2>
                    <h5
                        class="text-white text-[16px] md:text-[18px] text-center leading-[25px] md:leading-[30px] p-[7%] md:p-0"
                    >{{$t('home.hsc.cosmic.para')}}</h5>
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
                    >{{$t('home.hsc.cosmic.slogan')}}</p>
                </el-col>
                <el-col :span="24" class="flex justify-center">
                    <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[80%] md:w-[226px] h-[57px]"
                        :title="$t('common.btn.applyNow')"
                        native-type="button"
                        @click="$router.push({name: 'LandingPage'})"
                    />
                </el-col>
            </el-row>
            <!-- cosmic origin project section start -->

            <!-- road map section start  -->
            <el-row class="road-map-con mt-20">
                <el-col :span="24">
                    <el-row :gutter="20" justify="center">
                        <el-col :span="24">
                            <h1
                                class="text-white text-[40px] leading-[49px] font-[600] text-center mt-10"
                            >{{ $t('home.roadmap.title') }}</h1>
                        </el-col>
                    </el-row>

                    <el-row justify="center" class="road-map-con-body">
                        <!-- first row start -->
                        <el-col :span="24" :md="24">
                            <el-row :gutter="20" class="z-10 text-white">
                                <el-col :span="2" class="text-center" :offset="2">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road1.svg"
                                            alt="planedline.png"
                                            class="ml-[-8%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col
                                    :span="3"
                                    class="text-center lg:mt-[0%] xl:mt-[0%] !flex flex-col justify-end"
                                >
                                    <div class="grid-content flex justify-center pb-[9px]">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >{{ $t('home.roadmap.upper.blockOne') }}</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road3.svg"
                                            alt="planedline.png"
                                            class="ml-[-6%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="3" class="text-center !flex flex-col justify-end">
                                    <div class="grid-content flex justify-center pb-[9px]">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >{{ $t('home.roadmap.upper.blockTwo') }}</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road5.svg"
                                            alt="planedline.png"
                                            class="ml-[-6%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col
                                    :span="2"
                                    class="text-center lg:mt-[0%] xl:mt-[0%] !flex flex-col justify-end"
                                >
                                    <div class="grid-content flex justify-center pb-[9px]">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] ml-[50%]"
                                        >{{ $t('home.roadmap.upper.blockThree') }}</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center" :offset="1">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road7.svg"
                                            alt="planedline.png"
                                            class="ml-[1%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="4" class="text-center !flex flex-col justify-end">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[27px] leading-[21px] font-[600] uppercase ml-[-10.5%]"
                                            v-html="$t('home.roadmap.upper.blockFour')"
                                        ></h4>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>

                        <!-- first row ends -->
                        <!-- second row starts -->
                        <el-col :span="24">
                            <img
                                src="../../images/roadmap/planetline.svg"
                                alt="planedline.png"
                                style="width:100%; padding-left:2.2%; padding-right:2.2%;"
                            />
                        </el-col>
                        <!-- second row ends -->

                        <!-- third row start -->
                        <el-col :span="24" :md="24">
                            <el-row class="z-10 text-white">
                                <el-col :span="4" class="text-center mt-[12px]" :offset="1">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase pr-[12%]"
                                        >{{ $t('home.roadmap.lower.blockOne') }}</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center lg:mt-[0%] xl:mt-[0%]">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road2.svg"
                                            alt="planedline.png"
                                            class="ml-[-65%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center mt-[12px] ml-[-0.5%]">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >{{ $t('home.roadmap.lower.blockTwo') }}</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road4.svg"
                                            alt="planedline.png"
                                            class="ml-[58%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="3" class="text-center mt-[12px] ml-[2.5%]">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600]"
                                        >{{ $t('home.roadmap.lower.blockThree') }}</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center lg:mt-[0%] xl:mt-[0%]">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road6.svg"
                                            alt="planedline.png"
                                            class="ml-[3%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center mt-[12px] ml-[2.6%]">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600]"
                                        >{{ $t('home.roadmap.lower.blockFour') }}</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" :offset="1" class="text-center">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road8.svg"
                                            alt="planedline.png"
                                            class="ml-[-12%]"
                                        />
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <!-- third row ends -->
                    </el-row>
                </el-col>
            </el-row>

            <!-- road map only for mobile version start -->
            <div class="road-map-mob-con mt-10">
                <img
                    src="../../images/roadmap/roadmap-mobile-v.svg"
                    alt="roadmap-mobile-version.png"
                />
            </div>
            <!-- road map only for mobile version ends -->

            <!-- road map section ends  -->

            <!-- HSC landing projects section start -->
            <el-row justify="center" class="mt-20 mb-20">
                <el-col :span="24" :xs="20" :sm="20">
                    <h6
                        class="text-[16px] leading-[30px] font-[500] text-white text-center"
                    >{{$t('home.hsc.landScape')}}</h6>
                </el-col>
                <el-col :span="24" :xs="20" :sm="20">
                    <h1
                        class="text-[35px] md:text-[40px] leading-[43px] md:leading-[48.76px] font-[600] text-white text-center"
                        v-html="$t('home.hsc.landScapeOverView')"
                    ></h1>
                </el-col>
                <el-col :span="24" class="flex justify-center mt-5 md:mt-0">
                    <el-link
                        :underline="false"
                        class="text-white !hover:text-white !focus:text-white !active:bg-violet-400 text-[15px] leading-[18.29px] font-[500]"
                        href="https://eapy.com/en/project/list"
                        target="_blank"
                    >
                        {{$t('common.news.seeAllProjects')}}
                        <span
                            style="transform: translateY(2px);
                            display: inline-block;
                            font-size: 12px;
                            "
                            class="ml-1"
                        >
                            <el-icon>
                                <arrow-right />
                            </el-icon>
                        </span>
                    </el-link>
                </el-col>
                <!-- carousel section start -->
                <el-col :span="20" class="mt-20 mb-20">
                    <!-- pc-carousel start  -->
                    <el-carousel :interval="5000" arrow="always" class="pc-carousel">
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/seekers-logo.png" />
                            <img src="../../images/all-projects-logos/lendoo-logo.png" />
                            <img src="../../images/all-projects-logos/same-coin-logo.png" />
                            <img src="../../images/all-projects-logos/logo-lootdex.png" />
                            <img src="../../images/all-projects-logos/pudding-logo.png" />
                            <img src="../../images/all-projects-logos/logo-roolend.png" />
                            <img src="../../images/all-projects-logos/logo-yunge.png" />
                            <img src="../../images/all-projects-logos/logo-hooscan.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/gamedao-logo.png" />
                            <img src="../../images/all-projects-logos/logo-bala.png" />
                            <img src="../../images/all-projects-logos/logo-claim.png" />
                            <img src="../../images/all-projects-logos/logo-daostarter.png" />
                            <img src="../../images/all-projects-logos/logo-evodefi.png" />
                            <img src="../../images/all-projects-logos/logo-fansforce.png" />
                            <img src="../../images/all-projects-logos/logo-galaxy.png" />
                            <img src="../../images/all-projects-logos/logo-punkworld.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-heshiswap.png" />
                            <img src="../../images/all-projects-logos/logo-same-finance.png" />
                            <img src="../../images/all-projects-logos/logo-hexch.png" />
                            <img src="../../images/all-projects-logos/logo-hoo-moon.png" />
                            <img src="../../images/all-projects-logos/swap-all.png" />
                            <img src="../../images/all-projects-logos/logo-stk.png" />
                            <img src="../../images/all-projects-logos/shouyi-logo.png" />
                            <img src="../../images/all-projects-logos/seekers-logo.png" />
                        </el-carousel-item>
                    </el-carousel>

                    <!-- pc-carousel ends  -->
                    <!-- mobile-carousel start  -->
                    <el-carousel :interval="5000" arrow="always" class="mobile-carousel">
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/seekers-logo.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/gamedao-logo.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/lendoo-logo.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/same-coin-logo.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-lootdex.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/pudding-logo.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-roolend.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-yunge.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-hooscan.png" />
                        </el-carousel-item>

                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/gamedao-logo.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-bala.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-claim.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-daostarter.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-evodefi.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-fansforce.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-galaxy.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-punkworld.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-heshiswap.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-same-finance.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-hexch.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-hoo-moon.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/swap-all.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/logo-stk.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/shouyi-logo.png" />
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="../../images/all-projects-logos/seekers-logo.png" />
                        </el-carousel-item>
                    </el-carousel>
                    <!-- mobile-carousel start  -->
                </el-col>
                <!-- carousel section ends -->
            </el-row>
            <!-- HSC landing projects section ends -->

            <!-- hsc community section start -->
            <el-row class="hsc-community-con mt-20">
                <el-col :span="24" class="mt-[6rem]">
                    <el-row :gutter="20" justify="center">
                        <el-col :span="24">
                            <h1
                                class="text-white text-[35px] md:text-[40px] leading-[43px] md:leading-[49px] font-[600] text-center mt-10 pr-[10%] pl-[10%] md:pr-[0%] md:pl-[0%]"
                            >Connect to the HSC Community</h1>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" justify="center">
                        <el-col :span="24">
                            <h5
                                class="text-white text-[16px] md:text-[18px] leading-[25px] md:leading-[30px] font-[500] text-center pr-[10%] pl-[10%] md:pr-[0%] md:pl-[0%]"
                            >
                                Join the discussions and stay up to date with the
                                <br />latest news and announcements.
                            </h5>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" justify="center" class="mt-14">
                        <el-col :span="10" :xs="24" :sm="24">
                            <div
                                class="hsc-community-icon-con flex justify-center items-center gap-12 flex-wrap"
                            >
                                <p
                                    class="hsc-community-icon-1"
                                    @click="openURL('https://discord.com/invite/n6ahyKV24d')"
                                >
                                    <a href>Website</a>
                                </p>
                                <p
                                    class="hsc-community-icon-2"
                                    @click="openURL('https://medium.com/@HooSmartChain1')"
                                >
                                    <a href>Medium</a>
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
                                <p
                                    class="hsc-community-icon-5"
                                    @click="openURL('https://discord.com/invite/n6ahyKV24d')"
                                >
                                    <a>Discord</a>
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- hsc community section ends -->

            <!-- Join cosmic section starts -->
            <el-row class="mt-20 !mb-20" justify="center">
                <el-col
                    :lg="21"
                    :xs="24"
                    :sm="24"
                    style="background: linear-gradient(271.11deg, #719EE6 -9.09%, #02EAD0 72.29%);"
                >
                    <el-row justify="center" :gutter="10" class="!items-center min-h-[130px]">
                        <el-col :lg="14" :xs="24" :md="12" :sm="24" class="h-32">
                            <div
                                class="grid-content flex items-center h-[inherit] justify-center lg:justify-start"
                            >
                                <h1
                                    class="text-[#12171B] leading-[36.57px] font-[600] text-[30px] mr-20 sm:mr-0 ml-20 sm:ml-0 md:ml-20 text-center md:text-left"
                                >{{$t('common.btn.joinCosmicProject')}}</h1>
                            </div>
                        </el-col>
                        <el-col :lg="10" :xs="24" :md="12" :sm="24" class="h-32">
                            <div
                                class="grid-content text-center flex-col flex md:flex-row justify-center items-center h-[inherit]"
                            >
                                <el-button
                                    type="info"
                                    plain
                                    class="hover:bg-black hover:text-white text-[15px] leading-[18px] md:mt-4 border-black text-black w-[60%] md:w-[150px] h-[45px]"
                                    native-type="button"
                                    @click="openURL('http://hk.mikecrm.com/NtPoo5v')"
                                >{{$t('common.btn.registerNow')}}</el-button>
                                <el-link
                                    class="!text-black text-[15px] leading-[24px] font-[500] ml-8 mt-3"
                                    :underline="false"
                                    href="https://docs.hoosmartchain.com/#/en-us/intro"
                                    target="_blank"
                                >
                                    {{$t('common.readDocumentation')}}
                                    <span
                                        style="transform: translateY(1px);
                                                display: inline-block;
                                                font-size: 12px;"
                                    >
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
        </div>
    </el-main>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue';

import router from '../../router';

import CustomButton from '../../components/CustomButton.vue';
import CustomTabs from '../../components/CustomTabs.vue';

const openURL = (uri) => {
    // alert('forDeveloperRegisterNow calling!!');
    // window.open(document.URL, '_blank', '');
    window.open(uri, '_blank', '');
};
const applyNowBtnClick = () => {
    // by using the router import object instance
    router.push({ name: 'LandingPage' });
};
</script>


<style  lang="scss">
@import '../../sass/common/_var.scss';
/* // just for carousel start */

.home-main-bg-container {
    padding-top: 100px;
    transform: translateY(-60px);
    background: url('../../images/banner/main-banner.png') no-repeat;
    background-size: contain;
    overflow-x: hidden;
}
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

.pricing-container {
    background: linear-gradient(180deg, rgba(166, 180, 181, 0.02) 0%, rgba(18, 23, 27, 0.02) 100%);

    h5 {
        word-spacing: 0.05rem;
    }
}
</style>


<style lang="scss">
@import '../../sass/common/_var.scss';

.banner-con {
    padding-left: 6.3%;
    padding-right: 20px;
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
    height: 100%;
}

.custom-button-reg-hover {
    &:hover {
        background: linear-gradient(180deg, #343d45 0%, #12171b 100%);
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
.road-map-mob-con,
.staging-container-mob-v {
    display: none;
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
.mobile-carousel {
    display: none;
}
</style>

<style lang="scss">
@import '../../sass/common/_var.scss';
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
                                // height: 158px;

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
        .steps {
            a {
                &.step {
                    height: auto;
                    &:hover {
                        background-color: transparent;
                        box-shadow: none;
                    }
                }
            }
        }
    }
    .news-container {
        clip-path: none;
        background: $new-tabs-bg-color;
    }
    .pc-carousel {
        display: none;
    }
    .mobile-carousel {
        display: block;
        height: 60px;
    }

    .el-carousel__arrow--right {
        margin-right: -20px;
    }
    .road-map-con,
    .staging-container {
        display: none;
    }
    .road-map-mob-con {
        display: inline-block;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 600px;
        // width: 100vw;
        background: linear-gradient(90.98deg, rgba(125, 114, 179, 0.165) 0.7%, rgba(110, 105, 119, 0.012) 99.98%);
        box-shadow: 0px 14px 25px rgba(0, 0, 0, 0.05);
        min-height: auto;
        clip-path: polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%);
        > img {
            max-width: 1000%;
            // height: 500px;
            // width: 1700px;
            margin-left: -70%;
            margin-top: 7%;
        }
    }
    .staging-container-mob-v {
        display: inline-block;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 600px;
        min-height: auto;
        transform: translateY(-12%);
        > img {
            max-width: 1000%;
            // height: 500px;
            // width: 1700px;
            margin-left: -30%;
            // margin-top: 7%;
        }
    }
}
</style>
