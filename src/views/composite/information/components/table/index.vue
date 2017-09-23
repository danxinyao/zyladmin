<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" >
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="文章名称" min-width="150"></el-table-column>
        <el-table-column align="center" prop="articleTypeDesc" label="文章归属" min-width="150"></el-table-column>
        <el-table-column align="center" prop="categoryLongName" label="文章分类" min-width="150"></el-table-column>
        <el-table-column align="center" prop="createTime" label="建立时间" min-width="150"></el-table-column>
        <el-table-column align="center" prop="creater" label="发布者" min-width="150"></el-table-column>
        <el-table-column align="center" prop="editor" label="最后更新者" width="300"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button icon="chakan" @click="detail(scope.row)">查看</pg-button>
                    <pg-button icon="xiugai" @click="edit(scope.row)">编辑</pg-button>
                    <pg-button icon="shezhidengji" @click="deleteOne(scope.row)">删除</pg-button>
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