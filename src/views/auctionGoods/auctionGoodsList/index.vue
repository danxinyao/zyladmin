<template>
    <pg-content>
        <!-- 搜索条件 -->
        <pg-search-form
            slot="search-form"
            v-model="query"
            :reset-form="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            @search="search">
        </pg-search-form>
        <!-- 按钮 -->
        <pg-operations
            slot="operations" 
            :btns="operations" 
            @add="add" 
            @enable="enable"
            @disable="disable">
        </pg-operations>
        <!-- 表格 -->
        <pg-table
            slot="list-table"
            :list="goodsList"
            @select-change="selectChange"
            @edit="edit">
        </pg-table>
        <!-- 分页 -->
        <pg-pagination
            slot="pagination"
            @size-change="sizeChange"
            @current-change="currentChange"
            :page-size="query.pageSize"
            :total="total">
        </pg-pagination>
        <!-- 编辑弹窗页 -->
        <pg-edit 
            :title="editTitle" 
            :show="showEdit" 
            :isEdit="isEdit" 
            :editForm="editForm" 
            @refresh="getGoodsPageList"
            @close="closeEdit">
        </pg-edit>
    </pg-content>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>