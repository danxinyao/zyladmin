<!-- 积分商城 -->
<template>
    <div class="customView">
    <!-- =标签页 -->
        <el-tabs type="card" class="tabs" @tab-click="handleClick">
            <el-tab-pane label="紫云来商城"></el-tab-pane>
            <el-tab-pane label="懿城商城"></el-tab-pane>
            <el-tab-pane label="茶都商城"></el-tab-pane>
        </el-tabs>
        <!-- 搜索 -->
        <pg-search-form
            v-model="query.condition"
            :default-form="defaultQuery"
            :more="moreQuery"
            :resetForm="resetForm.condition"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <!-- 内容 -->
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
        <pg-orderdialog :size="dialogSize" :showDialog="showDialog" :dialogType="dialogType" :order="order" @closeDialog="closeDialog" @refresh="refresh"></pg-orderdialog>   
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
    .tabs {
        background-color: white;
    }
</style>