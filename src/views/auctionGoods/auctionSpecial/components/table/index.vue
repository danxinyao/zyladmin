<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55"></el-table-column>
        <el-table-column align="center" prop="name" label="专场名称" width="300"></el-table-column>
        <el-table-column align="center" prop="auctionType" label="所属类型" width="300">
            <template scope="scope">
                <span v-if="scope.row.auctionType===0">普通拍卖</span>
                <span v-else>大宗拍卖</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="creater" label="创建人" width="200"></el-table-column>
        <el-table-column align="center" prop="createTime" label="创建时间" width="300"></el-table-column>
        <el-table-column align="center" prop="flag" label="状态" width="200">
            <template scope="scope">
                <span v-if="scope.row.flag===97">禁用</span>
                <span v-else>启用</span>
            </template>
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作">
            <template scope="scope">
                <!-- 一个按钮 -->
                <pg-button title="编辑" @click="edit(scope.row)"></pg-button>
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