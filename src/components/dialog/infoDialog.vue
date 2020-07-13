<template>
  <div class="info-css">
    <el-dialog
      class="child-wrapper"
      :title="promptInfo"
      :visible.sync="isshow"
      :close-on-click-modal="false"
    >
      <div class="info-content">
        <p class="prompt" />
        <p class="txt">{{ txt }}</p>
      </div>
      <div class="footerBtn">
        <el-button type="primary" @click="confirmBtn()">确定</el-button>
        <el-button @click="cancelBtn()">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isshow: {
      type: Boolean,
      default() {
        return false
      }
    },
    promptInfo: {
      type: String,
      default() {
        return ''
      }
    },
    txt: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {

    }
  },
  watch: {
    show(newval, oldval) {
      if (!newval) {
        this.txt = ''
      }
    }
  },
  mounted() {

  },
  methods: {
    confirmBtn() {
      this.$emit('cancel')
    },

    cancelBtn() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
