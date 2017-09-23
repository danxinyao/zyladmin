<template>
    <el-button 
        type="text" 
        @click="handleClick">
        <span v-if="title">
            {{title}}
        </span>
        <span v-else>
            <slot></slot>
        </span>
    </el-button>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name : 'PgButton',
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: String,
            confirm: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapGetters([
                'localLoading'
            ])
        },
        methods: {
            handleClick(evt) {
                if (this.confirm) {
                    this.$confirm('确定'+ this.title +'吗？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$emit('click', evt)
                    }).catch(() => {

                    })
                }
                else {
                    this.$emit('click', evt)
                }
            }
        }
    }
</script>