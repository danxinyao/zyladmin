<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="景点名称" prop="name" class="item">
                        <el-input v-model="form.name" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="联系电话" prop="basShopDetail.linkTele" class="item">
                        <el-input v-model.number="form.basShopDetail.linkTele" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>                   
            <el-form-item label="景点地址" prop="basShopDetail.address">
                <pg-region :state.sync="form.basShopDetail.state" :city.sync="form.basShopDetail.city" :district.sync="form.basShopDetail.district"></pg-region>
                <br>
                <el-input v-model="form.basShopDetail.address" type="textarea" class="input_item"></el-input>
            </el-form-item> 
            <br>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="景点坐标" class="item">
                        <el-input v-model.number="form.basShopExt.longitud" class="input_item" placeholder="经度"></el-input>&nbsp;&nbsp;&nbsp;
                        <el-input v-model.number="form.basShopExt.latitude" class="input_item" placeholder="纬度" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8"> 
                        <el-form-item label="提前预订时间" class="item">
                            <el-input v-model="form.basShopExt.bookTime" class="input_item"></el-input>
                        </el-form-item>
                </el-col>
            </el-row>  
            <br>
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="开门时间" prop="basShopExt.beginTime" class="item">
                        <el-time-select
                            v-model="form.basShopExt.beginTime"
                            :picker-options="{
                                start: '08:00',
                                step: '00:05',
                                end: '18:00'
                            }"
                            placeholder="选择时间">
                        </el-time-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">      
                    <el-form-item label="打烊时间" prop="basShopExt.endTime" class="item">
                        <el-time-select
                            v-model="form.basShopExt.endTime"
                            :picker-options="{
                                start: '08:00',
                                step: '00:05',
                                end: '18:00'
                            }"
                            placeholder="选择时间">
                        </el-time-select>
                    </el-form-item>
                </el-col>
            </el-row>    
            <el-form-item label="景点主图" >
                <pg-img-upload :image="form.imgUrl" @success="uploadSuccess"></pg-img-upload>
            </el-form-item> 
            <br>
            <el-form-item label="景点副图" >
                <pg-img-upload multiple :imageList="form.imgUrls" @success="uploadMultipleSuccess"></pg-img-upload>
            </el-form-item> 
            <br>
            <el-form-item label="景点描述" >
                <el-input v-model="form.basShopDetail.note" type="textarea" class="input_item"></el-input>
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
