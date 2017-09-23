<template>
    <!-- 用户地区分布 -->
    <div class="customer">
        <div class="pg_content">
            <el-date-picker
                v-model="timeRange"
                type="datetimerange"
                :picker-options="pickerOptions"
                placeholder="选择时间范围"
                align="center"
                class="timeRange"
            >
            </el-date-picker>
            <div class="number-wrape">
                <span class="title">所有订单</span>
                <ul class="number">
                    <li class="number-item">
                        <span class="total">0</span>
                        <p class="introduction">订单总数</p>
                    </li>
                    <li class="number-item">
                        <span class="total">￥0.00</span>
                        <p class="introduction">订单总金额</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .number-wrape {
        width: 60%;
        margin-top: 60px;
        .number {
            background-color: rgba(199, 208, 212, .5);
            font-size: 0;
            margin: 20px 0;
            padding: 20px;
            .number-item {
                display: inline-block;
                width: 45%;
                font-size: 14px;
                padding: 10px 0;
                border-right: 1px solid rgba(166, 178, 199, .3);
                text-align: center;
                &:last-child {
                    border-right: none;
                }
                .total {
                    font-size: 16px;
                    color: #20A0FF;
                }
                .introduction {
                    font-size: 16px;
                    margin-top: 20px;
                }
            }
        }
    }
    .title {
        display: block;
        height: 20px;
        line-height: 20px;
        border-left: 3px solid red;
        padding-left: 10px;
    }
</style>