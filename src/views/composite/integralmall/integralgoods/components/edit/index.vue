<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :inline="true">
            <el-form-item label="商品名称">
                <el-input v-model="query.condition.proName" class="input_item" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商品编码">
                <el-input v-model="query.condition.customNo" class="input_item" placeholder="请输入商品编码"></el-input>
            </el-form-item>
            <el-form-item label="商品分类">
                <el-select v-model="query.condition.deptID" class="input_item">
                    <el-option :label="item.name" :value="item.deptID" v-for="item in classList"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="兑换积分">
                <el-input v-model="query.condition.integral" class="input_item" placeholder="兑换积分"></el-input>
            </el-form-item>
            <el-form-item label="有效期" prop="roleID">
                <el-date-picker
                    v-model="query.condition.beginTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
                &nbsp;&nbsp;至&nbsp;&nbsp;
                <el-date-picker
                    v-model="query.condition.endTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="剩余兑换">
                <el-radio-group v-model="query.condition.maxRatio">
                    <el-radio :label="50">大于50%</el-radio>
                    <el-radio :label="30">10%-50%</el-radio>
                    <el-radio :label="10">小于10%</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">确定</el-button>
                <el-button size="small" @click="reset">清空</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>       
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .el-form-item_btns {
        display: block;
    }
    .close_btn {
        margin-top: 20px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
