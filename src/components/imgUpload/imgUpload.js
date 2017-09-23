import { rootPath } from '../../services/fetch/config'
import { mapGetters } from 'vuex'

export default {
    name: 'PgImgUpload',
    data() {
        return {
            imageUrlList: [],
            isShowUpload: true
        }
    },
    props: {
        action: {
            type: String,
            default() {
                return rootPath + '/Common/UploadImg'
            }
        },
        multiple: {
            type: Boolean,
            default() {
                return false
            }
        },
        accept: {
            type: null,
            default() {
                return '.jpg, .png'
            }
        },
        image: String,
        imageList: Array,
        tip: String
    },
    computed: {
        ...mapGetters([
            'authToken',
        ]),
        headers: {
            get() {
                return {
                    Authorization: 'Bearer ' + this.authToken.access_token
                }
            }
        }
    },
    mounted() {
        if (this.image) {
            this.imageUrlList = []
            this.imageUrlList.push({
                imgUrl: this.image,
                isSuccess: true
            })
        }

        if (this.imageList) {
            const tempFiles = []
            this.imageList.forEach((item) => {
                if (item != '' && item != null) {
                    tempFiles.push({
                        imgUrl: item,
                        isSuccess: true
                    })
                }
            })
            this.imageUrlList = tempFiles
        }
    },
    methods: {
        beforeUpload(file) {
            if (this.multiple) {
                this.imageUrlList.push({
                    imgUrl: file.uid,
                    isSuccess: false
                })
            }
            else {
                this.imageUrlList = []
                this.imageUrlList.push({
                    imgUrl: file.uid,
                    isSuccess: false
                })
            }
        },
        handleSuccess(response, file) {
            if (response.code !== 0) {
                this.error(response.message, file.uid)
                return
            }

            const tempFiles = []
            this.imageUrlList.forEach((item) => {
                if (item.imgUrl == file.uid) {
                    item.isSuccess = true
                    item.imgUrl = response.data.filePath
                }
                if (item.isSuccess) {
                    tempFiles.push(item.imgUrl)
                }
            })
            this.$emit('success', this.multiple ? tempFiles : tempFiles[0])
        },
        handleRemove(file) {
            this.imageUrlList.splice(this.imageUrlList.indexOf(file), 1)
            const tempFiles = []
            this.imageUrlList.forEach((item) => {
                if (item.isSuccess) {
                    tempFiles.push(item.imgUrl)
                }
            })
            this.$emit('success', this.multiple ? tempFiles : tempFiles[0])
        },
        handleError(err, file) {
            this.error(err, file)
        },
        error(err, file) {
            this.$message.error(err)
            this.$refs.upload.clearFiles()
            this.imageUrlList.forEach((item, index) => {
                if (file == item.imgUrl) {
                    this.imageUrlList.splice(index, 1)
                }
            })
        }
    }
}