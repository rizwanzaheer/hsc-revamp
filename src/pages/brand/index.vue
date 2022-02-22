<template>
    <div class="brand-con">
        <div class="banner-con" :class="{'banner-con-en': curLang === 'en'}">
            <el-row class="content-center h-full flex-wrap gap-9">
                <el-col :md="16">
                    <h1 class="text-[1.8rem] sm:text-[3rem] text-white">HSC Brand Elements</h1>
                </el-col>
                <el-col :md="16">
                    <p
                        class="text-white text-[1rem] sm:text-[1.2rem]"
                    >Please show the hoo Smart Chain logos in official colors and usage patterns. Do not place logos on the top of any other objects, and leave reasonable space on logos' outside so that they are clearly seen.</p>
                </el-col>
            </el-row>
        </div>
        <div class="section-1">
            <div class="container px-8 md:mx-auto">
                <el-row justify="center">
                    <el-col :md="12" class="col-md-12 s-title">
                        <span>{{ $t('brand.logo') }}</span>
                    </el-col>
                </el-row>
                <el-row justify="center" class="gap-10">
                    <div class="col-md-4 desc">
                        <div class="bd">
                            <div class="img-con">
                                <img src="../../images/brand/logo/line1-1.png" alt />
                            </div>
                            <div class="info clearfix">
                                <div class="fl tips">
                                    <span>{{ $t('brand.light') }}</span>
                                </div>
                                <div class="fr btn-con">
                                    <a
                                        href="/images/download/hoosmartchain-light.png"
                                        target="_blank"
                                    >PNG</a>
                                    <a
                                        href="/images/download/hoosmartchain-light.ai"
                                        target="_blank"
                                    >SVG</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 desc">
                        <div class="bd">
                            <div class="img-con">
                                <img src="../../images/brand/logo/line1-2.png" alt />
                            </div>
                            <div class="info clearfix">
                                <div class="fl tips">
                                    <span>{{ $t('brand.dark') }}</span>
                                </div>
                                <div class="fr btn-con">
                                    <a
                                        href="/images/download/hoosmartchain-dark.png"
                                        target="_blank"
                                    >PNG</a>
                                    <a
                                        href="/images/download/hoosmartchain-dark.ai"
                                        target="_blank"
                                    >SVG</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 desc">
                        <div class="bd">
                            <div class="img-con">
                                <img src="../../images/brand/logo/line1-3.png" alt />
                            </div>
                            <div class="info clearfix">
                                <div class="fl tips">
                                    <span>{{ $t('brand.green') }}</span>
                                </div>
                                <div class="fr btn-con">
                                    <a
                                        href="/images/download/hoosmartchain-green.png"
                                        target="_blank"
                                    >PNG</a>
                                    <a
                                        href="/images/download/hoosmartchain-green.ai"
                                        target="_blank"
                                    >SVG</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 desc">
                        <div class="bd">
                            <div class="img-con">
                                <img src="../../images/brand/logo/line3-1.png" alt />
                            </div>
                            <div class="info clearfix">
                                <div class="fl tips">
                                    <span>{{ $t('brand.light') }}</span>
                                </div>
                                <div class="fr btn-con">
                                    <a href="/images/download/hsc-light.png" target="_blank">PNG</a>
                                    <a href="/images/download/hsc-light.ai" target="_blank">SVG</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 desc">
                        <div class="bd">
                            <div class="img-con">
                                <img src="../../images/brand/logo/line3-2.png" alt />
                            </div>
                            <div class="info clearfix">
                                <div class="fl tips">
                                    <span>{{ $t('brand.dark') }}</span>
                                </div>
                                <div class="fr btn-con">
                                    <a href="/images/download/hsc-dark.png" target="_blank">PNG</a>
                                    <a href="/images/download/hsc-dark.ai" target="_blank">SVG</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 desc">
                        <div class="bd">
                            <div class="img-con">
                                <img src="../../images/brand/logo/line3-3.png" alt />
                            </div>
                            <div class="info clearfix">
                                <div class="fl tips">
                                    <span>{{ $t('brand.green') }}</span>
                                </div>
                                <div class="fr btn-con">
                                    <a href="/images/download/hsc-green.png" target="_blank">PNG</a>
                                    <a href="/images/download/hsc-green.ai" target="_blank">SVG</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-row>
            </div>
        </div>
        <div class="section-2">
            <div class="container px-8 mx-auto">
                <el-row justify="center">
                    <el-col :md="12" class="col-md-12 s-title">
                        <span>{{ $t('brand.color') }}</span>
                    </el-col>
                </el-row>
                <el-row justify="center" class="gap-8" :gutter="1">
                    <el-col :xs="23" :sm="11" :md="11" :lg="9" :xl="9" class="desc">
                        <div class="bd">
                            <div class="color-con"></div>
                            <div class="info clearfix">
                                <span class="fl">{{ $t('brand.green-color') }} #02EAD0</span>
                                <span class="fr">RGB 2 234 208</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="23" :sm="11" :md="11" :lg="9" :xl="9" class="desc">
                        <div class="bd">
                            <div class="color-con color-con-1"></div>
                            <div class="info clearfix">
                                <span class="fl">{{ $t('brand.blue-black') }} #232029</span>
                                <span class="fr">RGB 35, 32, 41</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Brand',
};
</script>

<style lang="scss">
@import '../../sass/common/_var.scss';

.brand-con {
    .banner-con {
        height: 300px;
        // max-height: 300px;
        // min-height: 160px;
        background: url('../../images/download/hoosmartchain-dark.png') right top no-repeat;
        background-size: contain;
        // background-size: contain;
        &.banner-con-en {
            background: url('../../images/download/hoosmartchain-dark.png') right top no-repeat;
            // background-size: contain;
            background-size: contain;
        }
    }
    .section-1 {
        padding-top: 90px;
        .s-title {
            text-align: center;
            font-weight: normal;
            font-size: 30px;
            color: $color-primary;
            margin-bottom: 50px;
        }
        .row {
            margin-right: -45px;
            margin-left: -45px;
        }
        .desc {
            margin-bottom: 50px;
            .bd {
                .img-con {
                    img {
                        height: 194px;
                    }
                }
                .info {
                    .tips {
                        margin-top: 20px;
                        span {
                            font-size: 16px;
                            color: rgba($color: $color-primary, $alpha: 0.4);
                        }
                    }
                    .btn-con {
                        margin-top: 20px;
                        a {
                            display: inline-block;
                            width: 44px;
                            height: 22px;
                            line-height: 22px;
                            font-size: 12px;
                            text-align: center;
                            color: $color-primary;
                            border-radius: 2px;
                            border: 1px solid $color-primary;
                            transition: all 0.3s ease-out;
                            margin-left: 20px;
                            &:hover {
                                color: $color-white;
                                background: $color-primary;
                            }
                        }
                    }
                }
            }
        }
    }
    .section-2 {
        margin-top: 50px;
        background: transparent;
        .s-title {
            text-align: center;
            font-weight: normal;
            font-size: 30px;
            color: $color-primary;
            margin-bottom: 50px;
        }
        .row {
            margin-right: -45px;
            margin-left: -45px;
        }
        .desc {
            margin-bottom: 50px;
            .bd {
                .color-con {
                    height: 90px;
                    background: $color-primary;
                    border-radius: 4px 4px 0 0;
                    &.color-con-1 {
                        background: #303c3f;
                    }
                }
                .info {
                    height: 75px;
                    border-radius: 0 0 4px 4px;
                    background: $color-white;
                    border: 1px solid #dee0e0;
                    border-top: none;
                    padding: 0 55px;
                    span {
                        font-size: 16px;
                        color: $color-secondary;
                        margin-top: 26px;
                    }
                }
            }
        }
    }
}
</style>

<style lang="scss">
@media (max-width: 1000px) {
    .brand-con {
        .banner-con {
            height: 250px;
            background: none;
            &.banner-con-en {
                background: none;
            }
        }
        .section-1 {
            padding-top: 50px;
            .s-title {
                font-size: 18px;
                margin-bottom: 25px;
            }
            .row {
                margin-right: -5px;
                margin-left: -5px;
            }
            .desc {
                margin-bottom: 25px;
                .bd {
                    .img-con {
                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            }
        }
        .section-2 {
            margin-top: 25px;
            margin-bottom: 25px;
            .s-title {
                font-size: 18px;
                margin-bottom: 25px;
            }
            .row {
                margin-right: -5px;
                margin-left: -5px;
            }
            .desc {
                margin-bottom: 25px;
                .bd {
                    .info {
                        padding: 0 20px;
                    }
                }
            }
        }
    }
}
</style>
