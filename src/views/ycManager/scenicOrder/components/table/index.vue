<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="sheet" label="订单号" width="150">
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="下单时间" width="150"></el-table-column>
        <el-table-column align="center" prop="memberName" label="下单账号" width="150">

        </el-table-column>
        <el-table-column align="center" prop="shopName" label="景点名称" width="200"></el-table-column>
        <el-table-column align="center" prop="scenicTicketTypeName" label="门票类型" width="150"></el-table-column>
        <el-table-column align="center" prop="planTime" label="游玩时间" width="150"></el-table-column>
        <el-table-column align="center" prop="totalAmount" label="实付款" width="80"></el-table-column>
        <el-table-column align="center" prop="totalQty" label="数量" width="80"></el-table-column>
        <el-table-column align="center"  label="状态" width="100">
            <template scope="scope">
                <span v-if="scope.row.flag ==0"> 待付款</span>
                <span v-if="scope.row.flag ==10"> 预订</span>
                <span v-if="scope.row.flag ==20"> 已出码</span>
                <span v-if="scope.row.flag ==90"> 已兑票</span>
                <span v-if="scope.row.flag ==100"> 已使用</span>
                <span v-if="scope.row.flag ==97"> 已取消</span>
                <span v-if="scope.row.flag ==99"> 已过期</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="eCode" label="电子码" width="150"></el-table-column>
        <el-table-column align="center" prop="editor" label="修改人" width="150"></el-table-column>
        <el-table-column align="center" prop="editTime" label="修改时间" width="250"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 一个按钮 -->
                <pg-button v-if="scope.row.flag==20" icon="shanchu" @click="changeOrder(scope.row)">兑换</pg-button>
                <pg-button icon="shanchu" @click="cancelScenicOrder(scope.row)">取消</pg-button>
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