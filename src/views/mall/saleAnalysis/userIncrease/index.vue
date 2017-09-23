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
            <div id="userMap" style="width: 90%; height: 500px;" class="map"></div>
            <div class="userSort">
               <div class="online-number">
                    <span class="number-item">
                       线上会员<br><br>1
                    </span>
                    <span class="number-item second">
                       昨日新增<br><br>0
                    </span>
               </div>
               <div class="line-number">
                   <span class="number-item">
                       线下会员<br><br>1
                    </span>
                    <span class="number-item second">
                       昨日新增<br><br>0
                    </span>
               </div>
               <p class="total">会员总数  24</p>
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
    .timeRange {
        display: block;
        margin: 20px auto;
    }
    .map {
        margin-top: 60px;
    }
    .userSort {
        width: 450px;
        margin: 100px auto;
        font-size: 0;
        .online-number, .line-number {
            width: 200px;
            height: 170px;
            display: inline-block;
            font-size: 14px;
            border-radius: 100%;
            text-align: center;
            padding-top: 30px;
        }
        .online-number {
            background-color: #cda52b;
        }
        .line-number {
            margin-left: 50px;
            background-color: #5dc0f4;
        }
        .number-item {
            width: 100px;
            display: block;
            margin: 0 auto;
        }
        .total {
            width: 100px;
            margin: 0 auto;
            margin-top: 20px;
            font-size: 16px;
        }
        .second {
            margin-top: 50px;
        }
    }
</style>