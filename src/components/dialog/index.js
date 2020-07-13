import dialogComponent from './dialog.vue'
import Vue from 'vue'
const dialog = {}

dialog.install = (Vue, options) => {
  // 如果存在loading 不重复创建DOM
  if (document.getElementsByClassName('.load-status').length) return

  // 创建一个VUE构造器
  const lTemp = Vue.extend(dialogComponent)

  // 实例化VUE实例
  const $vm = new lTemp()

  const tpl = $vm.$mount().$el
  document.body.appendChild(tpl)

  Vue.prototype.$dialog = { // 在Vue的原型上添加实例方法，以全局调用
    show(options) {
      // 通过传入props改变$vm下的属性控制组件
      $vm.show = true
      $vm.msg = options.msg
      $vm.icon = options.icon ? options.icon : ''
      $vm.btn = options.btn ? options.btn : 1
      $vm.yes = options.yes
    },
    hide() {
      $vm.show = false
    }
  }
}
// 导出dialog
export default dialog
