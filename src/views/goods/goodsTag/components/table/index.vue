<template>
    <el-table :data="list" v-loading="localLoading === 'getShopList'" element-loading-text="拼命加载中" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" prop="" label="标签名" min-width="100">
            <template scope="scope">
                {{scope.row.name}}
                <pg-img :src="scope.row.iconUrl" class="icon" v-if="scope.row.iconUrl"></pg-img>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="创建时间" min-width="100"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button @click="edit(scope.row)">编辑</pg-button>
                    <pg-button @click="del(scope.row)" title="删除" confirm></pg-button>
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

<style rel="stylesheet/less" lang="less" scoped>
    .icon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        border-radius: 50%;
        margin-left: 20px;
    }
</style>