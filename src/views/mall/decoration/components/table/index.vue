<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @current-change="selectChange">
        <el-table-column align="center" prop="name" label="名称" min-width="200"></el-table-column>
        <el-table-column align="center" label="商品图片" min-width="200">
	        <template scope="scope">
                <pg-img :src="scope.row.imgUrl"></pg-img>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="price" label="价格" min-width="200"></el-table-column>
    </el-table>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .cell {
        img {
            display: block;
            width: 80px;
            height: 80px;
        }
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>