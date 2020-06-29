<!--  -->
<template>
  <div class="content">
    <p>组件A</p>
    <span>cpc 通讯：</span>
    <el-input v-model="send2B" style="width:60%" placeholder="请输入内容" />
    <el-button style="margin-left:20px;width:100px" type="primary" @click="sendData2B">发送</el-button>
  </div>
</template>

<script>

export default {
  data() {
    // 这里存放数据
    return {
      send2B: null
    }
  },
  // 方法集合
  methods: {
    sendData2B() {
      this.$emit('fromA', this.send2B)
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
