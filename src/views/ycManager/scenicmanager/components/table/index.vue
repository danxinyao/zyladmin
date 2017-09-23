<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="景点名称" width="200">
        </el-table-column>
        <el-table-column align="center" prop="address" label="地址" width="250"></el-table-column>
        <el-table-column align="center" prop="beginTime" label="营业时间" width="250"></el-table-column>
        <el-table-column align="center" prop="status" label="状态" width="150">
            <template scope="scope">
                <span v-if="scope.row.status==1" style="color:green"> 启用</span>
                <span v-if="scope.row.status==0" style="color:red"> 禁用</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="editor" label="修改人" width="150"></el-table-column>
        <el-table-column align="center" prop="editTime" label="修改时间" width="200"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="80">
            <template scope="scope">
                <!-- 一个按钮 -->
                <pg-button icon="shanchu" @click="edit(scope.row)">编辑</pg-button>
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