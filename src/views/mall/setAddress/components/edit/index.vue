<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="收/发货人" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="收货地址">
                <pg-region :state.sync="form.state" :city.sync="form.city" :district.sync="form.district"></pg-region>
            </el-form-item>           
            <el-form-item label="详细地址" prop="name">
                <el-input v-model="form.name"></el-input>              
            </el-form-item>  
            <el-form-item>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="1">默认发货地址</el-checkbox>
                    <el-checkbox label="2">默认退货地址</el-checkbox>
                </el-checkbox-group>             
            </el-form-item>                       
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
 </style> 

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
