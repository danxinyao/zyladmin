<template>
    <div class="banner">
        <!-- <img src="../../../../assets/images/home_big_banner.png"> -->
        <el-carousel arrow="never" height="400px">
            <el-carousel-item v-for="item in list" :key="item.advertisingPositionID">
                <h3><pg-img :src="item.imgUrl"></pg-img></h3>
                <!-- <h3><img src="../../../../../assets/images/home_big_banner.png"></h3> -->
            </el-carousel-item>
        </el-carousel>
        <router-link class="edit-mask" :to="{path: '/advertisement'}"><span>点击进入编辑</span></router-link>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .banner {
        position: absolute;
        top: 0px;
        left: 0;
        width:100%;
        height: 400px;
        z-index: 0;
    }
    .el-carousel__container {
        height: 400px;
        h3{
            margin: 0;
        }
        img {
            display: block;
            height: 400px;
            width: 100%;
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
        right: 0;
        width: @base - 240px;
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