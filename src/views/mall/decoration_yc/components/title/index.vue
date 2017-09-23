<template>
	<div class="mall_title">
	   —— <slot></slot> ——
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .mall_title {
    	text-align: center;
    	height: 80px;
    	line-height: 80px;
    	color: @second-color;
        font-size: 20px;
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>