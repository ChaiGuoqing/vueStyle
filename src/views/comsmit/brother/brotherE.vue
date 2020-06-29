<!--  -->
<template>
  <div class="content">
    <p>组件E</p>
    <span>vuex 通信：</span>
    <el-input v-model="vuexE" style="width:60%" placeholder="请输入内容" />
    <el-button type="primary" style="margin-left:20px;width:100px" @click="vuexSendData2F">vuex 通信</el-button>
  </div>
</template>
<script>
export default {
  data() {
    // 这里存放数据
    return {
      vuexE: null
    }
  },
  // 方法集合
  methods: {
    vuexSendData2F() {
      this.$store.state.app.brotherEData = this.vuexE
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
