<template>
  <div class="content">
    <div class="title">
      <el-divider content-position="left">自定义滑块</el-divider>
    </div>
    <div class="btn">
      <el-row>
        <el-button type="primary" @click="sliderValue=20">sliderValue = 20</el-button>
        <el-button type="success" @click="sliderValue=40">sliderValue = 40</el-button>
        <el-button type="info" @click="sliderValue=60">sliderValue = 60</el-button>
        <el-button type="warning" @click="sliderValue=80">sliderValue = 80</el-button>
        <el-button type="danger" @click="sliderValue=100">sliderValue = 100</el-button>
      </el-row>
    </div>
    <div class="customDemo">
      <div class="slider">
        <range v-model="sliderValue" :min="10" :max="100" :is-show-tip="showTip" />
      </div>
      <div class="isDisable">
        <el-switch
          v-model="showTip"
          active-text="显示tip"
          inactive-text="隐藏tip"
        />
      </div>
    </div>
    <div class="title">
      <el-divider content-position="left">elementUI滑块</el-divider>
    </div>
    <div class="elementDemo">
      <div class="block">
        <span class="demonstration">默认</span>
        <el-slider
          v-model="elementDefvalue"
          :disabled="!isDisAble"
          :show-tooltip="eleShowTip"
          :format-tooltip="formatTooltip"
          :step="stepVal"
          :show-stops="isShowStops"
          :show-input="isShowInput"
          :marks="isShowMark?marks:''"
        />
      </div>
      <div class="util">
        <div class="isDisable">
          <el-switch
            v-model="eleShowTip"
            active-text="显示tip"
            inactive-text="隐藏tip"
          />
        </div>
        <el-divider class="line" direction="vertical" />
        <div class="isDisable">
          <el-switch
            v-model="isDisAble"
            active-text=" 启用"
            inactive-text="禁用"
          />
        </div>
        <el-divider class="line" direction="vertical" />
        <div class="isDisable">
          <el-switch
            v-model="isFormat"
            active-text=" 格式化"
            inactive-text="否"
          />
        </div>
        <el-divider class="line" direction="vertical" />
        <div class="isDisable">
          <el-switch
            v-model="isShowInput"
            active-text="显示输入框"
            inactive-text="隐藏输入框"
          />
        </div>
        <el-divider class="line" direction="vertical" />
        <div class="isDisable">
          <el-switch
            v-model="isShowMark"
            active-text="显示标记"
            inactive-text="隐藏标记"
          />
        </div>
        <el-divider class="line" direction="vertical" />
        <div class="isDisable">
          <el-switch
            v-model="isShowStops"
            active-text="显示间断点"
            inactive-text="隐藏间断点"
          />
        </div>
        <el-divider class="line" direction="vertical" />
        <div class="isDisable">
          <span>离散值：</span>
          <el-select v-model="stepVal" placeholder="请选择" size="medium" @change="changeStepVal">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import range from '@/components/slider'
export default {
  components: {
    range
  },
  data() {
    return {
      sliderValue: 30,
      elementDefvalue: 20,
      showTip: true,

      isDisAble: true,
      eleShowTip: true,
      isFormat: true,
      stepVal: 1,
      isShowStops: false,
      isShowInput: true,
      isShowMark: true,
      options: [
        {
          value: 1,
          label: 'step = 1'
        },
        {
          value: 10,
          label: 'step = 10'
        }, {
          value: 20,
          label: 'step = 20'
        }, {
          value: 30,
          label: 'step = 30'
        }, {
          value: 40,
          label: 'step = 40'
        }, {
          value: 50,
          label: 'step = 50'
        }],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA'
          },
          label: this.$createElement('strong', '50%')
        }
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    formatTooltip(val) {
      if (this.isFormat) return val / 100
      else return val
    },
    changeStepVal(val) {
      this.stepVal = val
    }
  }
}
</script>
<style scoped>
.content {
  margin: 20px 60px;
}
.btn{
  margin: 20px 0 60px 0;
}
.title{
  padding: 40px 0;
}
.block , .slider{
  width: 92%;
}
.isDisable{
  line-height: 65px;
}
.util{
  display: flex;
}
.line{
  width:2px;
  margin: 25px 20px;
}
</style>
