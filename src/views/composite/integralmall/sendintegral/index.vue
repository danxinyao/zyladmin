<template>
    <!-- 送积分 -->
    <el-form label-width="120px" label-position="top">
        <el-form-item label="签到送积分">
            <label class="form_item">
                <span class="title">签到一次奖励</span>
                <el-input v-model.number="form[0].params" class="input_item"></el-input>分
                <span class="introduction">每日只记一次签到生效</span>
            </label>
            <label class="form_item">
                <span class="title">新用户签到奖励</span>
                <el-input v-model.number="form[1].params" class="input_item"></el-input>分
            </label>
        </el-form-item>
        <el-form-item label="购物送积分">
            <label class="form_item">
                <el-radio class="title" v-model="form[2].params" :label="0">订单总额满</el-radio>
                <el-input v-model.number="form[3].params" class="input_item"></el-input>元，奖励1分（不含运费）
            </label>
            <label class="form_item">
                <el-radio class="title" v-model="form[2].params" :label="1">单笔订单满</el-radio>
                <el-input v-model.number="form[4].params" class="input_item"></el-input>元 ，奖励
                <el-input v-model.number="form[5].params" class="input_item"></el-input>（不含运费）
            </label>
        </el-form-item>
        <el-form-item label="分享送积分">
            <label class="form_item">
                <span class="title">分享成功一次奖励</span>
                <el-input v-model.number="form[6].params" class="input_item"></el-input>分
                <span class="introduction">被分享者为首次授权用户</span>
            </label>
            <label class="form_item">
                <el-checkbox v-model="form[8].params" class="title" :true-label="1" :false-label="0">每人/每天最多送</el-checkbox>
                <el-input v-model.number="form[7].params" class="input_item"></el-input>分，超过不赠送积分
            </label>
        </el-form-item>
        <el-form-item label="完善送积分">
            <label class="form_item">
                <span class="title">完善资料奖励</span>
                <el-input v-model.number="form[9].params" class="input_item"></el-input>分
            </label>
            <div class="check_group">
                <el-checkbox v-model="form[10].params" :true-label="1" :false-label="0">收货地址</el-checkbox>
                <el-checkbox v-model="form[11].params" :true-label="1" :false-label="0">用户头像</el-checkbox>
                <el-checkbox v-model="form[12].params" :true-label="1" :false-label="0">用户名称</el-checkbox>
                <el-checkbox v-model="form[13].params" :true-label="1" :false-label="0">证件号</el-checkbox>
            </div>
        </el-form-item>
        <el-form-item class="el-form-item_btns">
            <el-button size="small" type="primary" @click="save">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .form_item {
        margin-left: 50px;
        display: block;
        margin-top: 20px;
        .title {
            display: inline-block;
            width: 120px;
            text-align: right;
        }
        .input_item {
            display: inline-block;
            width: 200px;
            margin: 0 10px;
        }
        .introduction {
            display: block;
            color: #99A9BF;
            margin-left: 130px;
            width: 200px;
        }
    }
    .check_group {
        margin-left: 180px;
        margin-top: 10px;
    }
</style>