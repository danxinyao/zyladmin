<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" prop="createTime" label="时间" width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="用户" width="200"></el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="200"></el-table-column>
        <el-table-column align="center" prop="message" label="内容" min-width="150"></el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>