<template>
    <el-table :data="list" highlight-current-row border stripe style="width: 100%" @selection-change="selectChange"   @expand="expand">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column> 
       <!-- 商品列表 --> 
        <el-table-column type="expand" label="商品信息">
            <template scope="scope">
                <!-- <el-table :data="scope.row.roomTypeID" highlight-current-row border style="width: 50%" class="skuTable"> -->
                <el-table :data="scope.row.roomList" highlight-current-row border style="width: 50%" class="skuTable">             
                    <el-table-column align="center" prop="name" label="房间名称/号" min-width="100">
                    </el-table-column>                    
                    <el-table-column align="center" prop="name" label="状态" min-width="100">
                        <template scope="scope">
                            <span v-if="scope.row.status==1" style="color:green">启用</span>
                            <span v-if="scope.row.status==0" style="color:red"> 停用</span>
                        </template>                    
                    </el-table-column>
                    <el-table-column align="center" prop="editor" label="修改人" min-width="100">
                    </el-table-column>
                    <el-table-column align="center" prop="editTime" label="修改时间" min-width="200">
                    </el-table-column> 
                    <el-table-column align="center" label="操作" min-width="100">
                        <template scope="scope">
                            <pg-button icon="shanchu" @click="disabledRoom(scope.row)">停用</pg-button>
                            <pg-button icon="shanchu" @click="enabledRoom(scope.row)">启用</pg-button>
                        </template>                    
                    </el-table-column>                                                          
                </el-table>
            </template>
        </el-table-column>              
        <el-table-column align="center" prop="name" label="房型名称" width="200"></el-table-column>
        <el-table-column align="center" prop="dinnerTypeDesc" label="餐饮" width="200">        
        </el-table-column>
        <el-table-column align="center" prop="basePrice" label="价格" width="100"></el-table-column>
        <el-table-column align="center" prop="hotelName" label="所属酒店" width="200"></el-table-column>
<!--         <el-table-column align="center" prop="status" label="状态1" width="200">
            <template scope="scope">
                <span v-if="scope.row.status==1" style="color:green">未满({{scope.row.remains}})</span>
                <span v-if="scope.row.status==0" style="color:red">已满(0)</span>
                <span v-if="scope.row.status==-1" style="color:red">停用</span>
            </template>
        </el-table-column> -->
        <el-table-column align="center" prop="remains" label="状态" min-width="100">
            <template scope="scope">
                <span v-if="scope.row.remains>0" style="color:green">未满({{scope.row.remains}})</span>
                <span v-if="scope.row.remains==0" style="color:red">已满(0)</span>
                <span v-if="scope.row.remains== -1 " style="color:red">停用</span>
            </template>                    
        </el-table-column>        
        <el-table-column align="center" prop="editor" label="修改人" width="200"></el-table-column>
        <el-table-column align="center" prop="editTime" label="修改时间" width="200"></el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="200">
            <template scope="scope">
                <pg-button icon="shanchu" @click="edit(scope.row)">编辑</pg-button>
                <pg-button icon="shanchu" @click="editRoomType(scope.row)">录入房型</pg-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    .mainImg {
        width: 60px;
        height: 60px;
        vertical-align: middle;
        margin-right: 10px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
