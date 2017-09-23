<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="50">
        </el-table-column>
        <el-table-column align="center" prop="sheet" label="订单号" width="150">
        </el-table-column>
        <el-table-column align="center" prop="memberName" label="下单账号" width="150"></el-table-column>
        <el-table-column align="center" prop="hotelName" label="预订酒店" width="150"></el-table-column>
        <el-table-column align="center" prop="roomTypeName" label="预订房型" width="200"></el-table-column>
        <el-table-column align="center" prop="totalQty" label="数量" width="150"></el-table-column>
        <el-table-column align="center"  label="状态" prop="flagDesc"  width="100">
        </el-table-column>
        <el-table-column align="center" prop="editor" label="修改人" width="150"></el-table-column>
        <el-table-column align="center" prop="editTime" label="修改时间" width="150"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <!-- 一个按钮 -->
                <pg-button  icon="shanchu" @click="edit(scope.row)">编辑</pg-button>
                 <pg-button  icon="shanchu" @click="saveIn(scope.row)">入住</pg-button>
                <pg-button icon="shanchu" @click="cancel(scope.row)">取消</pg-button>
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