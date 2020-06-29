<!-- 子组件B -->
<template>
  <div class="">
    <el-dialog
      title="B弹框"
      :visible.sync="dialogB"
      width="30%"
    >
      <span>这是B弹框</span>
      <p> {{ message }} </p>
      <span>给父发送内容：</span><el-input v-model="dataInfo" style="width:60%" placeholder="请输入内容" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogB = false">取 消</el-button>
        <el-button @click="sendData2Father">给父传值</el-button>
        <el-button type="primary" @click="sendData2Father">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogB: false,
      dataInfo: '子组件B给父组件请安'
    }
  },
  methods: {
    showDialog() {
      this.dialogB = !this.dialogB
    },
    sendData2Father() {
      this.dialogB = !this.dialogB
      this.$emit('sendDataBToParent', this.dataInfo)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
