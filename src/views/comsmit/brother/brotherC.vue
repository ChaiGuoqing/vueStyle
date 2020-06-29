<!--  -->
<template>
  <div class="content">
    <p>组件C</p>
    <span>bus 通信：</span>
    <el-input v-model="busC" style="width:60%" placeholder="请输入内容" />
    <el-button type="primary" style="margin-left:20px;width:100px" @click="busSendData2D">bus 通信</el-button>
  </div>
</template>

<script>
import bus from './bus'
export default {
  data() {
    return {
      busC: null
    }
  },
  // 方法集合
  methods: {
    busSendData2D() {
      bus.$emit('busSend2D', this.busC)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.content{
  width: 90%;
  margin: 40px auto;
}
</style>
