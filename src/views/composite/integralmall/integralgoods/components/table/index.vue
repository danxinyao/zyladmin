<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%">     
        <el-table-column align="center" prop="proName" label="商品名称" min-width="200"></el-table-column>
        <el-table-column align="center" prop="integral" label="兑换条件" min-width="150"></el-table-column>
        <el-table-column align="center" prop="maxQty" label="兑换总量" min-width="150"></el-table-column>
        <el-table-column align="center" prop="minQty" label="剩余兑换量" min-width="150"></el-table-column>
        <el-table-column align="center" prop="maxRatio" label="兑换比例" min-width="150"></el-table-column>
        <el-table-column align="center" prop="status" label="状态" min-width="150">
            <template scope="scope">
                <span v-if="scope.row.flag === 0">进心中</span>
                <span v-if="scope.row.flag === 1">未开始</span>
                <span v-if="scope.row.flag === 2">已结束</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="有效期" min-width="180">
            <template scope="scope">
                <span>{{ scope.row.beginTime }} - {{ scope.row.endTime }}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="100">
            <template scope="scope">
                <pg-button icon="chakan" @click="soldOut(scope.row)">下线</pg-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .disable {
        color: red;
    }

</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>