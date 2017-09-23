<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" prop="name" label="页面名称" min-width="200"></el-table-column>
        <el-table-column align="center" prop="url" label="链接" min-width="200"></el-table-column>
        <el-table-column align="center" prop="createTime" label="建立时间" min-width="200"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <pg-button-group>
                    <pg-button icon="chakan" @click="edit(scope.row)">编辑</pg-button>
                    <pg-button icon="xiugai" @click="del(scope.row)">删除</pg-button>
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