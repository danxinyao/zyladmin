<template>
    <pg-content>
        <!-- 搜索条件 -->
        <pg-search-form
            slot="search-form"
            v-model="query.condition"
            :reset-form="query.condition"
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
            @exportData="exportData" 
            >
        </pg-operations>
        <!-- 表格 -->
        <pg-table slot="list-table" :list="goodsList">
        </pg-table>
        <!-- 分页 -->
        <pg-pagination
            slot="pagination"
            @size-change="sizeChange"
            @current-change="currentChange"
            :page-size="query.pageSize"
            :total="total">
        </pg-pagination>
    </pg-content>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>