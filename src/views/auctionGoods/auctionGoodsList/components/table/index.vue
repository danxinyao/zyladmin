<template>
    <el-table 
        :data="list" 
        v-loading="localLoading === 'getGoodsPageList'" 
        element-loading-text="拼命加载中" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" 
        @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="拍品名称" min-width="200"></el-table-column>
        <el-table-column align="center" prop="auctionName" label="所属专场" min-width="100"></el-table-column>
        <el-table-column align="center" prop="status" label="开拍状态" min-width="100">
            <template scope="scope">
                {{ status(scope.row.status) }}
            </template>
        </el-table-column>
        <el-table-column align="center" prop="goodsStatus" label="拍品状态" min-width="100">
            <template scope="scope">
                <el-tag type="success" v-if="scope.row.goodsStatus === 1">已上架</el-tag>
                <el-tag type="gray" v-else>未上架</el-tag>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="创建时间" width="250"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="150">
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