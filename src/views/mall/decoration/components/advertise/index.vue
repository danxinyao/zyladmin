<template>
	<div class="advertise clearfix">
		<ul>
			<li class="left" v-for="item in list">
				<a href="javascript:void(0)">
					<pg-img :src="item.imgUrl"></pg-img>
				</a>
                <router-link class="edit-mask" :to="{path: '/homeSwiper?pageType=14'}"><span>点击进入编辑</span></router-link>
			</li>
		</ul>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .advertise {
    	margin-top: 30px;
    	li {
            position: relative;
            float: left;
            width: 230px;
            height: 140px;            
    		margin-right: 10px;
    		&:nth-of-type(5n) {
    			margin-right: 0;
    		}
    		img{
    			display: block;
    			width: 230px;
    			height: 140px;
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
            display: block;
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