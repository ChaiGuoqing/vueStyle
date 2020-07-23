<!--  -->
<template>
  <div class="vueBox">
    <div>
        <p> <span> 1、v-enter：定义进入过渡的开始状态</span><span> 2、v-enter-active：定义进入活动状态</span><span> 3、v-enter-to：定义进入结束状态</span></p>
        <p> <span>4、v-leave：定义离开过渡的开始状态</span><span> 5、v-leave-active：定义离开活动状态</span> <span>6、v-leave-to：定义离开结束状态</span></p>
        <div>
          <transition-group name="myGroup">
            <li v-for="(item,index) in list" :key="item.id" class="mytable" @click="del(index)">
              <span> {{ index+1 }}</span>
              <span>{{ item.name }}</span>
              <span>{{ item.nickname }}</span>
            </li>
          </transition-group>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      list: [
        { id: 1, name: '小明', nickname: '123' },
        { id: 2, name: '小明', nickname: '123' },
        { id: 3, name: '小明', nickname: '123' },
        { id: 4, name: '小明', nickname: '123' },
        { id: 5, name: '小明', nickname: '123' },
        { id: 6, name: '小明', nickname: '123' }
      ]
    }
  },
  // 监听属性 类似于data概念
  computed: {
  },
  // 监控data中的数据变化
  watch: {
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    setInterval(() => {
      this.add()
    }, 3000)
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  methods: {
    del(i) {
      this.list.splice(i, 1)
    },
    add() {
      this.list = [{ id: this.getRandomInt(0, 100), name: '小明', nickname: '123' }, ...this.list]
      if (this.list.length > 6) {
        this.list.splice(6, 1)
      }
      // this.list.unshift({ id: this.list.length + 1, name: '小明', nickname: '123' })
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
  .vueBox{
    padding: 20px 50px;
  }
  .mytable {
    padding: 0px 50px;
    border-top: 1px dashed rgb(247, 161, 80);
    border-left: 1px dashed rgb(247, 161, 80);
    border-right: 1px dashed rgb(247, 161, 80);
    line-height: 45px;
    list-style: none;
    text-align: center;
  }
  .mytable:nth-child(6n) {
    border-bottom: 1px dashed rgb(247, 161, 80);
  }
  .mytable span{
    width: 30%;
    display: inline-block;
  }
  .mytable:hover {
      background-color:rgb(228, 230, 225);
  }

  .myGroup-enter, .myGroup-leave-to{
      opacity: 0;
      transform: translateY(-30px);
  }
  .myGroup-enter-active, .myGroup-leave-active {
      transition: all 1.5s ease;
  }

  /* v-move和v-leave-active实现删除一行，后面元素移位的动画效果 */
  .myGroup-move{
      transition: all 0.6s ease;
  }
</style>
