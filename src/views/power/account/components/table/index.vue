<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <!-- <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column> -->
        <el-table-column align="center" prop="login" label="账号" min-width="150"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" min-width="150"></el-table-column>
        <el-table-column align="center" prop="creater" label="开通点" min-width="150"></el-table-column>
        <el-table-column align="center" prop="tele" label="联系方式" min-width="150"></el-table-column>
        <el-table-column align="center" prop="creater" label="添加人" min-width="150"></el-table-column>
        <el-table-column align="center" prop="status" label="状态" min-width="150">
            <template scope="scope">
                <span v-if="scope.row.status === 1">已启用</span>
                <span v-else class="disable">已停用</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="添加时间" min-width="180"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="350">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button icon="chakan" @click="edit(scope.row)">编辑</pg-button>
                    <pg-button icon="xiugai" @click="disable(scope.row)">禁用</pg-button>
                    <pg-button icon="xiugai" @click="enable(scope.row)">启用</pg-button>
                    <pg-button icon="xiugai" @click="del(scope.row)">删除</pg-button>
                    <pg-button icon="xiugai" @click="resetPass(scope.row)">重置密码</pg-button>
                </pg-button-group>
            </template>
        </el-table-column>
    </el-table>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .disable {
        color: red;
    }

</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>