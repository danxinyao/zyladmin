<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="门票类型名称" prop="name" class="item">
                        <el-input v-model="form.name" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="所属景点" prop="shopID" class="item">
                        <el-select v-model="form.shopID" placeholder="请选择">
                            <el-option v-for="item in ableScenic" :key="item.value" :label="item.text" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>                   
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="价格" prop="price" class="item">
                        <el-input v-model.number="form.price" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="有效期" prop="effectiveDay" class="item">
                        <el-input v-model.number="form.effectiveDay" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>  
            
            <el-form-item label="门票描述" >
                <el-input v-model="form.description" type="textarea" class="input_item"></el-input>
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
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .item{
        width: 100%;
    }
    .input_item{
        width: 200px;
        
    }
    
</style>
