<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
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
                :list="customerList">
            </pg-table>
            <!-- 分页 -->
            <div class="all">
                <pg-pagination class="pagination" slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total">
                </pg-pagination>
                <div class="tatal">共记 4 笔，总计￥ 89</div>
            </div>
        </div>        
        <el-form>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
        </div>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .all {
        position: relative;
    }
    .tatal {
        position: absolute;
        top: 0;
        right:0;
        width: 200px;
        line-height: 32px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
