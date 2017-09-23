<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" prop="teamname" label="商品名称" width="150"></el-table-column>
        <el-table-column align="center" prop="name" label="商品总数" width="150"></el-table-column>
        <el-table-column align="center" prop="name" label="实付金额" width="150"></el-table-column>
        <el-table-column align="center" prop="teamname" label="收入来源" width="150"></el-table-column>
        <el-table-column align="center" prop="name" label="付款方式" width="150"></el-table-column>
        <el-table-column align="center" prop="name" label="供应商" width="150"></el-table-column>  
        <el-table-column align="center" prop="teamname" label="支付时间" min-width="150"></el-table-column>             
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
