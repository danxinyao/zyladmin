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
            <!-- 列表 -->
            <el-table :data="exchangeLiat" highlight-current-row border style="width: 100%">
                <el-table-column align="center" prop="proName" label="商品名称" min-width="200"></el-table-column>
                <el-table-column align="center" prop="mobile" label="手机号" min-width="150"></el-table-column>
                <el-table-column align="center" prop="nick" label="昵称" min-width="150"></el-table-column>
                <el-table-column align="center" prop="integral" label="兑换条件" min-width="150"></el-table-column>
                <el-table-column align="center" prop="createTime" label="兑换时间" min-width="150"></el-table-column>
            </el-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="query.pageSize" :total="total"></pg-pagination>
        </div>   
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

</style>