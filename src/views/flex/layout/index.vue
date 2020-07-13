<!--  -->
<template>
  <div id="app">
    <transition
      appear
      enter-active-class="fade-enter-active"
      leave-active-class="fade-leave-active"
      appear-active-class="swing"
    >
      <div v-if="show">show</div>
    </transition>
    <input type="button" value="点击我显示/取消" @click="show=!show">
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      show: false
    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {

  }

}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
