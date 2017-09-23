<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .wrapper {
        width: @base;
        position: relative;
        margin: 0 auto;
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgWrapper'
    }
</script>