<template>
  <div class="content">
    <range v-model="sliderValue" :min="10" :max="100" :is-show-tip="true" />
  </div>
</template>
<script>
import range from '@/components/slider'
export default {
  components: {
    range
  },
  data() {
    return {
      sliderValue: 10
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.content {
  margin: 50px 200px;
}
</style>
