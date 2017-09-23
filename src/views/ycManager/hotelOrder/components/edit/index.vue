<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="联系人" prop="linkMan" class="item">
                        <el-input v-model="form.linkMan" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="联系电话" prop="linkTel" class="item">
                        <el-input v-model="form.linkTel" class="input_item"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>  
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="预订酒店" prop="shopID" class="item">
                        <el-select v-model="form.shopID" placeholder="请选择" @change="changeHotel">
                            <el-option v-for="item in hotelList" :key="item.value" :label="item.text" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="预订房型" prop="roomTypeID" class="item">
                        <el-select v-model="form.roomTypeID" placeholder="请选择" @change="changeRoomType">
                            <el-option v-for="item in roomList" :key="item.value" :label="item.text" :value="item.value">
                            </el-option>
                        </el-select>
                        <span>{{basePrice}}</span>
                    </el-form-item>
                </el-col>
            </el-row>                   
            <el-row :gutter="40">
                 <el-col :span="8">
                    <el-form-item label="入住时间" prop="planOpenTime" class="item">
                        <el-date-picker
                            v-model="form.planOpenTime"
                            type="date"
                            placeholder="选择日期"
                            >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="离店时间" prop="planEndTime" class="item">
                        <el-date-picker
                            v-model="form.planEndTime"
                            type="date"
                            placeholder="选择日期"
                            >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                        <el-form-item label="数量" prop="qty" class="item">
                            <el-input v-model.number="form.qty" class="input_item"></el-input>
                        </el-form-item>
                </el-col>
            </el-row> 
            <el-row :gutter="40">
                <el-col :span="8">
                        <el-form-item label="实际价格" prop="price" class="item">
                            <el-input v-model.number="form.price" class="input_item"></el-input>
                        </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="备注" class="item">
                <el-input v-model.number="form.note" type="textarea" class="input_item"></el-input>
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
