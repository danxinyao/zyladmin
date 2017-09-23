<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
            <div class="box_title">{{title}}</div>
            <el-form ref="form" :model="form" label-width="120px" :rules="rules">
                <el-form-item label="商户编号：" prop="code">
                    <el-input v-model="form.code" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="商铺名称：" prop="shopName">
                    <el-input v-model="form.shopName" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="联系电话：" prop="mobile">
                    <el-input v-model="form.mobile" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="店主姓名：" prop="name">
                    <el-input v-model="form.name" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="身份证号：" prop="certNo">
                    <el-input v-model="form.certNo" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="商铺地址：" prop="address">
                    <el-input v-model="form.address" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="营业开始时间：" prop="runBeginDate">
                    <el-date-picker
                        v-model="form.runBeginDate"
                        @change="runBeginDateChage"
                        type="datetime"
                        placeholder="选择营业开始时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="营业结束时间：" prop="runEndDate">
                    <el-date-picker
                        v-model="form.runEndDate"
                        @change="runEndDateChage"
                        type="datetime"
                        placeholder="选择营业结束时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="租赁开始时间：" prop="leaseBeginTime">
                    <el-date-picker
                        v-model="form.leaseBeginTime"
                        @change="leaseBeginTimeChage"
                        type="datetime"
                        placeholder="选择租赁开始时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="租赁结束时间：" prop="leaseEndTime">
                    <el-date-picker
                        v-model="form.leaseEndTime"
                        @change="leaseEndTimeChage"
                        type="datetime"
                        placeholder="选择租赁开始时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="面积：" prop="area">
                    <el-input v-model.number="form.area" class="input_inline"></el-input>
                    <div class="input_inline tips">m<sup>2</sup></div>
                </el-form-item>
                <el-form-item label="租赁总价：" prop="amount">
                    <el-input v-model.number="form.amount" class="input_inline"></el-input>
                    <span class="tips">元</span>
                </el-form-item>
                <el-form-item class="el-form-item_btns">
                    <el-button size="small" type="primary" :loading="localLoading === 'saveShop'" @click="save">保存</el-button>
                    <el-button size="small" @click="close">返回</el-button>
                </el-form-item>
            </el-form>
        </div>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    .input_item {
        width: 30%;
    }
    .input_inline {
        width: 10%;
        display: inline-block;
    }
    .tips {
        color: #48576a;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
