<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%">
        <el-table-column align="center" prop="" label="所在页面" min-width="200">
            <template scope="scope">
                <router-link :to="scope.row.url">{{scope.row.name}}</router-link>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="创建的时间" min-width="200">
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" max-width="300">
            <template scope="scope">
                <pg-button @click="edit(scope.row)" icon="shezhidengji">编辑</pg-button>
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