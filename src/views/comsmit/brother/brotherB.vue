<!--  -->
<template>
  <div class="content">
    <p>组件B</p>
    <p>{{ fromMessageA }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fromMessageA: {
      type: String,
      default: ''
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
