<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%">
        <!-- <el-table-column align="center" prop="paySheetID" label="paySheetID" width="100"></el-table-column> -->
        <el-table-column align="center" prop="name" label="商户" width="100"></el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="200"></el-table-column>
        <el-table-column align="center" prop="shopName" label="店铺名称" width="100"></el-table-column>
        <el-table-column align="center" prop="address" label="店铺地址" width="150"></el-table-column>
        <el-table-column align="center" prop="" label="收费类型" width="100">
            <template scope="scope">
                <div v-for="item in scope.row.feeType">{{ feeType(item) }}</div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="amount" label="金额" width="100">
            <template scope="scope">
                <div v-for="item in scope.row.amount">{{ item }}</div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="content" label="说明" width="100">
            <template scope="scope">
                <div v-for="item in scope.row.content">{{ item }}</div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="totalAmount" label="合计" width="100"></el-table-column>
        <el-table-column align="center" prop="isPaid" label="收讫" width="200">
            <template scope="scope">
                {{ isPaid(scope.row) }}
            </template>
        </el-table-column>
        <!-- <el-table-column align="center" prop="paidTime" label="收讫时间" width="200"></el-table-column> -->
        <el-table-column align="center" prop="createTime" label="录入时间" width="150"></el-table-column>
        <el-table-column align="center" prop="creater" label="操作人" width="100"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button icon="xiugai" @click="edit(scope.row)" v-if="scope.row.isPaid == 0">编辑</pg-button>
                    <pg-button icon="shezhidengji" @click="del(scope.row)">删除</pg-button>
                </pg-button-group>
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