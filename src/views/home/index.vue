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
                    <div class="center-container">
                      <mapVue />
                    </div>
                  </template>
                </split-pane>
              </template>
              <template slot="paneR">
                <div class="right-container">
                  <tableAnimation />
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
import { mapGetters } from 'vuex'
import splitPane from 'vue-splitpane'
import mapVue from './components/map'
import tableAnimation from './components/tableAnimation'
export default {
  name: 'Home',
  components: {
    splitPane,
    mapVue,
    tableAnimation
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
  },
  // 方法集合
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    padding: 10px;
    position: relative;
    height: calc(100vh - 50px);
    background: #080a20;
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
    // background-color: #FCE38A;
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
