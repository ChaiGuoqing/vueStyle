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
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogB = false">取 消</el-button>
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

    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
