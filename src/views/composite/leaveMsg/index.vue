<template>
    <!-- 留言 - 留言管理 -->
    <div class="leaveMsg">
        <div class="pg_content">
            <!-- 列表 -->
            <pg-table 
                id="print_table"
                :list="customerList">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>