<template>
  <div class="home-container">
    <split-pane :min-percent="20" :default-percent="20" split="vertical">
      <template slot="paneL">
        <div class="left-container">
          A
        </div>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal" :min-percent="20" :default-percent="80">
          <template slot="paneL">
            <split-pane split="vertical" :min-percent="20" :default-percent="80">
              <template slot="paneL">
                <split-pane split="horizontal" :min-percent="20" :default-percent="20">
                  <template slot="paneL">
                    <div class="top-container">
                      C
                    </div>
                  </template>
                  <template slot="paneR">
                    <div ref="myCharts" class="center-container">
                      <!-- <mapVue /> -->
                    </div>
                  </template>
                </split-pane>
              </template>
              <template slot="paneR">
                <div class="right-container">
                  b1
                </div>
              </template>
            </split-pane>
          </template>
          <template slot="paneR">
            <div class="bottom-container">
              a
            </div>
          </template>
        </split-pane>

      </template>
    </split-pane>

  </div>
</template>

<script>
import echarts from 'echarts'
import option from './js/mapOption'
// import 'echarts/map/js/province/guangdong.js'
import 'echarts/map/js/china.js' // 引入中国地图数据
require('echarts/theme/macarons')
import { mapGetters } from 'vuex'
import splitPane from 'vue-splitpane'
export default {
  name: 'Home',
  components: {
    splitPane
  },
  data() {
    return {
      myChart: null
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
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

<style lang="scss" scoped>
.home {
  &-container {
    padding: 10px;
    position: relative;
    height: calc(100vh - 50px);
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
  .left-container {
    background-color: #F38181;
    width: 100%;
    height: 100%;
  }

  .right-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .top-container {
    background-color: #fcc18a;
    width: 100%;
    height: 100%;
  }

  .center-container {
    // background-color: #ac8afc;
    width: 100%;
    height: 100%;
  }
  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
