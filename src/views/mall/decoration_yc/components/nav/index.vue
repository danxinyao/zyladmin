<template>
    <!-- 导航 -->
    <div class="nav">
        <div class="mallIndexNav">
            <div class="navLeft">
                <div class="allGoods">全部商品分类</div>
                <div class="goodTitle" v-for="item in list.subItems">
                    <div class="title"><a href="javascript:void(0)">{{item.name}}</a></div>
                    <ul class="parentNav clearfix">
                        <li v-for="subItem in item.subItems"><a href="javascript:void(0)">{{subItem.name}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <router-link class="edit-mask" :to="{path: '/goodsClass'}"><span>点击进入编辑</span></router-link>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .nav {
        width: 240px;
        height: 400px;
        overflow: hidden;
        position: relative;
        z-index: 1;
        .mallIndexNav {
            width: 240px;
            min-height: 400px;
            position: relative;
            z-index: 1;
            background-color: rgba(255,255,255,0.5);
            .navLeft {
               width: 240px;
               height: 400px;
               position: absolute; 
               top: 0;
               left: 0;
               .allGoods {
                    height: 76px;
                    background: url("~assets/images/yc_mall_nav_bg.png") 0 0 no-repeat;
                    background-size: 100% 100%;
                    font-size: 18px;
                    font-weight: bolder;
                    line-height: 82px;
                    text-align: center;
                    color: #2e2e2e;
               }
               .goodTitle{
                    box-sizing: border-box;
                    height: 60px;
                    padding: 8px 10px 0 13px;
                    box-sizing: border-box;
                    &:hover {
                        .navRight {
                            display: block;
                        }
                        background-color: rgba(255,255,255,0.9);
                    }
                    .title {
                        height: 26px;
                        line-height: 26px;
                        padding-left: 18px;
                        background: url("~assets/images/yc_mall_nav_title_bg.png") 0 10px no-repeat;
                        a {
                            color: #363636;
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 26px;
                            height: 26px;
                        }
                    }
                    .parentNav {
                        height: 26px;
                        padding-left: 18px;
                        overflow: hidden;
                        li {
                            height: 26px;
                            margin-right: 10px;
                            float: left;
                            a {
                                display: block;
                                height: 26px;
                                line-height: 26px;
                                font-size: 12px;
                                color: #545454;
                            }
                        }
                    }
               }
            }
            .goodTriangle {
                position: absolute;
                top:50%;
                left:  -12px;
                margin-top: -12px;
                height:0px;
                width:0px;
                border-right:solid 12px @white-color;
                border-top:solid 12px transparent; 
                border-bottom:solid 12px transparent; 
            }        
            .navRight {
                z-index: 100;
                background-color: @white-color;
                display: none; 
                position: absolute;
                left: 240px;
                top: 0;
                width: 540px;
                min-height: 400px;
                padding: 10px 30px 10px 30px;
                .rightItem {
                    padding: 10px 0;
                    border-bottom: 1px dashed #e6e6e6;
                    &:last-of-type{
                        border-bottom: none;
                    }               
                    .subtitle a{
                        float: left;
                        width: 75px;
                        font-size: 12px;
                        color: #333;
                        font-weight: bold;
                        height: 32px;
                        line-height: 32px;
                    }
                    .subNav {
                        margin-left: 75px;
                        font-size: 12px;
                        li {
                            float: left;
                            height: 30px;
                            line-height: 30px;
                            padding: 0px 8px 0px 8px;
                            a{
                                font-size: 12px;
                                color: @gray-color;
                                &:hover {
                                    color: @primary-color;
                                }
                            }
                        }
                    }
                }
            }
        }
    }    
    .edit-mask {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid #337ab7;
        color: #337ab7;
        font-size: 18px;
        text-align: center;
        background-color: rgba(255,255,255,.8);
        z-index: 2;
        opacity: 0;
        span{
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
        }
        &:hover{
            opacity: 1;
        }
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>