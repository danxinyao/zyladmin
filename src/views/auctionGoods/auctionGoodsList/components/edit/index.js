import { cloneDeep } from 'lodash'
import { goods, auction, dropdown } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                deptID: '', // 商品类目
                auctionItemID: '', // 拍品id
                auctionID: '', // 拍品专场id
                title: '', // 商品名称
                barcodeID: '', // 商品id
                description: '', // 描述
                content: '', // 内容
                provider: '', // 送拍机构
                beginPrice: '', // 起拍价
                guarantee: '', // 保证金
                minStepPrice: '', // 每次最小加价
                maxStepPrice: '', // 每次最大加价
                topPrice: '', // 封顶价
                price: '', // 当前价
                offerCount: '', // 出价次数
                memberID: '', // 当前拍卖人
                beginTime: '', // 开始时间
                endTime: '', // 结束时间
                status: '', // 状态
                goodsStatus: 1, // 拍品状态
                imgUrl: '', // 主图
                subImgUrls: [], // 副图
                postFee: '', // 固定运费
                freightTemplateID: '', // 运费模板
                long: '', // 长度
                width: '', // 宽度
                heigh: '', // 高度
                weigh: '' // 物流重
            },
            deptId: [], // 商品分类
            treeList: [], // 商品分类
            auctionList: [], // 专场
            freightTemplateList: [], // 运费模板
            content: '', // 编辑器初始显示值
            activeName: 'info'
        }
    },
    computed: {
        ...mapGetters([
            'localLoading'
        ])
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        },
        treeList() {
            if (this.isEdit) {
                this.setGoodsTree()
            }
        }
    },
    mounted() {
        if (!this.isEdit) {
            this.resetForm()
        }

        this.getGoodsTree()
        this.getAuctionPageList()
        this.getFreightTemplateList()
    },
    created() {
        this.setForm(this.editForm)
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.content = ''
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.content = this.form.content // 初始化编辑器内容
                
                 if (this.treeList.length > 0) {
                    this.setGoodsTree()
                }
            }
            else {
                this.resetForm()
            }

            this.$nextTick(() => {
                if (this.$refs.contentEditor) {
                    this.$refs.contentEditor.updateEditor()
                }
            })
        },
        // 获取商品分类
        getGoodsTree() {
            goods.getGoodsTree().then((result) => {
                result.forEach((item1) => {
                    const tempItem1 = {
                        value: item1.deptID,
                        label: item1.name,
                        children: []
                    }
                    item1.subItems.forEach((item2) => {
                        const tempItem2 = {
                            value: item2.deptID,
                            label: item2.name,
                            children: []
                        }
                        item2.subItems.forEach((item3) => {
                            const tempItem3 = {
                                value: item3.deptID,
                                label: item3.name,
                                children: []
                            }
                            item3.subItems.forEach((item4) => {
                                const tempItem4 = {
                                    value: item4.deptID,
                                    label: item4.name
                                }
                                tempItem3.children.push(tempItem4)
                            })
                            tempItem2.children.push(tempItem3)
                        })
                        tempItem1.children.push(tempItem2)
                    })
                    this.treeList.push(tempItem1)
                })
            })
        },
        // 设置编辑时的类目
        setGoodsTree() {
            this.treeList.forEach((item1) => {
                item1.children.forEach((item2) => {
                    item2.children.forEach((item3) => {
                        item3.children.forEach((item4) => {
                            if (this.form.deptID == item4.value) {
                                this.deptId.push(item1.value)
                                this.deptId.push(item2.value)
                                this.deptId.push(item3.value)
                                this.deptId.push(item4.value)
                            }
                        })
                    })
                })
            })
        },
        // 商品分类选择
        changeTreeList(value) {
            this.form.deptID = value[value.length - 1]
        },
        // 获取拍卖专场
        getAuctionPageList() {
            auction.getAuctionPageList({
                condition: {
                    name: '',
                    creater: ''
                },
                page: 1,
                pageSize: 1000
            }).then((result) => {
                this.auctionList = result.data
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 获取运费模板
        getFreightTemplateList() {
            dropdown.getFreightTemplateList().then((result) => {
                this.freightTemplateList = result
            })
        },
        // 主图上传
        uploadSuccess(image) {
            this.form.imgUrl = image
        },
        // 副图上传
        uploadMultipleSuccess(imageList) {
            this.form.subImgUrls = imageList
        },
        // 下一步
        next() {
            this.activeName = 'detail'
        },
        // 保存
        save() {
            // 判断编辑器内容是否修改
            if (this.form.content == undefined) {
                this.form.content = this.content
            }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    auction.saveGoods(this.form).then((result) => {
                        this.$message.success('保存成功')
                        this.$emit('refresh')
                    }).catch((error) => {
                        this.$message.error(error)
                    })
                }
            })
        },
        // 返回
        close() {
            this.$emit('close')
        }
    }
}