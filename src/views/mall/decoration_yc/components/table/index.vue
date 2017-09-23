<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @current-change="selectChange">
        <el-table-column align="center" prop="name" label="名称" min-width="200"></el-table-column>
        <el-table-column align="center" prop="note" label="简介" min-width="200"></el-table-column>
        <el-table-column align="center" prop="price" label="价格" min-width="200"></el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>