<template>
	<div class="quick-link">
        <div class="box_title">{{title}}</div>
        <div class="link-group">
            <router-link class="el-button el-button--default" v-for="item in list" :key="item.title" :to="{path:item.path}">
                <i class="iconfont" :class="'icon-icon_' + item.icon" v-if="item.icon"></i> {{item.title}}
            </router-link>
        </div>
    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>