<template>
    <div class="payList">
        <div class="box_title">{{title}}</div>
        <div class="payList__box">
            <ul>
                <li v-for="item in list" :key="item.name"><span class="fr">¥{{item.totalAmount}}</span>{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    .fr {
        float: right;
    }
    .payList{
        background: #fafafa;
        padding: 20px;
        &__box{
            height: 24px * 10;
            overflow: hidden;
            font-size: 14px;
            line-height: 24px;
            li{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
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