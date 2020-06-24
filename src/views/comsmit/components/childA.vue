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
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAShowB">打开B弹框</el-button>
        <el-button @click="dialogA = false">取 消</el-button>
        <el-button type="primary" @click="dialogA = false">确 定</el-button>
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
      dialogA: false
    }
  },
  methods: {
    showDialog() {
      this.dialogA = !this.dialogA
    },
    dialogAShowB() {
      this.$parent.showB()
      this.dialogA = !this.dialogA
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
