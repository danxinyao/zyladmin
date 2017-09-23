<template>
    <!-- 用户地区分布 -->
    <div class="customer">
        <div class="pg_content">
            <div id="userDistribution" style="width: 70%; height: 500px;" class="map"></div>
            <div class="userSort">
                <div class="title">TOP10省份</div>
                <ul class="province">
                    <li class="province-title">
                        <span>地区</span><span>数量</span>
                    </li>
                    <li class="province-item" v-for="item in province">
                        <span>{{item.name}}</span><span>{{item.value}}</span>
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
    .map {
        display: inline-block;
        vertical-align: top;
    }
    .userSort {
        display: inline-block;
        width: 25%;
        margin-left: 20px;
        vertical-align: top;
        text-align: center;
        .title {
            font-size: 18px;
            margin-bottom: 10px;
        }
        .province {
            .province-title, .province-item {
                font-size: 0;
                span {
                    display: inline-block;
                    width: 50%;
                    font-size: 14px;
                    text-align: center;
                    padding: 10px 0; 
                }
            }
            .province-title {
                background-color: rgba(184, 175, 166, 0.5);
            }
        }
    }
</style>