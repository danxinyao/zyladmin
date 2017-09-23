<template>
    <!-- 用户 - 用户管理 -->
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
            <pg-operations :btns="operations" @add="add" @able="able"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                id="print_table"
                :list="classOrderList"
                @select-change="selectChange"
                @changeCultureCode="changeCultureCode"
                @cancelCultureOrder="cancelCultureOrder">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :roomList='roomList' :classList="classList" :title="editTitle" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @saveSuccess="saveClose"></pg-edit>

    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>