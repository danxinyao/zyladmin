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
        <el-table-column align="center" prop="name" label="用户头像" min-width="200"></el-table-column>
        <el-table-column align="center" prop="price" label="用户名称" min-width="100"></el-table-column>
        <el-table-column align="center" prop="stockQty" label="手机号" min-width="100"></el-table-column>
        <el-table-column align="center" prop="createTime" label="注册日期" width="250"></el-table-column>
        <el-table-column align="center" prop="createTime" label="消费额" width="250"></el-table-column>
        <el-table-column align="center" prop="createTime" label="订单数" width="250"></el-table-column>
        <el-table-column align="center" prop="createTime" label="客单价" width="250"></el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>