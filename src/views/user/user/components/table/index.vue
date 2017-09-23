<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="gradeName" label="会员等级" width="100">
        </el-table-column>
        <el-table-column align="center" prop="name" label="用户名称" width="150"></el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="150"></el-table-column>
        <el-table-column align="center" prop="amount" label="累积消费额" width="150"></el-table-column>
        <el-table-column align="center" prop="cloudCurrency" label="可用云币" width="100"></el-table-column>
        <el-table-column align="center" prop="chadu" label="茶都订单" width="100"></el-table-column>
        <el-table-column align="center" prop="paimai" label="拍卖订单" width="100"></el-table-column>
        <el-table-column align="center" prop="loginType" label="注册来源" width="100"></el-table-column>
        <el-table-column align="center" prop="createTime" label="注册时间" width="150"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 一个按钮 -->
                <pg-button icon="shanchu" @click="del(scope.row)">删除</pg-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>