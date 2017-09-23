<template>
    <!-- 导航 -->
    <div class="nav">
        <div class="mallIndexNav">
            <div class="navLeft">
                <div class="allGoods">全部商品分类</div>
                <div class="goodTitle" v-for="item in list.subItems">
                    <div class="title">{{item.name}}</div>
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
            background-color: #2e2e2e;
            .navLeft {
               width: 240px;
               height: 400px;
               position: absolute; 
               top: 0;
               left: 0;
               .allGoods {
                    height: 40px;
                    background-color: @primary-color;
                    font-size: 16px;
                    line-height: 40px;
                    text-align: center;
                    color: @white-color;
               }
               .goodTitle{
                    height: 72px;//72
                    padding: 0 20px;
                    background-color: #2e2e2e;
                    border-bottom: 1px solid #424242;
                    &:hover {
                        .navRight {
                            display: block;
                        }
                        background-color: #404040;
                    }
                    .title {
                        color: @white-color;
                        font-size: 14px;
                        font-weight: bold;
                        line-height: 40px;
                        height: 40px;
                        a{
                            color: @white-color;
                        }
                    }
                    .parentNav {
                         height: 28px;
                         font-size: 12px;
                         color: @white-color;
                         overflow: hidden;
                     li {
                         float: left;
                         margin-right: 15px;
                         font-size: 12px;
                         line-height: 28px;
                         color: @white-color;
                         opacity: 0.9;
                         a {
                            color: @white-color;
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