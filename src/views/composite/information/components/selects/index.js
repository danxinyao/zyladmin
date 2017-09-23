import { cloneDeep } from 'lodash'
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
                teamname: '',
                name: '',
                content: '',
                active: ''
            },
            actives: [
                {
                    label: 'aaa',
                    value: '1'
                },
                {
                    label: 'bbb',
                    value: '2'
                }
            ],
            uploadFiles: '',
            content: '', // 编辑器初始显示值
            // 输入验证
            rules: {
                teamname: [
                    { required: true, message: '请输入所属团队', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入分销客户名称', trigger: 'blur' },
                ],
                active: [
                    { required: true, message: '请填写完成', trigger: 'number' }
                ]
            },
            total: 40, // 总条数
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
			data2: [
				    {
						id: 1,
						label: '一级分类',
						children: [
						    {
								id: 4,
								label: '二级',
							    children: [
								    {
										id: 9,
										label: '三级'
									}, {
									    id: 10,
									    label: '三级'
								    }
							        ]
						    }
						]
					}, 
					{
						id: 2,
						label: '一级分类',
						children: [
							{
								id: 5,
								label: '二级'
							},
							{
								id: 6,
								label: '二级'
							}
						]
					}, 
					{
						id: 3,
						label: '一级分类',
						children: [
							{
								id: 7,
								label: '二级'
							}, 
							{
								id: 8,
								label: '二级'
							}
						]
					}
				],
				defaultProps: {
					children: 'children',
					label: 'label'
			    },
			    id:1000,
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    mounted() {
        if (!this.isEdit) {
            this.resetForm()
        }
    },
    created() {
        this.setForm(this.editForm)
    },
    methods: {
    	//新增一级分类
    	appendOne(){
    		this.data2.push(
					{
						id: this.id++,
						label: '一级分类',
					}, 
    		)
    	},
    	//新增分类
		append(store, data) {
			console.log(data)
		    store.append({ id: this.id++, label: 'testtest', children: [] }, data);
		},
		//删除分类
		remove(store, data) {
			console.log(data)
			if(data.children.length == 0) {
                this.$message({
                    message: '请先删除该分类下的资讯',
                    type: 'warning'
                })
                return 			
			}
		    store.remove(data);
		},
		//新增分类
		renderContent(h, { node, data, store }) {

			return (
			  <span>
			    <span>
			      <span>{node.label}</span>
			    </span>
			    <span style="float: right; margin-right: 20px">
			      <el-button size="mini" on-click={ () => this.append(store, data) }>新增</el-button>
			      <el-button size="mini" on-click={ () => this.remove(store, data) }>删除</el-button>
			    </span>
			  </span>);
		},		
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.content = ''
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.content = this.form.content // 初始化编辑器内容
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
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            // 判断编辑器内容是否修改
            if (this.form.content == undefined) {
                this.form.content = this.content
            }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    console.log('success')
                    // 验证通过
                }
            })
        },
        // 新增商品
        add() {
            this.$emit('addGoods')
        },
        // 省市区选择
        changeRegions(val) {
            console.log(val)
        },
        // 单图
        uploadSuccess(file) {
            console.log(file)
        },
        // 多图
        multipleUploadSuccess(filelist) {
            console.log(filelist)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        }
    }
}