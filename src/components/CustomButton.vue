<template>
    <el-button class="el-primary-button" v-bind="$attrs">{{title}}</el-button>
</template>

<script >
export default {
    inheritAttrs: false,

    props: ['title'],
};
</script>


<style lang="scss">
@import '../sass/common/var';

.el-primary-button {
    border: 0;
    background: $color-primary;
    background-color: 'red' !important;
    border-radius: 4px;
    box-shadow: 0px 3px 0px $shadow-color;
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
button:active {
    box-shadow: 0 2px 0 #006599;
    // color: red;
    // background-color: red;
    transform: translateY(3px);
}
button:visited {
    box-shadow: 0 2px 0 #006599;
    color: red;
    background-color: red;
    transform: translateY(3px);
}
</style>