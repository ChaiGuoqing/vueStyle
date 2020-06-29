<!-- 子组件A -->
<template>
  <div class="">
    <el-dialog
      title="B弹框"
      :visible.sync="dialogA"
      width="30%"
    >
      <span>这是A弹框</span>
      <p>{{ mess }}</p>
      <span>给父发送内容：</span><el-input v-model="dataInfo" style="width:60%" placeholder="请输入内容" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAShowB">打开B弹框</el-button>
        <el-button @click="dialogA = false">取 消</el-button>
        <el-button @click="sendData2Father">给父传值</el-button>
        <el-button type="primary" @click="sendData2Father">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  props: {
    mess: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogA: false,
      dataInfo: '子组件A给父组件请安'
    }
  },
  methods: {
    showDialog() {
      this.dialogA = !this.dialogA
    },
    dialogAShowB() {
      this.$parent.showB()
      this.dialogA = !this.dialogA
    },
    sendData2Father() {
      this.dialogA = !this.dialogA
      this.$emit('sendDataAToParent', this.dataInfo)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
