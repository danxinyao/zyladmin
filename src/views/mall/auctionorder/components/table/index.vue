<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <!-- 商品列表 --> 
        <el-table-column type="expand" label="商品信息">
            <template scope="scope">
                <el-table :data="scope.row.items" highlight-current-row border style="width: 50%" class="skuTable">
                    <el-table-column align="center" prop="" label="商品名称" min-width="200">
                        <template scope="scope">
                            <div class="good">
                                <pg-img class="good-img" :src="scope.row.imgUrl ? scope.row.imgUrl : ''"></pg-img>
                                <div class="name-property">
                                    <p class="name">{{scope.row.name}}</p>
                                    <div class="property">
                                        <span class="property-item">{{scope.row.colorName}}</span>
                                        <span class="property-item">{{scope.row.sizeName}}</span>
                                        <span class="property-item">{{scope.row.otherName}}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" prop="price" label="金额" min-width="100">
                    </el-table-column>
                    <el-table-column align="center" prop="qty" label="数量" min-width="100">
                    </el-table-column>
                </el-table>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="sheet" label="订单号" min-width="200"></el-table-column>
        <el-table-column align="center" prop="name" label="买家" min-width="150"></el-table-column>
        <el-table-column align="center" prop="" label="实付金额" min-width="100">
            <template scope="scope">
                <span class="price">￥{{scope.row.totalAmount}}</span>
                <span class="price">￥(含运费{{scope.row.postFee}})</span>
                <el-button type="text" @click="changePrice(scope.row)">改价</el-button>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="note" label="卖家备注" min-width="200"></el-table-column>
        <el-table-column align="center" prop="buyerMemo" label="买家备注" min-width="200"></el-table-column>
        <el-table-column align="center" prop="creater" label="收货地" min-width="100">
            <template scope="scope">
                <span>{{scope.row.state }}</span><span>{{scope.row.city }}</span><span>{{scope.row.district }}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="订单状态" min-width="150">
            <template scope="scope">
                <span v-if="scope.row.flag === 0">待付款</span>
                <span v-if="scope.row.flag === 20">待发货</span>
                <span v-if="scope.row.flag === 30">ERP发货</span>
                <span v-if="scope.row.flag === 90">待收货</span>
                <span v-if="scope.row.flag === 100">交易完成</span>
                <span v-if="scope.row.flag === 95">已删除</span>
                <span v-if="scope.row.flag === 97">已取消</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="下单时间" min-width="180"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="250">
            <template scope="scope">
                <pg-button icon="chakan" @click="edit(scope.row)">查看详情</pg-button>
                <pg-button icon="chakan" @click="confirmPay(scope.row)">确认付款</pg-button>
                <pg-button icon="chakan" @click="noting(scope.row)">备注</pg-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .disable {
        color: red;
    }
    .good {
        text-align: left;
        .good-img {
            display: inline-block;
            width: 20%;
            vertical-align: middle;
        }
        .name-property {
            display: inline-block;
            margin-left: 8px;
            vertical-align: middle;
            width: 75%;
            .name {
                .lineClamp(2);
                margin: 5px 0;
            }
            .property {
                .property-item {
                    display: inline-block;
                    margin-right: 8px;
                }
            }
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>