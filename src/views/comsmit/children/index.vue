<!-- 父组件 -->
<template>
  <div class="">
    <div class="btn">
      <el-row>
        <el-button type="primary" @click="showA">A弹框</el-button>
        <el-button type="success" @click="showB">B弹框</el-button>
      </el-row>
    </div>
    <childA ref="childA" :mess="messageA" @sendDataAToParent="childAData" />
    <childB ref="childB" :message="messageB" @sendDataBToParent="childBData" />
    <el-divider class="line" content-position="left">父子组件互调方法</el-divider>
    <div class="tip">
      <span>
        1.父组件调用子组件方法
      </span>
      <p>
        a.在父组件引入的子组件标签上用 ref="***" 绑定名称,然后用 <span style="color:red">this.$refs.***.方法名() </span>( 这个是子组件的方法 )调用子组件方法
      </p>
      <p>
        2.子组件调用父组件方法
      </p>
      <p>
        b.在子组件中直接用<span style="color:red"> this.parent.方法名()</span>( 这个是父组件的方法 )
      </p>
    </div>
    <el-divider class="line" content-position="left">父子组件互传参数</el-divider>
    <div class="tip">
      <span>
        1.父组件向子组件传参
      </span>
      <p>
        a.在父组件引入的子组件标签上绑定名称 <span style="color:red">(例如:  :message="***") ,message是子组件接收的属性名称,***是父组件传的值</span>
      </p>
      <p>b.子组件接收值用props对象 (</p>
      <p> props:{</p>
      <p>   message:{</p>
      <p>    type:Number/String/Object</p>
      <p>    default:默认值</p>
      <p>   }</p>
      <p> })</p>
      <p> <span style="color:red">message必须和父组件绑定的名称一致</span></p>
      <span>
        2.子组件向父组件传参
      </span>
      <p>
        a.子组件定义传参事件以<span style="color:red"> this.$emit('sendDataAToParent', this.dataInfo)</span> 第一个参数定义父组件接收的属性，第二个参数要传的值
      </p>
      <p>
        b.父组件在引用子组件的标签上<span style="color:red">@sendDataAToParent="childAData"</span>；@sendDataAToParent属性名要和子组件传的名称一致，childData为父组件定义接收值的方法，默认的参数data为子组件传的值
      </p>
    </div>
    <div class="childClass">
      <span>接收子组件A：</span><span>{{ dataA }}</span>
      <p><span>接收子组件B：</span><span>{{ dataB }}</span></p>
    </div>
  </div>
</template>

<script>

import childA from '../components/childA'
import childB from '../components/childB'
export default {
  components: {
    childA,
    childB
  },
  data() {
    return {
      messageA: '父组件给A组件发来贺电',
      messageB: '父组件给B组件发来贺电',
      dataA: null,
      dataB: null
    }
  },
  methods: {
    showA() {
      this.$refs.childA.showDialog()
    },
    showB() {
      this.$refs.childB.showDialog()
    },
    childAData(data) {
      this.dataA = data
    },
    childBData(data) {
      this.dataB = data
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.btn {
  width: 80%;
  margin: 40px auto;
  text-align: center;
}
.tip ,.childClass{
  width: 80%;
  margin: 10px auto;
}
.line{
  margin: 30px ;
}
</style>

