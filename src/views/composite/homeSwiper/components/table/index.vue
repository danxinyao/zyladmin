<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <!-- <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column> -->
        <el-table-column align="center" prop="" label="图片" min-width="200">
            <template scope="scope">
                <pg-img :src="scope.row.imgUrl" class="img_src"></pg-img>
            </template>
        </el-table-column>
        <el-table-column align="center" label="移动" min-width="200">
            <template scope="scope">
                <div class="icon">
                    <el-button v-if="scope.$index !== 0" @click="sortPos(scope.$index, 0)">上移</el-button>
                    <el-button v-if="scope.$index !== (len - 1)" @click="sortPos(scope.$index, 1)">下移</el-button>
                </div>
            </template>
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <pg-button-group>
                    <pg-button icon="chakan" @click="edit(scope.row)">编辑</pg-button>
                    <pg-button icon="xiugai" @click="del(scope.row)">删除</pg-button>
                </pg-button-group>
            </template>
        </el-table-column>
    </el-table>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .img_src {
        height: 80px;
    }

</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>