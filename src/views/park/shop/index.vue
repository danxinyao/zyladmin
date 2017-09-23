<template>
    <!-- 商户管理 -->
    <div class="customer">
        <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations
                :btns="operations"
                @add="add">
            </pg-operations>
            <!-- 列表 -->
            <pg-table
                id="print_table"
                :list="customerList"
                @edit="edit"
                @del="delUser">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination
                slot="pagination"
                @size-change="sizeChange"
                @current-change="currentChange"
                :page-size="pageSize"
                :total="total">
            </pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit
            :title="editTitle"
            :show="showEdit"
            :isEdit="isEdit"
            :editForm="editForm"
            @close="closeEdit"
            @refresh="search">
        </pg-edit>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>