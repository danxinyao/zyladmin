<template>

    <!-- 客户管理 - 分销客户列表 -->
    <div class="customer">
        <!-- 搜索条件 -->
        <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations :btns="operations" @add="add"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                id="print_table"
                :list="customerList"
                @del="del"
                @edit="edit">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>

        <!-- 费用录入 -->
        <pg-goods :title="费用录入" :show="isShowGoods" :isEdit="isEdit" :editForm="editForm" @close="closeGoods" @refresh="search"></pg-goods>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>