<template>
  <div class="content">
    <range :min="10" :max="100" v-model="sliderValue" :isShowTip="true"></range>
  </div>
</template>
<script>
import range from "@/components/range.vue";
export default {
  data() {
    return {
      sliderValue: 10
    };
  },
  components: {
    range
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.content {
  width: 500px;
  margin: 50px auto;
}
</style>
