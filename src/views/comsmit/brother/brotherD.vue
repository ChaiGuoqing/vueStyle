<!--  -->
<template>
  <div class="content">
    <p>组件D</p>
    <p>{{ fromBusC }}</p>
  </div>
</template>
<script>
import bus from './bus'
export default {
  data() {
    // 这里存放数据
    return {
      fromBusC: null
    }
  },
  created() {
    bus.$on('busSend2D', (data) => {
      this.fromBusC = data
    })
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
