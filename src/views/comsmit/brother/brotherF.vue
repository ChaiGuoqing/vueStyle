<!--  -->
<template>
  <div class="content">
    <p>组件F</p>
    <p>{{ fromVuexE }}</p>
  </div>
</template>

<script>
export default {
  data() {
    // 这里存放数据
    return {
    }
  },
  computed: {
    fromVuexE() {
      return this.$store.state.app.brotherEData
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
