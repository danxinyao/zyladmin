<!-- 积分商城 -->
<template>
    <div class="customView">
        <pg-search-form
            v-model="query.condition"
            :default-form="defaultQuery"
            :more="moreQuery"
            :resetForm="resetForm.condition"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search"
            class="search">
        </pg-search-form>
        <div class="pg_content">    
            <!-- 按钮 -->
            <pg-operations :btns="operations" 
            @exportOrder="exportOrder" 
            @confirmPay="confirmPay"
            @noting="noting"
            @del="del"
            @advanceSearch="advanceSearch"
            >
            </pg-operations>
            <!-- 列表 -->
            <pg-table 
                :list="customPageList"
                @select-change="selectChange"
                @edit="edit"
                @changePrice="changePrice"
                @confirmPay="confirmPay"
                @noting="noting"
            >
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="query.pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :type="type" :editForm="editForm" @close="closeEdit" @refresh="refresh" @searchOrder="searchOrder"></pg-edit> 
        <!-- 对话框 -->
        <pg-orderdialog :size="dialogSize" :showDialog="showDialog" :dialogType="dialogType" @closeDialog="closeDialog"></pg-orderdialog>        
    </div>
</template>

<script type="text/babel">
    import index from './index'

    export default {
        ...index
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .pg_content {
        padding: 0 20px;
    }

</style>