<template>
    <el-table 
        :data="list" 
        v-loading="localLoading === 'getPageList'" 
        element-loading-text="拼命加载中" 
        highlight-current-row 
        border 
        stripe 
        style="width: 100%" 
        @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="商品名称" min-width="200"></el-table-column>
        <el-table-column align="center" prop="price" label="价格" min-width="100"></el-table-column>
        <el-table-column align="center" prop="stockQty" label="库存" min-width="100"></el-table-column>
        <el-table-column align="center" prop="createTime" label="创建时间" width="250"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="150">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button title="编辑" @click="edit(scope.row)"></pg-button>
                    <pg-button title="删除" confirm @click="del(scope.row)"></pg-button>
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