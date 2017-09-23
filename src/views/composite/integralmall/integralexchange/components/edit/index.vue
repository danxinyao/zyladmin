<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="130px" :rules="rules">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="form.name" style="width: 50%;"></el-input>
            </el-form-item>
            <el-form-item label="活动banner">
                <pg-img-upload tip="只能上传.png、.jpg格式的图片" :image="form.imgUrl" @success="uploadSuccess"></pg-img-upload>
            </el-form-item>
            <el-form-item label="活动兑换条件描述">
                <el-input type="textarea" :rows="5" v-model="form.description" style="width: 50%;"></el-input>
            </el-form-item>
            <el-form-item label="适用会员">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全部会员</el-checkbox>
                <el-checkbox-group v-model="memberGradeList" @change="handleCheckedCitiesChange">
                    <el-checkbox :key="item.memberGradeID" :label="item.memberGradeID" v-for="item in memberList">{{ item.name }}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="有效期">
                <el-date-picker
                    v-model="form.beginTime"
                    type="datetime"
                    placeholder="选择开始时间">
                </el-date-picker>
                &nbsp;&nbsp;至&nbsp;&nbsp;
                <el-date-picker
                    v-model="form.endTime"
                    type="datetime"
                    placeholder="选择结束时间">
                </el-date-picker>
            </el-form-item>
        </el-form>
        <!-- 兑换商品 -->
        <div class="exchangeGoods">
            <h3 class="title">兑换商品</h3>
            <el-button type="primary" class="add_btn" @click="addGoods">添加商品</el-button>
            <el-table :data="goodsList" highlight-current-row border stripe style="width: 100%" class="good_list">
                <el-table-column align="center" prop="" label="商品" min-width="250">
                    <template scope="scope">
                        <div class="good">
                            <pg-img :src="scope.row.img ? scope.row.img : ''" class="good-img"></pg-img>
                            <div class="good-name-price">
                                <div class="good-name">{{ scope.row.goodsName }}</div>
                                <p class="good-price">￥{{ scope.row.goodPrice}}</p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="url" label="库存" min-width="100"></el-table-column>
                <el-table-column align="center" prop="" label="兑换总量" min-width="100">
                    <template scope="scope">
                        <el-input v-model="scope.row.maxQty"></el-input>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="" label="兑换所需积分" min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.integral"></el-input>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="" label="兑换价" min-width="100">
                    <template scope="scope">
                        <el-input v-model="scope.row.price"></el-input>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="" label="每人限购数" min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.maxBuy"></el-input>
                    </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" min-width="100">
                    <template scope="scope">
                        <pg-button icon="xiugai" @click="del(scope.row, $index)">删除</pg-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="btns">
            <el-button size="small" type="primary" @click="save">保存</el-button>
            <el-button size="small" @click="close">返回</el-button>
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
    .exchangeGoods {
        padding: 0 20px;
        .title {
            color: #8492A6;
            font-weight: normal;
            margin: 10px 0;
        }
        .add_btn, .good_list {
            margin: 20px;
        }
    }
    .btns {
        margin-top: 40px;
        margin-left: 50px;
    }
    .good {
        text-align: left;
        padding: 10px;
        .good-img {
            display: inline-block;
            width: 30%;
            vertical-align: top;
        }
        .good-name-price {
            display: inline-block;
            width: 60%;
            margin-left: 10px;
            vertical-align: top;
            .good-name, .good-price {
                margin: 5px 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
</style>
