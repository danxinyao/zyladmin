<template>
    <pg-dialog :isShow="showDialog" @close="close" :size="size">
        <div class="dialog_content">
            <!-- 修改备注 -->
            <div class="" v-if="dialogType === 0">
                <h3>修改备注</h3>
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入备注内容"
                  v-model="note"
                  class="textarea"
                  >
                </el-input>
            </div>
            <!-- 拒绝退款 -->
            <div class="" v-if="dialogType === 1">
                <h3>拒绝退款</h3>
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入拒绝理由"
                  v-model="reason"
                  class="textarea"
                  >
                </el-input>
            </div>
            <!-- 同意退款并退货 -->
            <!-- <div class="" v-if="dialogType === 2">
                <h3>同意退款并退货</h3>
                <span class="refundAddress">选择退货地址</span>
                <el-select v-model="address" placeholder="请选择">
                    <el-option
                        v-for="item in adressList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div> -->
            <el-form ref="form" v-if="dialogType === 2" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="收货人" prop="linkMan">
                    <el-input v-model="form.linkMan" placeholder="请输入收货人的名字"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="linkTel">
                    <el-input v-model="form.linkTel" placeholder="请输入收货人的联系方式"></el-input>
                </el-form-item>
                <el-form-item label="城市" required prop="district">
                    <pg-region :state.sync="form.state" :city.sync="form.city" :district.sync="form.district"></pg-region>
                </el-form-item>
                <el-form-item label="详细地址" prop="address">
                    <el-input v-model="form.address" placeholder="请输入详细的收货地址"></el-input>
                </el-form-item>
            </el-form>
            <div class="btns">
                <el-button @click="save">保存</el-button>
                <el-button @click="close">关闭</el-button>
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
        margin: 20px 50px;
    }
    .refundAddress {
        display: inline-block;
        margin: 30px 10px 20px 50px;
    }
</style>
