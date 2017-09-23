<template>
    <!-- 用户地区分布 -->
    <div class="customer">
        <div class="pg_content">
            <el-date-picker
                v-model="timeRange"
                type="datetimerange"
                :picker-options="pickerOptions2"
                placeholder="选择时间范围"
                align="center"
                class="timeRange"
            >
            </el-date-picker>
            <div class="number-wrape">
                <span class="title">购买人数</span>
                <ul class="number">
                    <li class="number-item">
                        <span class="total">0</span>
                        <p class="introduction">总购买人数</p>
                    </li>
                    <li class="number-item">
                        <span class="total">0</span>
                        <p class="introduction">老顾客数</p>
                    </li>
                    <li class="number-item">
                        <span class="total">0%</span>
                        <p class="introduction">老顾客占比</p>
                    </li>
                </ul>
            </div>
            <div class="title">新老顾客对比</div>
            <div id="userConrast" style="width: 90%; height: 500px;" class="map"></div>
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
        width: 80%;
        margin-top: 30px;
        .number {
            background-color: rgba(199, 208, 212, .5);
            font-size: 0;
            margin: 20px 0;
            padding: 20px;
            .number-item {
                display: inline-block;
                width: 33%;
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