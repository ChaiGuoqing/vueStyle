<template>
  <div class="content">
    <div class="btn">
      <el-row>
        <el-button type="primary" @click="sliderValue=20">sliderValue = 20</el-button>
        <el-button type="success" @click="sliderValue=40">sliderValue = 40</el-button>
        <el-button type="info" @click="sliderValue=60">sliderValue = 60</el-button>
        <el-button type="warning" @click="sliderValue=80">sliderValue = 80</el-button>
        <el-button type="danger" @click="sliderValue=100">sliderValue = 100</el-button>
      </el-row>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="16">
          <div>
            <range v-model="sliderValue" :min="10" :max="100" :is-show-tip="showTip" />
          </div>
        </el-col>
        <el-col :span="2">
          <div>
            {{ sliderValue }} %
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <el-switch
              v-model="showTip"
              active-text="是否显示tip"
            />
          </div>
        </el-col>
      </el-row>
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
      sliderValue: 10,
      showTip: true
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.content {
  margin: 50px 60px;
}
.btn{
  margin: 60px 0;
}
</style>
