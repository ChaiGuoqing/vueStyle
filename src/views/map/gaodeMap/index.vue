<!--  -->
<template>
<div class=''>
  <my-map :zoom="12" :center="[120, 33]" adapter="TDT"></my-map>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {MyMap} from '$ui/map'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  MyMap
},
data() {
  //这里存放数据
  return {

  };
},

//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
//生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>