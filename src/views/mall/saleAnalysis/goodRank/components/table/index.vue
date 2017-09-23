<template>
    <el-table 
        :data="list" 
        v-loading="localLoading === 'getPageList'" 
        element-loading-text="拼命加载中" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" 
        >
        <el-table-column align="center" prop="" label="排名" width="100">
        </el-table-column>
        <el-table-column align="center" prop="name" label="商品名称" min-width="200"></el-table-column>
        <el-table-column align="center" prop="price" label="销售额" min-width="100"></el-table-column>
        <el-table-column align="center" prop="stockQty" label="销售量" min-width="100"></el-table-column>
        <el-table-column align="center" prop="createTime" label="访问数" width="250"></el-table-column>
        <el-table-column align="center" prop="createTime" label="购买数" width="250"></el-table-column>
        <el-table-column align="center" prop="createTime" label="转化率" width="250"></el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>