<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" prop="name" label="等级名称" width="150"></el-table-column>
        <el-table-column align="center" prop="discount" label="享受折扣" width="150"></el-table-column>
        <el-table-column align="center" prop="power" label="权重" width="150"></el-table-column>
        <el-table-column align="center" prop="upgradeAmount" label="满足消费额" width="200"></el-table-column>
        <el-table-column align="center" prop="upgradeOrderCount" label="满足交易次数" width="200"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button icon="xiugai" @click="edit(scope.row)">编辑</pg-button>
                    <pg-button icon="shanchu" @click="del(scope.row)">删除</pg-button>
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