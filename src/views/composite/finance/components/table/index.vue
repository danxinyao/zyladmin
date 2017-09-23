<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
<!--         <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column> -->
        <el-table-column align="center" prop="teamname" label="日期" width="400"></el-table-column>
        <el-table-column align="center" prop="name" label="商城名称" width="400"></el-table-column>
        <el-table-column align="center" prop="name" label="金额" min-width="300"></el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>