<template>
    <el-tabs class="custom-tabs" tabPosition="left" :stretch="true">
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
            Estimate your rewards
        </el-tab-pane>
        <el-tab-pane label="`TVL Basic rewards plan <br />All projects`">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane :label="`TVL Basic rewards plan <br />All projects`">Task</el-tab-pane>
    </el-tabs>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { Calendar, ArrowRight } from '@element-plus/icons-vue';
const props = defineProps({
    tabPosition: String,
});
const { tabPosition } = toRefs(props);

console.log('props are : ', tabPosition);
</script>
<style lang="scss">
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
    .el-tabs__item {
        height: auto;
        color: #a6a6a6;
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