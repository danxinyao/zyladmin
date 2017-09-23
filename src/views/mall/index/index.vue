<template>
    <!-- 综合管理 - 首页 -->
    <div class="customer">
        <div class="pg_content">
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="infoBox">       
                    <i class="infoBox__icon iconfont icon-icon_money"></i>
                    <div class="infoBox__msgNum">¥{{amountList.todayAmount}}</div>
                    <div class="infoBox__title">今日成交额</div>
                    <div class="infoBox__txt">
                        <span>昨日成交额 ¥{{amountList.yesterDayAmount}}</span><span><i class="iconfont icon-icon_up"></i> {{amountList.scale}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <pg-info-box 
                    icon="date"
                    title="待处理订单"
                    :msgNum="orderNum"
                    :msgList="orderList">
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
        <div class="box_title">商城成交情况</div>
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
        overflow-x: auto; 
    }
    .info{
        &Box{
            //width: 100%;
            height: 250px - 40px;
            padding:  20px;
            background: #fafafa;
            &__icon{
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 28px;
                text-align: center;
                border-radius: 50%;
                overflow: hidden;
                background: #cccccc;
            }
            &__msgNum{
                font-size: 48px;
                font-weight: bold;
                line-height: 1.5;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            &__title{
                font-size: 18px;
                line-height: 2;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 20px;
            }
            &__txt{
                width: 100%;
                text-align: center;
                font-size:  18px;
                line-height: 2;
                span{
                    display: inline-block;
                    margin: 0 10px;
                }
            }
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>