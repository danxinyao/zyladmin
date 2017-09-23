<template>
    <pg-content>
        <!-- 搜索条件 -->
        <pg-search-form
            slot="search-form"
            v-model="query"
            :default-form="defaultQuery"
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
            :page-size="pageSize"
            :total="total">
        </pg-pagination>
        <!-- 编辑弹窗页 -->
        <pg-edit
            :title="editTitle"
            :show="showEdit"
            :isEdit="isEdit"
            :editForm="editForm"
            @close="closeEdit"
            @refresh="refresh">
        </pg-edit>
    </pg-content>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>