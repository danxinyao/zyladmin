<template>
    <!-- 商城装修 -->
    <div class="customer">
        <div class="pg_content">
            <div class="mall">
                <pg-wrapper>
                    <!-- 大banner -->
                    <zy-banner></zy-banner>
                    <!-- 导航 -->
                    <zy-nav></zy-nav>
                </pg-wrapper>
                <!-- xiao广告位 -->
                <pg-wrapper>
                    <zy-advertise></zy-advertise>
                </pg-wrapper>
                <pg-wrapper v-for='(list,index) in mallList'>
                    <zy-list 
                    :list="list.items" :title="list.name" :isShowName="list.isName" :isShowPrice="list.isPrice" :isShowNote="list.isNote" :isShowUp="index != 0" :isShowDown="index != mallList.length-1" 
                    @editGoods="editGoods" @edit="edit(list)" @moveUp="moveUp(list.goodsColumnId)" @moveDown="moveDown(list.goodsColumnId)" @dele="dele(list.goodsColumnId)"></zy-list>
                </pg-wrapper>
            </div>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit"></pg-edit>
        <!-- 商品保存弹窗 -->
        <el-dialog title="商品保存弹窗" :visible.sync="saveGoodsVisible">
            <!-- 列表 -->
            <pg-table :list="goodsList" @select-change="selectChange"></pg-table> 
            <!-- 分页 -->
            <div>
                <pg-pagination
                    slot="pagination"
                    @current-change="currentChange"
                    :page-size="query.pageSize"
                    :total="total">
                </pg-pagination>  
            </div>   
            <div slot="footer" class="dialog-footer">
                <el-button @click="saveGoodsVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveGoods">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .customer {
        min-width: @base + 40px;
    }
    .mall {
        width: @base;
        margin-left: auto;
        margin-right: auto;
    }
</style>  

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>