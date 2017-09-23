<template>
    <pg-dialog :isShow="showDialog" @close="close" :size="size">
        <div class="dialog_content">
            <!-- 修改备注 -->
            <div class="" v-if="dialogType === 0" class="note">
                <h3>修改备注</h3>
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入备注内容"
                  v-model="noteForm.note"
                  class="textarea"
                  >
                </el-input>
            </div>
            <!-- 修改价格 -->
            <div class="modifyPrice" v-if="dialogType === 1">
                <h3 class="title">修改价格</h3>
                <div class="header">
                    <span class="header-item">名称</span><span class="header-item">数量</span><span class="header-item">单价</span><span class="header-item">折扣优惠</span><span class="header-item">邮费</span><span class="header-item">应付总额</span>
                </div>
                <div class="table-body">
                    <div class="body-left">
                        <div class="left-item" v-for="item in order.items">
                            <span class="td-item">{{item.name}}</span>
                            <span class="td-item">{{item.qty}}</span>
                            <span class="td-item">{{item.price}}</span>
                            <div class="td-item">
                                <span v-if="item.oriAmount !== 0">{{item.amount/item.oriAmount}}</span>
                                <span v-else>0</span>
                            </div>
                        </div>
                    </div>
                    <div class="body-right">
                        <el-input v-model="order.postFee" class="input-item"></el-input>
                    </div>
                    <div class="body-right">
                        <el-input v-model="order.totalAmount" class="input-item" ></el-input>
                    </div>
                </div>
                <div class="totalPrice">
                    优惠后实付：￥{{order.totalAmount}}
                </div>
            </div>
            <div class="btns">
                <el-button @click="save">保存</el-button>
                <el-button @click="close">关闭</el-button>
            </div>
        </div> 
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
    .btns {
        margin: 20px auto;
    }
    .totalPrice {
        font-size: 14px;
        margin-top: 10px;
    }
    .modifyPrice {
        width: 100%;
        .header {
            display: table;
            width: 96%;
            border: 1px solid rgba(199, 205, 225, 0.5);
            .header-item {
                display: table-cell;
                width: 16%;
                text-align: center;
                padding: 10px;
                border-right: 1px solid rgba(199, 205, 225, 0.5);
                &:last-child {
                    border-right: none;
                }
            }
        }
        .table-body {
            display: table;
            width: 96%;
            border: 1px solid rgba(199, 205, 225, 0.5);
            border-top: none;
            .body-left {
                display: table-cell;
                width: 64%;
                vertical-align: middle;
                .td-item {
                    display: table-cell;
                    width: 25%;
                    text-align: center;
                    padding: 10px;
                    border-right: 1px solid rgba(199, 205, 225, 0.5);
                    border-bottom: 1px solid rgba(199, 205, 225, 0.5);
                    vertical-align: middle;
                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
            .body-right {
                display: table-cell;
                width: 16%;
                vertical-align: middle;
                border-right: 1px solid rgba(199, 205, 225, 0.5);
                padding: 0 5px;
            }
        }
    }
</style>
