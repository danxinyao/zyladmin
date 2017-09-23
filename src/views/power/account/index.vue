<template>
    <!-- 账号管理 -->
    <div class="customer">
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations :btns="operations" @add="add"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                :list="accountList"
                @select-change="selectChange"
                @edit="edit"
                @disable="disable"
                @enable="enable"
                @del="del"
                @resetPass="resetPass">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :type="type" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>