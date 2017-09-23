<template>
    <!-- 客户管理 - 分销客户列表 -->
    <div class="customer" style="">
        <!-- 搜索条件 -->
        <div class="head" >
            <img src="../../assets/images/logosys.png">
            <h1>紫云来综合管理系统</h1>
        </div>
        <div class="content">
            <ul>
                <li v-for="menu in menuList">
                    <span class="item">{{menu.name}}</span>
                    <span class="event">待处理事项:
                        <span class="number" v-if="menu.number>0">{{menu.number}}</span>
                        <span v-else>{{menu.number}}</span>
                    </span>
                </li>
                <!-- <li>
                    <span class="item">商城管理</span>
                    <span class="event">待处理事项:<span>0</span></span>
                </li>
                <li>
                    <span class="item">懿城管理</span>
                    <span class="event">待处理事项:<span>0</span></span>
                </li>
                <li>
                    <span class="item">综合管理</span>
                    <span class="event">待处理事项:<span>0</span></span>
                </li>
                <li>
                    <span class="item">园区管理</span>
                    <span class="event">待处理事项:<span>0</span></span>
                </li> -->
            </ul>
        </div>
        <div class="footer">
            <span>青岛紫云来实业有限公司2017©版权所有</span><br><span style="color:#ADADAD;">龙席网络技术支持</span>
        
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .head,.content,.footer{
        width: 100%;
        height: 200px;
    }
    .head{
        display: flex;
        img{
            width: 126px;
            height: 106px;
            display: block;
            margin: 0 1% 0 7%
        }
        h1{
            margin: 0;
            display: block;
            height: 106px;
            line-height: 106px;
        }
    }
    .content{
        margin: 60px 0 0 0;
       ul{
           width: 80%;
            margin: 0 auto;
           display: flex;
           li{
               flex: 1;
               .item{
                    display: block;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: #8F8F8F;
                    color: white;
                    text-align: center;
                    line-height:100px;   
                    overflow:hidden;
                    margin: 0 auto;   
               }
               .event{
                   display: block;
                   margin: 20px auto;
                   color: #ADADAD;
                   text-align: center;
                   .number{ 
                       color: #EE9A00;
                   }
               }
           }
       }
    }
    .footer{
        padding-top:10%; 
        bottom:0;

        text-align: center;
        // span{
        //     display: block;
        //     margin-top: 100px;
        // }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>