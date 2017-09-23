<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="'logo-width'">
                {{ sysName }}
            </el-col>
            <el-col :span="10">
                <div class="tools">
                </div>
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="click" @command="handleDropdown">
                    <span class="el-dropdown-link userinfo-inner">
                        <img :src="this.userInfo.head">
                        {{ this.userInfo.name }}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <aside>
                <el-menu default-active="index1" theme="dark" router>
                    <el-submenu :index="'index' + (menuIndex + 1)" v-for="(menu, menuIndex) in menuList">
                        <template slot="title">
                            <i :class="menu.iconCls"></i>
                            {{ menu.name }}
                        </template>
                        <el-menu-item :index="child.path" v-for="child in menu.children">
                            {{ child.name }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </aside>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <strong class="title">
                            {{ $route.meta.title }}
                        </strong>
                    </el-col>
                    <el-col :span="24" class="content-wrapper">
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        background: #f5f5f5;
        .header {
            height: 60px;
            line-height: 60px;
            background: #20a0ff;//#20a0ff
            color:#fff;
            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;
                .userinfo-inner {
                    cursor: pointer;
                    color:#fff;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin: 10px 0px 10px 10px;
                        float: right;
                    }
                }
            }
            .logo {
                //width:230px;
                height:60px;
                font-size: 22px;
                padding-left:20px;
                padding-right:20px;
                border-color: rgba(238,241,146,0.3);
                border-right-width: 1px;
                border-right-style: solid;
                img {
                    width: 40px;
                    float: left;
                    margin: 10px 10px 10px 18px;
                }
                .txt {
                    color:#fff;
                }
            }
            .logo-width{
                width:230px;
            }
            .logo-collapse-width{
                width:60px
            }
            .tools{
                padding: 0px 23px;
                width:14px;
                height: 60px;
                line-height: 60px;
                cursor: pointer;
            }
        }
        .main {
            display: flex;
            position: absolute;
            top: 60px;
            bottom: 0px;
            overflow: hidden;
            aside {
                flex: 0 0 230px;
                width: 230px;
                height: 100%;
                background: #282e37;
                .el-menu {
                    height: 100%;
                    overflow-y: scroll;
                    overflow-x: hidden;
                }
                .collapsed {
                    width: 60px;
                    .item{
                        position: relative;
                    }
                    .submenu {
                        position: absolute;
                        top: 0px;
                        left: 60px;
                        z-index: 99999;
                        height: auto;
                        display: none;
                    }

                }
            }
            .menu-collapsed {
                flex: 0 0 60px;
                width: 60px;
            }
            .menu-expanded {
                flex: 0 0 230px;
                width: 230px;
            }
            .content-container {
                flex: 1;
                overflow-y: scroll;
                padding: 20px;
                .breadcrumb-container {
                    padding: 0 20px;
                    margin-bottom: 20px;
                    .title {
                        font-size: 24px;
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        float: right;
                    }
                }
                .content-wrapper {
                    box-sizing: border-box;
                }
            }
        }
    }
    .fade-enter-active {
        animation: fade-in .5s
    }
    .fade-leave-active {
        opacity: 0
    }
    @keyframes fade-in {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>