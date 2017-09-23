<template>    
	<div class="list">
        <div class="mall_title" v-if="title">—— {{title}} ——</div>
		<ul class="clearfix">
			<li class="left" v-for="item in list">
                <a>
                    <div class="img_box">
                       <pg-img :src="item.imgUrl"></pg-img>
                    </div>
                    <p class="title" v-if="isShowName == 1">{{item.name}}</p>
                    <p class="name" v-if="isShowNote == 1">{{item.note}}</p>
                    <p class="price" v-if="isShowPrice == 1">￥{{item.price}}</p>                   
                </a>
                <div class="edit-mask" @click="editGoods"><span>点击进入编辑</span></div>
			</li>
		</ul>
        <el-button-group>
            <el-button type="primary" icon="edit" @click="edit()">编辑</el-button>
            <el-button type="primary" icon="arrow-up" @click="moveUp()" v-if="isShowUp">上移</el-button>
            <el-button type="primary" icon="arrow-down" @click="moveDown()" v-if="isShowDown">下移</el-button>
            <el-button type="primary" icon="delete" @click="dele()">删除</el-button>
        </el-button-group>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .mall_title {
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: @second-color;
        font-size: 20px;
        margin-bottom: 20px;
    }
    .list {
        position: relative;
        margin-top: 20px;
    	ul {
    		li {
                position: relative;
                float: left;
                margin-right: 10px;
               //margin-bottom: 15px;
                margin-top: 15px;
                &:nth-of-type(5n) {
                    margin-right: 0;
                }
                &:last-of-type {
                    margin-bottom: 15px;
                }
                a {
                    display: block;
                    width: 228px;
                    height: 340px;
                    background-color: @white-color;
                    border: 1px solid #fff;
                    font-size: 14px;
                    color: @second-color;
                    //margin-right: 8px;
                    line-height: 1.5;
                    //margin-bottom: 15px;
                    p {
                        margin: 5px 10px;
                    }
                    .price {
                        font-size: 16px;
                        color: @primary-color;
                    }
                    .name {
                        color: @gray-color;
                    }
                    // &:nth-of-type(5n) {
                    //     margin-right: 0;
                    // }
                    &:hover {
                        border: 1px solid @primary-color;
                    }
                    .img_box {
                        width: 228px;
                        height: 228px;
                        overflow: hidden;
                        img {
                            width: 228px;
                            height: 228px;
                        }
                    }
                }
    		}
    	}
    }
    .el-button-group {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        //border: 2px solid #337ab7;
        color: #337ab7;
        font-size: 18px;
        //text-align: center;
        //background-color: rgba(255,255,255,.8);
        z-index: 2;
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
        cursor: pointer;
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