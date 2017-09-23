<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="所属酒店" prop="shopID" class="item">
<!--                         <el-input v-model="form.name" class="input_item" placeholder="景点名称"></el-input> -->
                        <el-select v-model="form.shopID" placeholder="请选择" label="所属酒店">
                          <el-option
                            v-for="item in dropdownList"
                            :key="item.value"
                            :label="item.text"
                            :value="item.value">
                          </el-option>
                        </el-select>                    
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="房型名称" prop="name" class="item">
                        <el-input v-model.number="form.name" class="input_item" placeholder="房型名称"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>                   
            <br> 
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="房型价格" prop="basePrice" class="item">
                        <el-input v-model="form.basePrice" class="input_item" placeholder="数字，单位元">
                            <template slot="append">元</template>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="房型面积" prop="area" class="item">
                        <el-input v-model.number="form.area" class="input_item" max="45" min="25" placeholder="面积区间，25-45">
                            <template slot="append">m<sup>2</sup></template>
                        </el-input>
                    </el-form-item>                  
                </el-col>
            </el-row>                   
            <br> 
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="餐饮" prop="dinnerType" class="item">
                        <!-- <el-input v-model="form.name" class="input_item" placeholder="景点名称"></el-input> -->
                        <el-select v-model="form.dinnerType" placeholder="请选择" label="所属酒店">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.text"
                            :value="item.value">
                          </el-option>
                        </el-select>                           
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="床铺大小" prop="bed" class="item">
                        <el-input v-model="form.bed" class="input_item" placeholder="如2*1.8">
                            <template slot="append">m</template>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>                   
            <br>                          
            <el-form-item label="房型主图" >
                <pg-img-upload :image="form.mainImg" @success="uploadSuccess"></pg-img-upload>
            </el-form-item> 
            <br>
            <el-form-item label="房型副图" >
                <pg-img-upload multiple :imageList="form.imgUrls" @success="uploadMultipleSuccess"></pg-img-upload>
            </el-form-item> 
            <br>
            <el-form-item label="房型描述" >
                <el-input v-model="form.description" type="textarea" class="input_item" placeholder="请输入房型描述"></el-input>
            </el-form-item> 
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
