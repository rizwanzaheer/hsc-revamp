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
                <br />
                <p
                    class="text-[15px] leading-[30px] font-[500] italic text-white"
                >Deploy here and apply for supports</p>
                <el-button
                    class="el-primary-button bg-[#02ead0] hover:bg-[#8FFDFF] hover:text-black mt-3"
                    type="primary"
                >Register</el-button>
            </div>

            <!-- <el-row>
                <el-col :span="24" :gutter="20">
                    <div class="grid-content bg-purple-dark">tetsdfad</div>
                </el-col>
            </el-row>-->
        </div>
    </el-main>
</template>

<style lang="scss">
@import '../../sass/common/_var.scss';
.new-journey {
    &:hover {
        span {
            border-color: $color-primary;
        }
    }
}

.el-primary-button {
    border: 0;
    background: $color-primary;
    background-color: 'red' !important;
    border-radius: 4px;
    box-shadow: 0 5px 0 #02ead0;
    color: $color-black;
    cursor: pointer;
    // font: bold;
    font-weight: 600;
    line-height: 18.92px;
    text-align: center;
    width: 120px;
    height: 38px;
    margin: 0;
    outline: 0;
    padding: 12px 20px;
    transition: all 0.1s linear;
    size: 15px;
}
.el-primary-button:active {
    box-shadow: 0 2px 0 #02ead0;
    transform: translateY(3px);
    &:hover {
        // background: "linear-gradient(180deg, #8FFDFF 0%, #02EAD0 100%)";​
        box-shadow: 0px 3px 0px #8ffdff;
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