<template>
    <section class="informationClassfiy">
        <el-tree
            :data="deptData"
            :props="defaultProps"
            :expand-on-click-node="false"
            :render-content="renderContent">
        </el-tree>
        <pg-edit :title="title" :show="showEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .btnList {
        display: block;
        width: 122px;
        float: right;
        margin-right: 45px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>