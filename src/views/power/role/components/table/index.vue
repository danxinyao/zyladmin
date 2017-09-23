<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <!-- <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column> -->
        <el-table-column align="center" prop="name" label="角色名" min-width="150"></el-table-column>
        <el-table-column align="center" prop="note" label="职能说明" min-width="300"></el-table-column>
        <el-table-column align="center" prop="" label="操作" min-width="200">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button icon="chakan" @click="edit(scope.row)">编辑</pg-button>
                    <pg-button icon="xiugai" @click="del(scope.row)">删除</pg-button>
                    <pg-button icon="shezhidengji"></pg-button>
                </pg-button-group>
                <!-- 一个按钮 -->
                <pg-button icon="shezhidengji"></pg-button>
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