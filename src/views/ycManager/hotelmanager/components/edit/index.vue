<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="景点名称" prop="name" class="item">
                        <el-input v-model="form.name" class="input_item" placeholder="景点名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="联系电话" prop="linkTele" class="item">
                        <el-input v-model.number="form.linkTele" class="input_item" placeholder="联系电话"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>                   
            <el-form-item label="景点地址" prop="address">
                <pg-region :state.sync="form.state" :city.sync="form.city" :district.sync="form.district"></pg-region>
                <br>
                <el-input v-model="form.address" type="textarea" class="input_item" placeholder="详细地址"></el-input>
            </el-form-item> 
            <br>
            <el-row :gutter="40">
                <el-col :span="12">
                    <el-form-item label="景点坐标" class="item">
                        <el-input v-model.number="form.longitud" class="input_item" placeholder="经度">
                            <template slot="append">经度</template>
                        </el-input>
                        &nbsp;&nbsp;&nbsp;
                        <el-input v-model.number="form.latitude" class="input_item" placeholder="纬度" >
                            <template slot="append">纬度</template>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12"> 
                        <el-form-item label="提前预订时间" class="item">
                            <el-input v-model="form.bookTime" class="input_item" placeholder="提前多少小时">
                                <template slot="append">h</template>
                            </el-input>
                        </el-form-item>
                </el-col>
            </el-row>  
            <br>
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="保留时间" prop="keepTime" class="item">
                        <el-time-select
                            v-model="form.keepTime"
                            :picker-options="{
                                start: '08:00',
                                step: '00:05',
                                end: '18:00',
                            }"
                            placeholder="选择时间">
                        </el-time-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">      
                    <el-form-item label="退房时间" prop="overTime" class="item">
                        <el-time-select
                            v-model="form.overTime"
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
                    <el-form-item label="退款时间" prop="refundTime" class="item">
                        <el-time-select
                            v-model="form.refundTime"
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
            <el-form-item label="酒店主图" >
                <pg-img-upload :image="form.mainImg" @success="uploadSuccess"></pg-img-upload>
            </el-form-item> 
            <br>
            <el-form-item label="酒店副图" >
                <pg-img-upload multiple :imageList="form.imgUrls" @success="uploadMultipleSuccess"></pg-img-upload>
            </el-form-item> 
            <br>
            <el-form-item label="景点描述" >
                <el-input v-model="form.note" type="textarea" class="input_item" placeholder="请输入景点描述"></el-input>
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
