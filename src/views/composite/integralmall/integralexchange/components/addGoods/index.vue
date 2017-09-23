<template>
    <pg-dialog :isShow="showDialog" @close="close">
        <div class="pg_content">
            <h3>选择商品</h3>
            <!-- 搜索条件 -->
            <pg-search-form
                v-model="query.condition"
                :default-form="defaultQuery"
                :more="moreQuery"
                :is-show-more="isShowMoreQuery"
                @openMore="toggleOpen"
                slot="search-form"
                @search="search">
            </pg-search-form>
            <!-- 列表 -->
            <el-table :data="goodList" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange" ref="multipleTable">
                <el-table-column align="center" fixed="left" type="selection" width="55">
                </el-table-column>
                <el-table-column align="center" prop="" label="商品" min-width="300">
                    <template scope="scope">
                        <div class="good">
                            <pg-img :src="scope.row.img ? scope.row.img : ''" class="good-img"></pg-img>
                            <div class="good-name-price">
                                <div class="good-name">{{ scope.row.goodsName }}</div>
                                <p class="good-price">￥{{ scope.row.goodPrice }}</p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="qty" label="库存" min-width="200"></el-table-column>
            </el-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="query.pageSize" :total="total"></pg-pagination>
            <el-button class="save_btn" @click="save">确定</el-button>
        </div>
    </pg-dialog>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .pg_content {
        padding: 0;
        .save_btn {
            margin: 20px;
        }
    }
    .good {
        text-align: left;
        padding: 10px;
        .good-img {
            display: inline-block;
            width: 20%;
            vertical-align: top;
        }
        .good-bg-img {
            display: inline-block;
            width: 80px;
            vertical-align: top;
            height: 80px;
            background-color: #E5E9F2;
        }
        .good-name-price {
            display: inline-block;
            width: 70%;
            margin-left: 10px;
            vertical-align: top;
            .good-name, .good-price {
                margin: 5px 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    
</style>
