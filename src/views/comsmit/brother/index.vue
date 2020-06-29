<template>
  <div class="content">
    <div class="way">
      <p>
        方式一 （子传父 父传子）
      </p>
      <div class="com">
        <div class="comA">
          <brotherA @fromA="fromDataA" />
        </div>
        <div class="comB">
          <brotherB :from-message-a="fromA" />
        </div>
      </div>
    </div>
    <div class="way">
      <p>
        方式二 vuex
      </p>
      <div class="com">
        <div class="comE">
          <brotherE />
        </div>
        <div class="comF">
          <brotherF />
        </div>
      </div>
    </div>
    <div class="way">
      <p>
        方式三 建中转站
      </p>
      <div class="com">
        <div class="comC">
          <brotherC />
        </div>
        <div class="comD">
          <brotherD />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 例如：import 《组件名称》 from '《组件路径》';
import brotherA from './brotherA'
import brotherB from './brotherB'
import brotherC from './brotherC'
import brotherD from './brotherD'
import brotherE from './brotherE'
import brotherF from './brotherF'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {
    brotherA,
    brotherB,
    brotherC,
    brotherD,
    brotherE,
    brotherF
  },
  data() {
    return {
      fromA: null
    }
  },
  // 方法集合
  methods: {
    fromDataA(data) {
      this.fromA = data
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.content{
  width: 90%;
  margin: 40px auto;
  .com{
    width: 100%;
    display: flex;
    .comA ,.comC ,.comE{
      width: 50%;
      border: #ccc 1px solid;
    }
    .comB ,.comD ,.comF{
      width: 50%;
      border: #ccc 1px solid;
      margin-left: 20px;
    }
  }
}
</style>
