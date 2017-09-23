import demo from './demo/demo.vue'
import dialog from './dialog/index.vue'
import operations from './operations/index.vue'
import pagination from './pagination/index.vue'
import search from './search/index'
import box from './box/index.vue'
import button from './button/button.vue'
import buttonGroup from './button/button-group.vue'
import title from './title/index.vue'
import imgUpload from './imgUpload/imgUpload.vue'
import img from './img/index.vue'
import editor from './editor/index.vue'
import content from './contentTpl/contentTpl.vue'
import wrapper from './wrapper/wrapper.vue' // 网页内容区
import region from './region/index.vue' // 省市区

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(dialog.name, dialog)
    Vue.component(operations.name, operations)
    Vue.component(pagination.name, pagination)
    Vue.component(search.name, search)
    Vue.component(box.name, box)
    Vue.component(button.name, button)
    Vue.component(buttonGroup.name, buttonGroup)
    Vue.component(title.name, title)
    Vue.component(imgUpload.name, imgUpload)
    Vue.component(img.name, img)
    Vue.component(editor.name, editor)
    Vue.component(content.name, content)
    Vue.component(wrapper.name, wrapper)
    Vue.component(region.name, region)
}

export default install