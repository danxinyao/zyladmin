<!-- 积分商城 -->
<template>
    <div class="customView">
        <!-- 搜索 -->
        <pg-search-form
            v-model="query.condition"
            :default-form="defaultQuery"
            :more="moreQuery"
            :resetForm="resetForm.condition"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search"
            class="search"
        >
        </pg-search-form>
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations :btns="operations" @record="record" @advanceSearch="advanceSearch"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                :list="customPageList"
                @soldOut="soldOut"
            >
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="query.pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" @close="closeEdit" @searchGoods="searchGoods"></pg-edit>         
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