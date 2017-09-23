<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">入住信息</div>
        <el-button size="small" type="primary" @click="addPerson">增加</el-button>
        <br/><br/>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row :gutter="40">
                <el-col :span="8">
                     <el-form-item label="入住人姓名" prop="linkName" class="item" label-width="100">
                        <el-input v-model.number="form.linkName" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="证件号码" prop="certNo" class="item">
                        <el-input v-model.number="form.certNo" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="40" v-for="(item,v) in form.personInfo"> 
                <el-col :span="8">
                     <el-form-item label="入住人姓名"  class="item" label-width="100">
                        <el-input v-model.number="item.linkName" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="证件号码" class="item">
                        <el-input v-model.number="item.certNo" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item  class="item">
                        <el-button  @click="remove(v)">删除</el-button>
                    </el-form-item>
                </el-col>
            </el-row>                     
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="房间名称/号" prop="courseID" class="item" label-width="100">
                        <el-select v-model="form.courseID" placeholder="请选择" >
                            <el-option v-for="item in freeRoomList" :key="item.value" :label="item.text" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="联系方式"  class="item">
                        <el-input v-model="form.linkTel" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
            </el-row> 

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
