<template>
	<div class="infoBox" @click="handleClick" >       
        <div v-if="isCircle">
        	<div class="infoBox__circle" id="circleChart"></div>
        </div>
        <div v-else>
            <i class="infoBox__icon iconfont" :class="'icon-icon_' + icon" v-if="icon"></i>
        	<div class="infoBox__msgNum">{{msgNum}}</div>
            <div class="infoBox__title" v-if="title">{{title}}</div>
        </div>
        <ul class="infoBox__msgFrom" :class="'infoBox__msgFrom--' + msgFrom" v-if="msgFrom < 3">
        	<li v-for="item in msgList" :key="item.from">{{item.from}}：{{item.num}}</li>
        </ul>
        <ul class="infoBox__msgFrom" v-else>
        	<li v-for="item in msgList" :key="item.from">{{item.from}}：{{item.num}}</li>
        </ul>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
	.info{
		&Box{
			//width: 100%;
			height: 250px - 40px;
			padding:  20px;
			background: #fafafa;
			&__circle{
				width: 100%;
				height: 148px;
				//overflow: hidden;
				margin-bottom: 20px;
			}
			&__icon{
				display: block;
				margin-left: auto;
				margin-right: auto;
				width: 40px;
				height: 40px;
				line-height: 40px;
				font-size: 28px;
				text-align: center;
				border-radius: 50%;
				overflow: hidden;
				background: #cccccc;
			}
			&__msgNum{
				font-size: 48px;
				font-weight: bold;
				line-height: 1.5;
				text-align: center;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			&__title{
				font-size: 18px;
				line-height: 2;
				text-align: center;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				margin-bottom: 20px;
			}
			&__msgFrom{
				width: 100%;
				text-align: center;
				li{
					display: inline-block;
					width: 33.3333%;
					font-size:  18px;
				    line-height: 2;
				    text-align: center;
				}
				&--1{
					li{
						width: 100%;
					}
				}
				&--2{
					li{
						width: 50%;
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
