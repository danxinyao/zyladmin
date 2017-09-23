<template>
    <pg-dialog :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="90px" :inline="true">
            <el-form-item label="商户" style="width:100%">
                <el-select v-model="form.shopID" placeholder="请选择" @change="selectChange">
                    <el-option
                    v-for="item in merchantList"
                    :label="item.customerName"
                    :value="item.shopID">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="店铺名">{{form.name}}</el-form-item>
            <el-form-item label="手机号">{{form.mobile}}</el-form-item>
            <el-form-item label="合计">{{form.amount}}</el-form-item>
            <el-form-item label="收讫">
                <el-select v-model="form.isPaid" placeholder="请选择">
                    <el-option
                    v-for="item in ispayList"
                    :label="item.name"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="收讫时间" >
                <el-date-picker v-model="form.paidTime" type="datetime" :disabled="form.isPaid == 0" @change="dateChange"></el-date-picker>
            </el-form-item>
            <el-form-item style="width:100%">
                <el-button style="margin-bottom: 15px" type="primary" size="small" @click="addGoodsType">新增</el-button>
            </el-form-item>
            <el-table
                :data="form.items"
                border
                style="width: 100%"
                ref="table">
                <el-table-column
                    resizable
                    fixed
                    width="100">
                    <template scope="scope">
                        <el-button type="primary" size="mini" icon="delete" @click="delGoodsType(scope.$index, list)"></el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="收费类型"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-select v-model="scope.row.feeType" filterable placeholder="请选择">
                            <el-option
                                v-for="item in paytypeList"
                                :label="item.text"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                    label="金额"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.amount"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="说明"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.content"></el-input>
                    </template>
                </el-table-column>
            </el-table>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
                <el-button @click="close">取消</el-button>
            </el-form-item>
        </el-form>
    </pg-dialog>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .el-row {
        margin-top: 10px;
    }
    .el-form-item {
        //float: left;
        margin-right: 0;
        width: 33%;    
    }
    .el-table {
        margin-bottom: 20px;
    }
    .remind {
        color: red;
        font-size: 12px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
