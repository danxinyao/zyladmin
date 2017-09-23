<template>
    <section>
        <div class="bgs">
        <div class="customer_list">
            <div class="list" v-for="item in customerList" :key="item.session" @click="tapUser(item)" :class="{'check' : item.session == currentUser.session}">
                <el-badge :value="item.count">
                    <img :src="item.avatar" v-if="item.avatar">
                    <img src="../../../assets/images/home_guke.jpg" v-if="!item.avatar">
                </el-badge>
                <span>{{item.nickName}}</span>
            </div>
        </div>
        <div class="customer">
            <div class="customer_head clearfix">
                <div class="customer_head_left">
                    <img :src="currentUser.avatar" v-if="currentUser.avatar">
                    <img src="../../../assets/images/home_guke.jpg" v-if="!currentUser.avatar && currentUser.nickName">
                    <span>{{currentUser.nickName}}</span>
                </div>
            </div>
            <div class="customer_body" ref="customer">
                <div class="content_box" :class="[item.messageType == 1 ? 'r' : 'l']" :key="item.createTime" v-for="item in msgList">
                    <span class="time">{{item.createTime.split(' ')[1]}}</span>
                    <div class="content clearfix">
                        <div class="cover">
                            <img src="../../../assets/images/home_big.jpg" v-if="item.messageType === 1">
                            <img src="../../../assets/images/home_guke.jpg" v-if="!item.avatar && item.messageType === 0">
                            <img :src="item.avatar" v-if="item.avatar && item.messageType === 0">
                        </div>
                        <div class="msg">
                            {{item.content}}
                            <div class="arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="customer_foot clearfix">
                <textarea class="form-item-textarea content" placeholder="回复..." v-model="form.content" @keyup.enter="submit"></textarea>
                <a href="javascript:void(0)" class="submit" @click="submit">发送</a>
            </div>
        </div>
    </div>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .bgs {
        position: fixed;
        left: 260px;
        top: 140px;
        width: 850px;
        bottom: 40px;
        min-height: 400px;
        overflow: hidden;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 0 24px 0 rgba(15, 66, 76, .25);
    }
    .customer_list {
        position: absolute;
        left: 0;
        top: 0;
        width: 230px;
        bottom: 0;
        overflow-y: scroll;
        border-right: 1px #e5e5e5 solid;
        z-index: 1;
        .list {
            cursor: pointer;
            padding: 20px 10px;
            height: 40px;
            line-height: 40px;
            &.check {
                background: #eff0f4;
            }
            img {
                width: 40px;
                height: 40px;
                border-radius: 100%;
                overflow: hidden;
                display: block;
            }
            span {
                display: inline-block;
                font-size: 14px;
                color: #333;
                width: 140px;
                height: 40px;
                line-height: 40px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                vertical-align: top;
            }
            &:not(:last-child) {
                border-bottom: 1px #f2f2f2 solid;
            }
        }
    }
    .customer {
        position: absolute;
        left: 230px;
        width: 620px;
        bottom: 0;
        top: 0;
        overflow: hidden;
        .customer_head {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 60px;
            background: #f28100;
            padding: 10px 15px;
            box-sizing: border-box;
            .customer_head_left {
                float: left;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    overflow: hidden;
                    display: inline-block;
                }
                span {
                    display: inline-block;
                    font-weight: bold;
                    color: #fff;
                    font-size: 18px;
                    height: 40px;
                    line-height: 40px;
                    vertical-align: top;
                }
            }
        }
        .customer_body {
            position: absolute;
            left: 0;
            top: 60px;
            bottom: 120px;
            width: 100%;
            background: #f5f5f5;
            border-bottom: 1px #e5e5e5 solid;
            padding: 10px 15px;
            box-sizing: border-box;
            overflow-y: scroll;
            .content_box {
                .time {
                    display: block;
                    font-size: 12px;
                    color: #999;
                    text-align: center;
                    padding: 30px 0 15px 0;
                }
                .content {
                    .cover {
                        width: 25px;
                        height: 25px;
                        border-radius: 100%;
                        overflow: hidden;
                        background: #fff;
                        img {
                            width: 100%;
                        }
                    }
                    .msg {
                        display: inline-block;
                        font-size: 14px;
                        color: #333;
                        line-height: 1.5;
                        position: relative;
                        border-radius: 4px;
                        padding: 10px;
                        max-width: 80%;
                        box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
                        .arrow {
                            position: absolute;
                            top: 6px;
                            width: 0;
                            height: 0;
                            font-size: 0;
                            border: solid 8px;
                            overflow: hidden;
                        }
                    }
                }
            }
            .content_box.l {
                .cover {
                    float: left;
                }
                .msg {
                    margin-left: 15px;
                    background: #fff;
                    .arrow {
                        left: -16px;
                        border-color: transparent #fff transparent transparent;
                    }
                }
            }
            .content_box.r {
                .cover {
                    float: right;
                }
                .msg {
                    float: right;
                    margin-right: 15px;
                    background: #96e0ff;
                    .arrow {
                        right: -16px;
                        border-color: transparent transparent transparent #96e0ff;
                    }
                }
            }
        }
        .customer_foot {
            position: absolute;
            left: 0;
            width: 100%;
            bottom: 0;
            height: 120px;
            background: #fff;
            padding: 10px 15px;
            box-sizing: border-box;
            .content {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
                position: relative;
                outline: none;
                border: 0 none;
                width: 100%;
                overflow: hidden;
                background: none;
                background-color: transparent;
                font-size: 14px;
                line-height: 1.4;
                padding: 0;
                height: 75px;
                color: #333;
                resize: none;
            }
            .submit {
                float: right;
                display: block;
                width: 60px;
                height: 26px;
                line-height: 26px;
                color: #fff;
                background: #f28100;
                font-size: 14px;
                border-radius: 4px;
                text-align: center;
            }
        }
    }
</style>
<script type="text/babel">
    import customer from './customer'
    export default {
        ...customer
    }
</script>