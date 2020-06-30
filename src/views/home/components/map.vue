<!--  -->
<template>
  <div class="content">
    <div ref="myCharts" class="chartBox_d" />
  </div>
</template>

<script>
import echarts from 'echarts'
import option from '../js/mapOption'
import 'echarts/map/js/china.js' // 引入中国地图数据
require('echarts/theme/macarons')
export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {

    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.mapEchartsInit()
  },
  // 方法集合
  methods: {
    mapEchartsInit() {
      var _that = this
      _that.myChart = echarts.init(this.$refs.myCharts, 'macarons')
      _that.myChart.setOption(option, true)
      window.onresize = function() {
        _that.myChart.resize()
      }
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.content{
    width:100%;
    height: 100%;
    .chartBox_d {
      width:100%;
      height: 100%;
      box-sizing: border-box;
  }
}

</style>
