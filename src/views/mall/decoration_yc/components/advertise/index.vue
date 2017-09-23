<template>
	<div class="advert">
		<ul class="clearfix">
			<li class="left" v-for="n in 3">
				<a href="javascript:void(0)">
					<img src="~assets/images/yc_advert_01.jpg"  alt="">
				</a>
                <router-link class="edit-mask" :to="{path: '/mall'}"><span>点击进入编辑</span></router-link>
			</li>
		</ul>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .advert {
        height: 150px;
        margin-bottom: 12px;
        li {
            position: relative;
            width: 386px;
            height: 150px;
            float: left;
            margin-right: 15px;
            &:last-of-type {
                margin: 0;
            }
            img{
                display: block;
                width: 100%;
                height: auto;
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