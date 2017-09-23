<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <!-- 排课 -->
        <div v-if="editType !== 2">
            <div>
                <span class="title">课程日期</span>
                <el-date-picker
                    v-model="date"
                    type="date"
                    placeholder="选择日期"
                    >
                </el-date-picker>
            </div>
            <el-button @click="add" class="add-btn">新增</el-button>
            <div class="class-item" v-for="(item,index) in courseList">
                <span class="title">课程类型</span>
                <el-select v-model="item.courseScheduleId" placeholder="请选择" class="select course">
                    <el-option
                      v-for="item in classType"
                      :key="item.value"
                      :label="item.text"
                      :value="item.value"
                    >
                    </el-option>
                </el-select>
                <span class="title">课程安排</span>
                <el-input class="select" v-model="item.beginTime" :maxlength="5" :minlength="5"></el-input>
                ----
                <el-input class="select" v-model="item.endTime" :maxlength="5" :minlength="5"></el-input>
                <el-button @click="remove(item,index)" class="remove-btn">删除</el-button>
            </div>
        </div>
        <div v-else>
            <div class="copy-item">
                <span class="title">复制课程表日期</span>
                <el-date-picker
                    v-model="copyClass.sourceDate.begin"
                    type="date"
                    placeholder="选择开始日期"
                >
                </el-date-picker>
                ----
                <el-date-picker
                    v-model="copyClass.sourceDate.end"
                    type="date"
                    placeholder="选择结束日期"
                >
                </el-date-picker>
            </div>
            <div class="copy-item">
                <span class="title">复制到日期</span>
                <el-date-picker
                    v-model="copyClass.targetDate.begin"
                    type="date"
                    placeholder="选择开始日期"
                >
                </el-date-picker>
                ----
                <el-date-picker
                    v-model="copyClass.targetDate.end"
                    type="date"
                    placeholder="选择结束日期"
                >
                </el-date-picker>
            </div>
        </div>
        <div class="btn-group" v-if="courseList.length !== 0 || editType == 2">
            <el-button @click="save" class="btn-item">保存</el-button>
            <el-button @click="reset" class="btn-item">重置</el-button>
            <el-button @click="close" class="btn-item">关闭</el-button>
        </div>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .title {
        margin-right: 18px;
    }
    .input_item{
        width: 200px;
    }
    .class-item {
        margin: 20px 0;
    }
    .select {
        width: 150px;
        &.course {
            margin-right: 20px;
        }
    }
    .add-btn {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .remove-btn {
        margin-left: 10px;
    }
    .btn-group {
        margin: 20px 0;
        .btn-item {
            margin-right: 10px;
        }
    }
    .copy-item {
        margin: 15px;
        .title {
            display: inline-block;
            width: 100px;
        }
    }
</style>
