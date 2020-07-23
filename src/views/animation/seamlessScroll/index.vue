<!--  -->
<template>
  <div class='vueBox'>
    <!-- <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
            <li v-for="(item,index) in newsList" :key="index" v-text="item.title"></li>
        </ul>
    </vue-seamless-scroll> -->
  </div>
</template>

<script>
// import vueSeamless from 'vue-seamless-scroll'
export default {
  components: {
    // vueSeamless
  },
  data() {
    return {
      newsList: [{
            'title': 'A simple, seamless scrolling for Vue.js'
          }, {
            'title': 'A curated list of awesome things related to Vue.js'
          }]
    };
  },
  computed: {
    // optionLeft () {
    //     return {
    //             direction: 2,
    //             limitMoveNum: 2
    //         }
    // }
  },
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  }
}
</script>
<style lang='scss' scoped>
  .vueBox{
    padding: 20px 50px;
  }
  // .seamless-warp2 {
  //   overflow: hidden;
  //   height: 25px;
  //   width: 380px;
  //   ul.item {
  //       width: 580px;
  //       li {
  //           float: left;
  //           margin-right: 10px;
  //       }
  //   }
  // }
</style>