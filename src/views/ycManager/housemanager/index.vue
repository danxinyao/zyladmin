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
            <pg-operations :btns="operations" @add="add" @able="able" @unable="unable"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                id="print_table"
                :list="hotelList"
                :roomList="roomList"
                @select-change="selectChange"
                @edit="edit"
                @expand="expand"
                @disabledRoom="disabledRoom"
                @enabledRoom="enabledRoom"
                @editRoomType="editRoomType">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :dropdownList="dropdownList" :title="editTitle" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @saveSuccess="saveClose"></pg-edit>
        <!-- 对话框 -->
        <!-- 对话框 -->
        <pg-orderdialog :size="dialogSize" :showDialog="showDialog" :hotelRoomTypeID="hotelRoomTypeID"  @closeDialog="closeDialog" @refresh="refresh"></pg-orderdialog>   
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>