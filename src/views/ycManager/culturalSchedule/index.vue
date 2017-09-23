<template>
    <!-- 文化课程表 -->
    <div class="customer">
        <div class="pg_content">
            <div class="operation">
                课室
                <el-select v-model="shopId" placeholder="请选择" class="room">
                    <el-option
                      v-for="item in classRoomList"
                      :key="item.value"
                      :label="item.text"
                      :value="item.value">
                    </el-option>
                </el-select>
                年月
                <el-date-picker
                    v-model="yearmonth"
                    type="month"
                    placeholder="选择年月"
                    class="month"
                >
                </el-date-picker>
            </div>
            <table class="calender-wrape" cellspacing="0" bordercolor="#ccc" cellpadding="0" border="1">
                <thead>
                    <th class="calender">
                        <td class="calender-item">日</td>
                        <td class="calender-item">一</td>
                        <td class="calender-item">二</td>
                        <td class="calender-item">三</td>
                        <td class="calender-item">四</td>
                        <td class="calender-item">五</td>
                        <td class="calender-item">六</td>
                    </th>
                </thead>
                <tbody>
                    <tr class="calender" v-for="item in calender">
                        <td class="calender-item" v-for="day in item" @click="showDialog(day, 0)">
                            <span :class="[day.hasEdit === true ? 'greencolor' : 'redcolr']">{{day.value}}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-group">
                <el-button class="btn-item" @click="showDialog('', 1)">排课</el-button>
                <el-button class="btn-item" @click="showDialog('', 2)">复制课表</el-button>
            </div>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :editType="editType" :editForm="editForm" @close="closeEdit" 
        @refresh="refresh"></pg-edit>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .operation {
        margin: 10px 0;
        padding-left: 50px;
        .room {
            margin-left: 10px;
            margin-right: 100px;
        }
        .month {
            margin-left: 10px;
        }
    }
    .calender-wrape {
        width: 90%;
        margin-top: 80px;
        margin-left: 50px;
        margin-bottom: 30px;
        .calender {
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 0;
            .calender-item {
                height: 40px;
                display: inline-block;
                font-size: 14px;
                width: 14%;
                cursor: pointer;
            }
        }
    }
    .greencolor {
        color: #13CE66;
    }
    .redcolr {
        color: red;
    }
    .btn-group {
        margin-left: 50px;
        .btn-item {
            margin-right: 20px;
        }
    }
</style>