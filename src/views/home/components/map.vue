<!--  -->
<template>
  <div class="">
    <div ref="myCharts" class="chartBox_d" />
  </div>
</template>

<script>
import echarts from 'echarts'
import option from '../js/mapOption'
import 'echarts/map/js/province/guangdong.js'
// import 'echarts/map/js/china.js' // 引入中国地图数据
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
      var myChart = echarts.init(this.$refs.myCharts, 'macarons')
      myChart.setOption(option, true)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
  .chartBox_d {
    // height:450px;
    width:100%;
    height: 100%;
    // box-sizing: border-box;
    // padding: 30px 20px 30px 20px;
  }
</style>
