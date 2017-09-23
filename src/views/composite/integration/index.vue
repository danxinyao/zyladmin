<template>
    <!-- 综合管理 - 首页 -->
    <div class="customer">
        <div class="pg_content">
        <el-row :gutter="20">
            <el-col :span="8">
                <pg-info-box 
                    icon="money"
                    title="今日资讯"
                    :msgNum="todayMsgNum"
                    :msgList="todayMsgList">
                </pg-info-box>
            </el-col>
            <el-col :span="8">
                <pg-info-box 
                    icon="date"
                    title="客户咨询"
                    :msgNum="customMsgNum"
                    :msgList="customMsgList">
                </pg-info-box>
            </el-col>
            <el-col :span="8">
                <pg-info-box 
                    :isCircle="isCircle"
                    :msgList="userMsgList">
                </pg-info-box>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="16">
                <div style="background:#fafafa; padding: 20px;">
                    <div class="box_title">七天销售额</div>
                    <div id="userChart" style="width: 100%; height:240px;"></div>
                </div>
            </el-col>
            <el-col :span="8">
                <pg-list
                    title="最新消费"
                    :list="payList">
                </pg-list>
            </el-col>
        </el-row>
        <el-tabs @tab-click="tabClick">
            <el-tab-pane label="商城成交情况"></el-tab-pane>
            <el-tab-pane label="预定成交情况"></el-tab-pane>
            <el-tab-pane label="拍卖成交情况"></el-tab-pane>
        </el-tabs>
        <div id="sellChart" style="width: 100%; height: 300px;"></div>
        <pg-links title="常用入口" :list="linkList"></pg-links>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-tab-pane{
        //margin-top: 20px;
        overflow-x: auto; 
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>