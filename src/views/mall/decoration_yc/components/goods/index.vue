<template>
    <pg-wrapper>
        <div class="goods">
            <div class="goods_left">
                <router-link :to="{path: '/yicheng/goodsDetail'}">
                    <img src="~assets/images/yc_goods_left_bg.png">
                </router-link>
            </div>
            <div class="goods_right">
                <div class="item">
                    <div class="item_left">
                        <router-link :to="{path: '/yicheng/goodsDetail'}">
                            <img src="~assets/images/yc_goods_login.jpg">
                            <p class="item_goods_title">内圆博古架 </p>
                            <p class="item_goods_explain">非洲花梨木 中式展示架 </p>
                            <p class="item_goods_price">¥890.5</p>
                            <img class="img" src="~assets/images/yc_item_right.jpg">
                        </router-link>
                    </div>
                    <div class="item_right">
                        <router-link :to="{path: '/yicheng/goodsDetail'}">
                            <div class="detail">
                                <p class="item_goods_title">太湖石兽耳 </p>
                                <p class="item_goods_explain">采用太湖石造型塑成</p>
                                <p class="item_goods_price">¥581</p>
                                <img src="~assets/images/yc_right_detail.png">
                            </div>
                        </router-link>
                        <router-link :to="{path: '/yicheng/goodsDetail'}">
                            <div class="detail mt">
                                <p class="item_goods_title">太湖石兽耳 </p>
                                <p class="item_goods_explain">采用太湖石造型塑成</p>
                                <p class="item_goods_price">¥581</p>
                                <img src="~assets/images/yc_right_detail.png">
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="item">
                    <div class="item_left">
                        <router-link :to="{path: '/yicheng/goodsDetail'}">
                            <img src="~assets/images/yc_goods_login.jpg">
                            <p class="item_goods_title">内圆博古架 </p>
                            <p class="item_goods_explain">非洲花梨木 中式展示架 </p>
                            <p class="item_goods_price">¥890.5</p>
                            <img class="img" src="~assets/images/yc_item_right.jpg">
                        </router-link>
                    </div>
                    <div class="item_right">
                        <router-link :to="{path: '/yicheng/goodsDetail'}">
                            <div class="detail">
                                <p class="item_goods_title">太湖石兽耳 </p>
                                <p class="item_goods_explain">采用太湖石造型塑成</p>
                                <p class="item_goods_price">¥581</p>
                                <img src="~assets/images/yc_right_detail.png">
                            </div>
                        </router-link>
                        <router-link :to="{path: '/yicheng/goodsDetail'}">
                            <div class="detail mt">
                                <p class="item_goods_title">太湖石兽耳 </p>
                                <p class="item_goods_explain">采用太湖石造型塑成</p>
                                <p class="item_goods_price">¥581</p>
                                <img src="~assets/images/yc_right_detail.png">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </pg-wrapper>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    p {
        margin: 0;
    }
    .goods {
        height: 407px;
        margin: 50px 0 17px 0;
        .goods_left {
            width: 278px;
            height: 407px;
            float: left;
            background: url("~assets/images/yc_goods_left_bg.jpg") 0 0 no-repeat;
            background-size: 100% 100%;
            a {
                display: block;
                height: 100%;
                img {
                    width: 270px;
                    height: 370pox;
                    display: block;
                }
            }
        }
        .goods_right {
            float: right;
            width: 910px;
            height: 407px;
            .item {
                width: 455px;
                height: 407px;
                float: left;
                .item_left {
                    float: left;
                    width: 218px;
                    height: 407px;
                    padding: 30px 0 0 15px;
                    box-sizing: border-box;
                    background: url("~assets/images/yc_goods_r_1.png") 0 0 no-repeat;
                    background-size: 100% 100%;
                    margin-left: -1px;
                    a {
                        display: block;
                    }
                    img {
                        display: block;
                        width: 95px;
                        height: 27px;
                    }
                    .item_goods_title {
                        height: 38px;
                        line-height: 54px;
                        font-size: 22px;
                        color: #572a09;
                        overflow: hidden;
                    }
                    .item_goods_explain {
                        height: 22px;
                        line-height: 30px;
                        font-size: 14px;
                        color: #797979;
                        overflow: hidden;
                    }
                    .item_goods_price {
                        height: 54px;
                        line-height: 54px;
                        font-size: 14px;
                        color: #572a09;
                    }
                    .img {
                        width: 150px;
                        height: 220px;
                        display: block;
                        margin-left: 50px;
                    }
                }
                .item_right {
                    width: 239px;
                    height: 407px;
                    margin-left: -1px;
                    float: right;
                    a {
                        display: block;
                    }
                    .detail {
                        padding: 30px 0 0 15px;
                        box-sizing: border-box;
                        width: 239px;
                        height: 204px;
                        background: url("~assets/images/yc_goods_r.png") 0 0 no-repeat;
                        background-size: 100% 100%;
                        &.mt {
                            margin-top: -1px;
                        }
                        .item_goods_title {
                            height: 22px;
                            line-height: 22px;
                            font-size: 22px;
                            color: #572a09;
                            overflow: hidden;
                        }
                        .item_goods_explain {
                            height: 22px;
                            line-height: 30px;
                            font-size: 14px;
                            color: #797979;
                            overflow: hidden;
                        }
                        .item_goods_price {
                            height: 30px;
                            line-height: 30px;
                            font-size: 14px;
                            color: #572a09;
                            float: left;
                            width: 70px;
                            overflow: hidden;
                        }
                        img {
                            float: right;
                            width: 120px;
                            height: 120px;
                            margin-right: 15px;
                        }
                    }
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