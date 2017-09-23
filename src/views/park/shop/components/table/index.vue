<template>
    <el-table :data="list" v-loading="localLoading === 'getShopList'" element-loading-text="拼命加载中" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" prop="code" label="商户编号" min-width="100"></el-table-column>
        <el-table-column align="center" prop="shopName" label="商户" min-width="100"></el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" min-width="100"></el-table-column>
        <el-table-column align="center" prop="area" label="面积" min-width="100">
            <template scope="scope">
                {{scope.row.area||0}} m<sup>2</sup>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="amount" label="租赁总价" min-width="100">
            <template scope="scope">
                {{scope.row.amount||0}} 元
            </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="起止时间" min-width="120">
            <template scope="scope">
                {{scope.row.leaseBeginTime | subString}}
                <span>--</span>
                {{scope.row.leaseEndTime | subString}}
            </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="创建时间" min-width="100"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 多个按钮 -->
                <pg-button-group>
                    <pg-button icon="xiugai" @click="edit(scope.row)">编辑</pg-button>
                    <pg-button icon="shezhidengji" @click="del(scope.row)" title="删除" confirm></pg-button>
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