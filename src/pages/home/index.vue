<template>
    <el-main class="home-main-bg-container">
        <div class="home-con">
            <!-- <h1>Dynamic home page loading here!</h1> -->
            <div class="banner-con text-center sm:text-left md:text-left lgs:text-left">
                <el-button
                    type="text"
                    class="uppercase text-[#E2459A] text-[15px] hover:text-[#02ead0] text-lg new-journey"
                >
                    New Journey
                    <span class="border-b-2 border-[#E2459A] w-[25px] ml-2"></span>
                </el-button>
                <h3
                    class="text-[26px] sm:text-[34px] font-[600] leading-[41.45px] text-white"
                >Building an Ecological</h3>
                <h1
                    class="text-[55px] sm:text-[90px] font-[700] leading-[67px] sm:leading-[109.71px] text-white ml-[-4px]"
                >Metaverse</h1>
                <p
                    class="text-[16px] sm:text-[18px] leading-[21.94px] text-white"
                >Providing innovative solutions for growth in world of Blockchains</p>

                <br />
                <br />
                <br />
                <p
                    class="text-[15px] leading-[30px] font-[500] italic text-white"
                >Deploy here and apply for supports</p>
                <CustomButton
                    class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 mr-[30px]"
                    title="Apply now"
                    native-type="button"
                    @click="$router.push({name: 'LandingPage'})"
                />
                <el-link
                    class="text-[15px] text-white leading-[19.29px] hover:text-red-900 mt-1"
                    :underline="false"
                    href="https://docs.hoosmartchain.com/#/en-us/intro"
                    target="_blank"
                >
                    Read Documentation
                    <!-- <i class="el-icon-view el-icon--right"></i> -->
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

            <!-- number counter section start  -->

            <el-row justify="center" class="mt-[70px]">
                <el-col :sm="22" :md="3" :lg="4" :xs="22" class="md:ml-[4%]">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px] font-[600]">181M</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700]"
                        >Total value locked (USDT)</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px] font-[600]">25,425</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700]"
                        >Number of transactions</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px] font-[600]">126</h1>
                        <h5
                            class="text-[#02EAD0] text-[12px] uppercase font-[700]"
                        >transaction per second</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px] font-[600]">65,098</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase font-[700]">Active addresses</h5>
                    </div>
                </el-col>
                <span
                    class="border-b-2 md:border-b-0 el-col el-xs-22 md:border-l-2 border-[#34373C] md:border-white w-[100%] md:w-[2px] h-[2px] md:h-[25px] md:ml-2 md:mt-[25px] md:mr-[25px]"
                />
                <el-col :sm="22" :md="3" :lg="4" :xs="22">
                    <div class="grid-content">
                        <h1 class="text-white text-[35px] font-[600]">27</h1>
                        <h5 class="text-[#02EAD0] text-[12px] uppercase font-[700]">Active Projects</h5>
                    </div>
                </el-col>
            </el-row>

            <!-- number counter section ends  -->

            <!-- new and update section start -->
            <el-row class="mt-10" justify="center">
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
                                >News & Update:</h2>
                            </div>
                        </el-col>
                        <el-col :md="14" :xs="18">
                            <div
                                class="grid-content text-center h-[100%] flex justify-center align-center"
                            >
                                <h1 class="text-white text-[15px] mt-5">
                                    Hoo Smart Chain Heads Towards a New Journey.
                                    <el-link
                                        class="text-[15px] leading-[24px] font-[500] ml-8"
                                        :underline="false"
                                        href="https://docs.hoosmartchain.com/#/en-us/Announcement"
                                        target="_blank"
                                    >
                                        Read Documentation
                                        <!-- <i class="el-icon-view el-icon--right"></i> -->
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
                                </h1>
                            </div>
                        </el-col>
                        <el-col :md="5">
                            <div
                                class="grid-content text-center h-[100%] flex justify-center align-center mb-[10px] md:mb-[0px]"
                            >
                                <el-button
                                    type="info"
                                    native-type="button"
                                    @click="openURL('https://medium.com/@HooSmartChain1')"
                                    plain
                                    class="hover:bg-black hover:text-white mt-4 border-black hover:border-transparent text-black"
                                >See more news</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- new and update section ends -->

            <!-- Infinite Innovation section start -->

            <el-row :gutter="20" class="mt-20">
                <el-col :xs="24" :sm="24" :lg="24" justify="center">
                    <h2
                        class="text-white text-[35px] md:text-[40px] mt-5 text-center leading-[42.67px] md:leading-[48.76px] font-[600] not-italic"
                    >Infinite Innovation</h2>
                    <h5
                        class="text-white text-[16px] md:text-[18px] font-[500] text-center leading-[25px] md:leading-[30px]"
                    >Our vision for a vertically integrated blockchain ecosystem will take place in four stages</h5>
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
                                    class="text-[18px] 2xl:text-[50px] leading-[21.94px] 2xl:leading-[50px] font-[600] mb-4"
                                >Visual Blockchain</h4>
                                <p
                                    class="2xl:text-[18px]"
                                >All data, interactions on chain will be visualised in a physical way. Allowing a intuitive and unique experience.</p>
                            </div>
                        </el-col>
                        <el-col :span="6" :lg="6" :xl="6" class="!pl-[10%] lg:mt-[0%] xl:mt-[0%]">
                            <div class="grid-content w-65 2xl:w-[100%]">
                                <h4
                                    class="text-[18px] 2xl:text-[50px] leading-[21.94px] 2xl:leading-[50px] font-[600] mb-4"
                                >3D Blockchain</h4>
                                <p
                                    class="2xl:text-[18px]"
                                >Interactions with Defi protocols, NFTs will become 3D representations on chain to be collected and shown off by the metaverse's inhabitants. Communities will inhabit and thrive.</p>
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
                                    class="text-[18px] 2xl:text-[50px] leading-[21.94px] 2xl:leading-[50px] font-[600] mb-4"
                                >Social-Fi</h4>
                                <p
                                    class="2xl:text-[18px]"
                                >Aligning the interests for the community with Defi, Game-fi, Social-fi together will be a positive sum game for the entire community.</p>
                            </div>
                        </el-col>
                        <el-col :span="6" :lg="6" :xl="6" class="!pl-[3%]">
                            <div class="grid-content w-[18rem] 2xl:w-[100%]">
                                <h4
                                    class="text-[18px] 2xl:text-[60px] leading-[21.94px] 2xl:leading-[60px] font-[600] mb-4"
                                >Metaverse Chain</h4>
                                <p
                                    class="2xl:text-[20px]"
                                >When visualization, blockchain technology and a thriving ecosystem are brought together, HSC will enter the Metaverse phase. Combining VR, wearable devices and bleeding edge technologies to bring immersive, interaction and innovative concepts.</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>

                <!-- first row ends -->
                <!-- second row starts -->
                <el-col :span="21" style="overflow-y: scroll;">
                    <img src="../../images/stages/4-stages.png" alt="4-stages-image.png" />
                    <!-- class="max-h-[800px] max-w-[300%]" -->
                    <!-- <el-row justify="center">
                        <el-col :span="24">
                            <div class="grid-content place-items-center">
                            </div>
                        </el-col>
                    </el-row>-->
                </el-col>
                <!-- second row ends -->
            </el-row>

            <div class="staging-container-mob-v">
                <img src="../../images/stages/stages-mob.png" alt="stages-mob.png" />
            </div>
            <!-- Staging section ends -->

            <!-- visualization section starts -->
            <el-row justify="center">
                <el-col :span="24" :xs="24" :sm="24">
                    <p
                        class="text-[16px] leading-[22px] md:leading-[30px] font-[500] text-white text-center pr-[20%] pl-[20%]"
                    >Start visualising your journey and apply grant</p>
                </el-col>
                <el-col :span="24" class="flex justify-center">
                    <CustomButton
                        class="bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[226px] h-[57px]"
                        title="Apply Now"
                        native-type="button"
                        @click="$router.push({name: 'LandingPage'})"
                    />
                </el-col>
            </el-row>
            <!-- visualization section ends -->

            <!-- developer/user section start -->

            <el-row :gutter="20" class="justify-evenly mt-40">
                <!-- <el-col :span="12" class="s-title bg-gradient-to-r from-[#559BC8] to-[#2BE5C3]">
                    <span v-html="$t('home.block2.title')"></span>
                </el-col>-->
                <el-col
                    :md="10"
                    :sm="20"
                    :xs="20"
                    class="desc desc-1 !p-[40px] min-h-[390px] w-[540px] for-dev rounded-[10px] m-1 mb-[10%] md:mb-0"
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
                            class="steps flex place-content-evenly mt-10 flex-col md:flex-row"
                            style="align-items:center;"
                        >
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/dev1.svg" alt="dev" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item1.content1') }}</p>
                            </a>
                            <a class="arrow p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0">
                                <img src="../../images/icon/use/arrow.svg" alt="arrow" />
                            </a>
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/dev2.svg" alt="dev2" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center ml-[10%] md:ml-0"
                                >{{ $t('home.block2.item1.content2') }}</p>
                            </a>
                            <a class="arrow p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0">
                                <img src="../../images/icon/use/arrow.svg" alt="allow" />
                            </a>
                            <a
                                class="step p-2 w-[100%] justify-start md:justify-start md:w-[130px] flex !flex-row md:!flex-col ml-[10%] md:ml-[0%]"
                            >
                                <img src="../../images/icon/use/dev3.svg" alt="dev3" />
                                <p
                                    class="text-[#12171B] leading-[24px] font-[500] text-[15px] mt-5 text-center ml-[10%] md:ml-0"
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
                            >View White Paper</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    :md="10"
                    :sm="20"
                    :xs="20"
                    class="desc desc-2 min-h-[390px] w-[540px] !p-[40px] rounded-[10px] for-user m-1"
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
                            class="steps flex place-content-evenly mt-10 flex-col md:flex-row"
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
                            <a class="arrow p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0">
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
                            <a class="arrow p-2 md:translate-y-[-16px] !rotate-90 md:!rotate-0">
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
                        <!-- <el-col :span="24">
                            <p
                                class="text-[16px] leading-[30px] font-[500] text-white text-center"
                            >Start visualising your journey and apply grant</p>
                        </el-col>-->
                        <el-col
                            :span="24"
                            class="flex-col flex md:flex-row items-center justify-center"
                        >
                            <CustomButton
                                class="bg-black text-white hover:bg-[#8FFDFF] hover:text-black mt-3 justify:center w-[100%] md:w-[150px] h-[45px] leading-[18.29px] font-[600] text-[15px]"
                                title="Learn more"
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
                    >Cosmic Origin Project</h2>
                    <h5
                        class="text-white text-[16px] md:text-[18px] text-center leading-[25px] md:leading-[30px] p-[7%] md:p-0"
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
                            >Roadmap</h1>
                        </el-col>
                    </el-row>

                    <el-row justify="center" class="road-map-con-body">
                        <!-- first row start -->
                        <el-col :span="24" :md="24">
                            <el-row :gutter="20" class="z-10 text-white">
                                <el-col :span="2" class="text-center" :offset="2">
                                    <div class="grid-content flex justify-center">
                                        <!-- <h4
                                            class="text-[18px] leading-[21.94px] font-[600] mb-4"
                                        >Maine Launches 215 Days</h4>-->
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
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >TVL 123M USD</h4>
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
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >TPS 116</h4>
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
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] ml-[50%]"
                                        >1085234 Addresses</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center" :offset="1">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road7.svg"
                                            alt="planedline.png"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="4" class="text-center !flex flex-col justify-end">
                                    <div class="grid-content flex justify-center">
                                        <h4 class="text-[27px] leading-[21px] font-[600] uppercase">
                                            Metaverse
                                            <br />
                                            <span
                                                class="text-[15px] leading-[35px] font-[600]"
                                            >World</span>
                                        </h4>
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
                            <!-- <el-row justify="center">
                                <el-col :span="24">
                                    <div class="grid-content place-items-center">
                                    </div>
                                </el-col>
                            </el-row>-->
                        </el-col>
                        <!-- second row ends -->

                        <!-- third row start -->
                        <el-col :span="24" :md="24">
                            <el-row :gutter="20" class="z-10 text-white">
                                <el-col :span="2" class="text-center mt-[12px]" :offset="2">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >Maine Launches 215 Days</h4>
                                        <!-- <img
                                            src="../../images/roadmap/road1.svg"
                                            alt="planedline.png"
                                            class="ml-[-8%]"
                                        />-->
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center lg:mt-[0%] xl:mt-[0%]">
                                    <div class="grid-content flex justify-center">
                                        <!-- <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >TVL 123M USD</h4>-->
                                        <img
                                            src="../../images/roadmap/road2.svg"
                                            alt="planedline.png"
                                            class="ml-[50%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="2" :offset="1" class="text-center mt-[12px]">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600] uppercase"
                                        >10716574 Transactions</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" :offset="1" class="text-center">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road4.svg"
                                            alt="planedline.png"
                                            class="ml-[-60%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center mt-[12px]">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600]"
                                        >20+ Projects</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center lg:mt-[0%] xl:mt-[0%]">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road6.svg"
                                            alt="planedline.png"
                                            class="ml-[55%]"
                                        />
                                    </div>
                                </el-col>
                                <el-col :span="2" class="text-center mt-[12px]" :offset="1">
                                    <div class="grid-content flex justify-center">
                                        <h4
                                            class="text-[16px] leading-[20px] font-[600]"
                                        >Infinite Innovation</h4>
                                    </div>
                                </el-col>
                                <el-col :span="2" :offset="1" class="text-center">
                                    <div class="grid-content flex justify-center">
                                        <img
                                            src="../../images/roadmap/road8.svg"
                                            alt="planedline.png"
                                            class="ml-[-12%]"
                                        />
                                        <!-- <h4 class="text-[27px] leading-[21px] font-[600] uppercase">
                                            Metaverse
                                            <br />
                                            <span
                                                class="text-[15px] leading-[35px] font-[600]"
                                            >World</span>
                                        </h4>-->
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
                    >HSC Landscape</h6>
                </el-col>
                <el-col :span="24" :xs="20" :sm="20">
                    <h1
                        class="text-[35px] md:text-[40px] leading-[43px] md:leading-[48.76px] font-[600] text-white text-center"
                    >
                        Over
                        <span class="text-[#02EAD0]">20+</span> Projects on HSC
                    </h1>
                </el-col>
                <el-col :span="24" class="flex justify-center mt-5 md:mt-0">
                    <el-link
                        :underline="false"
                        class="text-white !hover:text-white !focus:text-white !active:bg-violet-400 text-[15px] leading-[18.29px] font-[500]"
                        href="https://eapy.com/en/project/list"
                        target="_blank"
                    >
                        See All Projects
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
                    <!-- <h1 class="text-white">carousel section</h1> -->
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
                            <div class="hsc-community-icon-con flex justify-evenly">
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
            <el-row class="mt-20 !mb-20" justify="center">
                <el-col
                    :lg="21"
                    :xs="24"
                    :sm="24"
                    style="background: linear-gradient(271.11deg, #719EE6 -9.09%, #02EAD0 72.29%);"
                >
                    <el-row justify="center" :gutter="10" class="!items-center min-h-[130px]">
                        <el-col :lg="14" :xs="24" :sm="24" class="h-32">
                            <div class="grid-content flex items-center h-[inherit]">
                                <h1
                                    class="text-[#12171B] leading-[36.57px] font-[600] text-[30px] mr-20 md:mr-0 ml-20 text-center md:text-left"
                                >Join Cosmic Origin Project</h1>
                            </div>
                        </el-col>
                        <el-col :lg="10" :xs="24" :sm="24" class="h-32">
                            <div
                                class="grid-content text-center flex-col flex md:flex-row justify-center items-center h-[inherit]"
                            >
                                <el-button
                                    type="info"
                                    plain
                                    class="hover:bg-black hover:text-white text-[15px] leading-[18px] md:mt-4 border-black text-black w-[60%] md:w-[150px] h-[45px]"
                                    native-type="button"
                                    @click="openURL('http://hk.mikecrm.com/NtPoo5v')"
                                >Register Now</el-button>
                                <el-link
                                    class="!text-black text-[15px] leading-[24px] font-[500] ml-8 mt-3"
                                    :underline="false"
                                    href="https://docs.hoosmartchain.com/#/en-us/intro"
                                    target="_blank"
                                >
                                    Read Documentation
                                    <!-- <i class="el-icon-view el-icon--right"></i> -->
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
