<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="预订课室" prop="shopID" class="item">
                        <el-select v-model="form.shopID" placeholder="请选择">
                            <el-option v-for="item in roomList" :key="item.value" :label="item.text" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="预订课程" prop="courseID" class="item">
                        <el-select v-model="form.courseID" placeholder="请选择" >
                            <el-option v-for="item in classList" :key="item.value" :label="item.text" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>                   
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="数量" prop="totalQty" class="item">
                        <el-input v-model.number="form.totalQty" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="预订时间" prop="beginTime" class="item">
                        <el-date-picker
                            v-model="form.beginTime"
                            type="date"
                            placeholder="选择日期"
                            :default-value="defaultDate"
                            >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row> 
            <el-form-item label="实付款" prop="totalAmount" class="item">
                <el-input v-model.number="form.totalAmount" class="input_item"></el-input>
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
