<!-- 广告位管理 -->
<template>
    <div class="advertisement">
        <div class="pg_content">
            <!-- 列表 -->
            <pg-table 
                :list="AdpositionList"
                @edit="edit">
            </pg-table>
        </div>	   	
    </div>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>