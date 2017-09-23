import { cloneDeep } from 'lodash'
import { goods as ajax, dropdown } from 'services'
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
                goodsId: '', // 商品ID
                deptId: '', // 分类ID
                name: '', // 商品名称
                brandId: '', // 品牌ID
                brandName: '', // 品牌名
                venderId: '', // 供应商ID
                wholesaleFlag: 0, // 商品类型,1:批发,0:零售
                goodsTags: [], // 商品标签
                colorName: '', // 颜色名
                sizeName: '', // 尺寸名
                otherName: '', // 其它属性名
                colorProperties: [], // 颜色属性集合
                sizeProperties: [], // 尺寸属性集合
                otherProperties: [], // 其它属性集合
                skus: [], // 商品Sku集合
                customNo: '', // 商品货号
                price: '', // 零售价,可空
                imgUrl: '', // 主图
                imgUrls: [], // 字图列表
                note: '', // 商品简介
                postFee: '', // 固定运费
                freightTemplateId: '', // 运费模板ID,如果为空，则按固定的运费 
                long: '', // 长，单位:CM
                width: '', // 宽，单位:CM
                height: '', // 高，单位:CM
                weight: '', // 重量，单位:克
                stockStatus: 1, // 上架状态,1:上架,0:下架
                gradePrice: [], // 会员等级商品价
                content: '' // 商品详情
            },
            sku: {
                barcodeId: '', // 条码ID
                colorId: '', // 颜色ID
                colorName: '', // 颜色名
                sizeId: '', // 尺寸ID
                sizeName: '', // 尺寸名
                otherId: '', // 其他ID
                otherName: '', // 其他名
                price: '', // 零售价
                basePrice: '', // 成本价
                code: '', // 商品编码
                barcode: '' // 条形码
            },
            deptId: [], // 商品分类
            content: '', // 编辑器初始显示值
            activeName: 'info', // 下一步
            inputVisibleColor: false,
            inputValueColor: '',
            inputVisibleSize: false,
            inputValueSize: '',
            inputVisibleOther: false,
            inputValueOther: '',
            addPropertyType: 0, // 0颜色 1尺寸 2其他
            treeList: [], // 商品分类
            supplierList: [], // 供应商列表
            brandList: [], // 品牌列表
            goodsFlagList: [], // 商品标签列表
            freightTemplateList: [], // 运费模板
            wholesaleType: [
                {
                    label: '零售',
                    value: 0
                },
                {
                    label: '批发',
                    value: 1
                }
            ]
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
        'form.colorProperties'() {
            this.createSku()
        },
        'form.sizeProperties'() {
            this.createSku()
        },
        'form.otherProperties'() {
            this.createSku()
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

        // 获取商品分类
        this.getGoodsTree()
        // 获取供应商下拉列表
        this.getSupplierList()
        // 获取品牌列表
        this.getBrandList()
        // 获取商品标签
        this.getGoodsFlagList()
        // 获取运费模板
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
        // 获取供应商下拉列表
        getSupplierList() {
            dropdown.getSupplierList().then((result) => {
                this.supplierList = result
            })
        },
        // 获取品牌列表
        getBrandList() {
            dropdown.getBrandList().then((result) => {
                this.brandList = result
            })
        },
        // 获取商品标签
        getGoodsFlagList() {
            dropdown.getGoodsFlagList().then((result) => {
                this.goodsFlagList = result
            })
        },
        // 获取运费模板
        getFreightTemplateList() {
            dropdown.getFreightTemplateList().then((result) => {
                this.freightTemplateList = result
            })
        },
        // 获取商品分类
        getGoodsTree() {
            const list = []
            ajax.getGoodsTree().then((result) => {
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
                    list.push(tempItem1)
                })

                this.treeList = list
            })
        },
        // 设置编辑时的类目
        setGoodsTree() {
            this.treeList.forEach((item1) => {
                item1.children.forEach((item2) => {
                    item2.children.forEach((item3) => {
                        item3.children.forEach((item4) => {
                            if (this.form.deptId == item4.value) {
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
            this.form.deptId = value[value.length - 1]
        },
        // 新增规格项目
        addSpec() {
            this.specList.push({
                name: '',
                properties: []
            })
        },
        // 删除规格项目
        delSpec(index) {
            if (index == 0) {
                this.form.sizeName = ''
                this.form.sizeProperties = []
            }
            else if (index == 0) {
                this.form.colorName = ''
                this.form.colorProperties = []
            }
            else {
                this.form.otherName = ''
                this.form.otherProperties = []
            }
        },
        // 确定新增规格项目
        submitSpec() {

        },
        // 显示新增Property
        showPropertyInput(type) {
            this.addPropertyType = type
            if (this.addPropertyType == 0) {
                this.inputVisibleColor = true
            }
            else if (this.addPropertyType == 1) {
                this.inputVisibleSize = true
            }
            else {
                this.inputVisibleOther = true
            }
        },
        // 添加属性
        addProperty(properties) {
            let inputValue = ''
            if (this.addPropertyType == 0) {
                inputValue = this.inputValueColor
            }
            else if (this.addPropertyType == 1) {
                inputValue = this.inputValueSize
            }
            else {
                inputValue = this.inputValueOther
            }
            if (inputValue) {
                properties.push({
                    id: '',
                    name: inputValue
                })
            }
            
            if (this.addPropertyType == 0) {
                this.inputVisibleColor = false
                this.inputValueColor = ''
            }
            else if (this.addPropertyType == 1) {
                this.inputVisibleSize = false
                this.inputValueSize = ''
            }
            else {
                this.inputVisibleOther = false
                this.inputValueOther = ''
            }
        },
        // 删除属性
        delProperty(list, index) {
            list.splice(index, 1)
        },
        // 生成sku
        createSku() {
            const list = []
            if (this.form.colorProperties.length > 0) {
                this.form.colorProperties.forEach((color) => {
                    if (this.form.sizeProperties.length > 0) {
                        this.form.sizeProperties.forEach((size) => {
                            if (this.form.otherProperties.length > 0) {
                                this.form.otherProperties.forEach((other) => {
                                    const sku = this.selectEqualSku(color.id, size.id, other.id)
                                    if (this.util.isEmptyObject(sku)) {
                                        const addSku = cloneDeep(this.sku)
                                        addSku.colorName = color.name
                                        addSku.sizeName = size.name
                                        addSku.otherName = other.name
                                        list.push(addSku)
                                    }
                                    else {
                                        list.push(sku)
                                    }
                                })
                            }
                            else {
                                const sku = this.selectEqualSku(color.id, size.id)
                                if (this.util.isEmptyObject(sku)) {
                                    const addSku = cloneDeep(this.sku)
                                    addSku.colorName = color.name
                                    addSku.sizeName = size.name
                                    list.push(addSku)
                                }
                                else {
                                    list.push(sku)
                                }
                            }
                        })
                    }
                    else {
                        const sku = this.selectEqualSku(color.id)
                        if (this.util.isEmptyObject(sku)) {
                            const addSku = cloneDeep(this.sku)
                            addSku.colorName = color.name
                            list.push(addSku)
                        }
                        else {
                            list.push(sku)
                        }
                    }
                })
            }
            this.form.skus = list
        },
        // 查找相同sku
        selectEqualSku(colorId = null, sizeId = null, otherId = null) {
            if (this.isEdit) {
                let sku = {}
                for (let i = 0; i < this.form.skus.length; i++) {
                    if (this.form.skus[i].colorId == colorId && this.form.skus[i].sizeId == sizeId && this.form.skus[i].otherId == otherId) {
                        sku = this.form.skus[i]
                        break
                    }
                }

                return sku
            }
            else {
                return {}
            }
        },
        // 主图上传
        uploadSuccess(image) {
            this.form.imgUrl = image
        },
        // 副图上传
        uploadMultipleSuccess(imageList) {
            this.form.imgUrls = imageList
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
                    ajax.saveGoods(this.form).then((result) => {
                        this.$message.success('保存成功')
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