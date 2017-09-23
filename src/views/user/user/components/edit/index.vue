<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <pg-title title="新用户"></pg-title>
            <el-form-item>
                <el-checkbox v-model="form.newUser">为首次注册的用户</el-checkbox>
            </el-form-item>                
            <pg-title title="活跃用户"></pg-title>
            <el-form-item>
                <el-radio v-model="form.activeUser" label="1">最近</el-radio>
                <el-input v-model="form.activeTime" style="width:150px"></el-input> 天内成交次数大于等于 <el-input v-model="form.activeTrade" style="width:150px"></el-input>                
            </el-form-item>
            <el-form-item>
                <el-radio v-model="form.activeUser" label="2">最近</el-radio>
                <el-input v-model="form.activeTime" style="width:150px"></el-input> 天内登录次数大于等于 <el-input v-model="form.activeTrade" style="width:150px"></el-input>
            </el-form-item>
            <pg-title title="沉睡用户"></pg-title>
            <el-form-item>
                <el-radio v-model="form.sleepUser" label="1">最近</el-radio>
                <el-input v-model="form.sleepTime" style="width:150px"></el-input> 天内成交次数大于等于 <el-input v-model="form.sleepTrade" style="width:150px"></el-input>                
            </el-form-item>
            <el-form-item>
                <el-radio v-model="form.sleepUser" label="2">最近</el-radio>
                <el-input v-model="form.sleepTime" style="width:150px"></el-input> 天内登录次数大于等于 <el-input v-model="form.sleepTrade" style="width:150px"></el-input>
            </el-form-item>
           <!--  <el-form-item label="新增">
                <el-button size="small" @click="add">新增</el-button>
            </el-form-item> -->
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>

        </div>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
