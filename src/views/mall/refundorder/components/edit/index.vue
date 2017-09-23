<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <!-- 高级搜索 -->
        <el-form ref="form" :model="form" label-width="100px" v-if="type === 0" :inline="true">
            <el-form-item label="订单号">
                <el-input v-model="form.condition.sheet" class="input_item" placeholder="请输入订单号"></el-input>
            </el-form-item>
            <el-form-item label="下单时间">
                <el-date-picker
                    v-model="form.condition.orderTime.begin"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
                &nbsp;&nbsp;至&nbsp;&nbsp;
                <el-date-picker
                    v-model="form.condition.orderTime.end"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="收货人">
                <el-input v-model="form.condition.linkMan" class="input_item" placeholder="请输入收件人姓名/手机号"></el-input>
            </el-form-item>
            <el-form-item label="收货地址">
                <pg-region :state.sync="form.condition.state" :city.sync="form.condition.city" :district.sync="form.condition.district"></pg-region>
            </el-form-item>
            <el-form-item label="商品名">
                <el-input v-model="form.condition.goodName" class="input_item" placeholder="请输入商品关键字"></el-input>
            </el-form-item>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">确定</el-button>
                <el-button size="small" @click="reset">清空</el-button>
                <!-- <el-button size="small" @click="close">返回</el-button> -->
            </el-form-item>
        </el-form>
        <!-- 订单详情 -->
        <div class="orderdetail" v-else>
            <el-steps :space="100" :active="active" class="flagTimeline">
                <el-step :title="item.text" :description="item.time" v-for="item in editForm.orderFlagTimeLine"></el-step>
            </el-steps>
            <div class="order_info">
                <span class="order_info_item">订单编号：{{ editForm.sheet }}</span>
                <div class="order_info_item">
                    订单状态:
                    <span v-if="editForm.flag === 0">待付款</span>
                    <span v-if="editForm.flag === 20">待发货</span>
                    <span v-if="editForm.flag === 30">ERP发货</span>
                    <span v-if="editForm.flag === 90">待收货</span>
                    <span v-if="editForm.flag === 100">交易完成</span>
                    <span v-if="editForm.flag === 95">已删除</span>
                    <span v-if="editForm.flag === 97">已取消</span>
                </div>
                <div class="order_info_item">
                    商城名称：售后订单
                   <!--  <span v-if="editForm.platformType === 1">紫云来商城</span>
                    <span v-if="editForm.platformType === 2">懿城商城</span>
                    <span v-if="editForm.platformType === 3">3茶都商城</span> -->
                </div>
            </div>
            <div class="order_content">
                <span class="title">收货人信息:</span>
                <p>{{editForm.linkMan}} ，{{editForm.mobile }}，<span>{{editForm.state }}</span><span>{{editForm.city }}</span><span>{{editForm.district }}</span>s<span>{{editForm.address }}</span></p>
            </div>
            <div class="order_content">
                <span class="title">订单备注:</span>
                <p>{{editForm.buyerMemo ? editForm.buyerMemo : '无'}}</p>
            </div>
            <div class="order_content">
                <span class="title">快递公司:</span>
                <p>{{ editForm.deliveryCompanyName ? editForm.deliveryCompanyName : '无' }}</p>
            </div>
            <div class="order_content">
                <span class="title">快递单号:</span>
                <p>{{editForm.deliverySheetId  ? editForm.deliverySheetId : '无'}}</p>
            </div>
            <div class="order_content">
                <span class="title">商品信息</span>
                <el-table :data="editForm.items" highlight-current-row border stripe style="width: 100%">
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
                    <el-table-column align="center" prop="price" label="单价" min-width="100">
                    </el-table-column>
                    <el-table-column align="center" prop="qty" label="数量" min-width="100"></el-table-column>
                    <el-table-column align="center" prop="" label="小计" min-width="100">
                        <template scope="scope">
                            <span>￥{{scope.row.amount}}</span>
                            <span class="activePrice">￥{{scope.row.oriAmount }}</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="price_item">
                    <span class="title"><span style="color: red;">{{editForm.totalQty }}</span>件商品，商品总额:</span><span class="price">￥{{editForm.itemAmount }}</span>
                </div>
                <div class="price_item">
                    <span class="title">运费:</span><span class="price">￥{{editForm.postFee }}</span>
                </div>
                <div class="price_item">
                    <span class="title">支付方式:</span><span class="price">{{editForm.postFee }}</span>
                </div>
            </div>
            <div class="order_content">
                <span class="title">退款信息</span>
                <el-table :data="list" highlight-current-row border stripe style="width: 100%">
                    <el-table-column align="center" prop="login" label="退款商品" min-width="300"></el-table-column>
                    <el-table-column align="center" prop="creater" label="退款类型" min-width="100">
                    </el-table-column>
                    <el-table-column align="center" prop="tele" label="退款原因" min-width="100"></el-table-column>
                    <el-table-column align="center" prop="creater" label="退款理由" min-width="100"></el-table-column>
                    <el-table-column align="center" prop="creater" label="退款金额" min-width="100"></el-table-column>
                    <el-table-column align="center" prop="creater" label="退款时间由" min-width="150"></el-table-column>
                    <el-table-column align="center" prop="creater" label="退款物流信息" min-width="150"></el-table-column>
                </el-table>
            </div>
        </div>
        <el-button @click="close" class="close_btn">返回</el-button>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .el-form-item_btns {
        display: block;
    }
    .close_btn {
        margin-top: 20px;
    }
    .flagTimeline {
        text-align: center;
    }
    .order_info {
        margin: 20px 0;
        background-color: #EFF2F7;
        height: 50px;
        line-height: 50px;
        font-size: 0;
        width: 100%;
        .order_info_item {
            display: inline-block;
            // padding-left: 20px;
            text-align: center;
            font-size: 16px;
            width: 30%;
            &:first-child {
                min-width: 270px;
            }
        }
    }
    .order_content {
        padding: 0 20px;
        border: 1px solid #E5E9F2;
        margin: 10px 0;
        .title {
            display: block;
            margin: 10px 0;
        }
        .price_item {
            margin: 15px;
            text-align: right;
            .title, .price {
                display: inline-block;
                width: 150px;
                text-align: right;
            }
        }
    }
    .activePrice {
        text-decoration: line-through;
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
