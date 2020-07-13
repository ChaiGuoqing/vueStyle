<template>
  <div class="info-css">
    <el-dialog title="提示" :visible="show" :close-on-click-modal="false" @close="show=false">
      <div class="confirm-box">
        <p class="confirm-txt">
          <span />
          {{ msg }}
        </p>
        <p v-if="btn==1" class="footer">
          <el-button type="primary" @click="show=false">确定</el-button>
        </p>
        <p v-if="btn==2" class="footer">
          <el-button type="primary" @click="yes">确定</el-button>
          <el-button @click="show=false">取消</el-button>
        </p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // props:[show,icon,msg],
  data() {
    return {
      show: false,
      icon: '',
      msg: '',
      btn: 1,
      yes: null
    }
  },
  watch: {
    show(newval, oldval) {
      if (!newval) {
        this.msg = ''
        this.icon = ''
        this.btn = 1
        this.yes = null
      }
    }
  },
  mounted() {

  },
  methods: {}
}
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
    width: 530px;
}

/deep/ .el-dialog__header {
    padding: 10px 20px;
    background: #e8ecf0;
}

/deep/ .el-dialog__body {
    padding: 30px 60px;
}

.confirm-box {
    text-align: center;
    font-size: 18px;
    color: #333;
    .delete-css b:nth-child(1) {
        color: red;
    }
}
.confirm-txt {
    margin: 50px 0;
}
.footer {
    margin: 20px 0 0px;
}
</style>
