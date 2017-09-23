<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="left" prop="" label="酒店名称" width="200">
            <template scope="scope">
                <pg-img :src="scope.row.mainImg" class="mainImg" v-if="scope.row.mainImg"></pg-img>
                {{scope.row.name}}
            </template>
        </el-table-column>        
        <el-table-column align="center" prop="address" label="地址" width="250"></el-table-column>
        <el-table-column align="center" prop="linkTel" label="电话" width="250"></el-table-column>
        <el-table-column align="center" prop="status" label="状态" width="150">
            <template scope="scope">
                <span v-if="scope.row.status==1" style="color:green">在用</span>
                <span v-if="scope.row.status==0" style="color:red"> 停用</span>
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

<style rel="stylesheet/less" lang="less" scoped>
    .mainImg {
        width: 60px;
        height: 60px;
        vertical-align: middle;
        margin-right: 10px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
