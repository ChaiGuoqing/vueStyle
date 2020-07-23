<!--  -->
<template>
  <div class="vueBox">
    <transition-group name="myGroup">
      <li v-for="(item,index) in list" :key="item.id" class="mytable" @click="del(index)">
        <span> {{ index+1 }}</span>
        <span>{{ item.city }}</span>
        <span>{{ item.num }}</span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { getCityList } from '@/api/home'
export default {
  components: {},
  data() {
    return {
      list: [
        { id: 1, city: '北京', num: 123 },
        { id: 2, city: '上海', num: 458 },
        { id: 3, city: '天津', num: 240 },
        { id: 4, city: '广东', num: 458 },
        { id: 5, city: '重庆', num: 477 },
        { id: 6, city: '武汉', num: 358 }
      ],
      listData: []
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
      // this.getDataList()
      this.add()
    }, 3000)
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  methods: {
    getDataList() {
      getCityList().then(res => {
        this.listData = res.data.items
        this.list = [{ id: Number(res.data.items.id), city: res.data.items.city, num: res.data.items.num }, ...this.list]
        if (this.list.length > 6) {
          this.list.splice(6, 1)
        }
      })
    },
    del(i) {
      this.list.splice(i, 1)
    },
    add() {
      let n = '北京'
      const num = this.getRandomInt(0, 100)
      let nick = 0
      switch (num % 4) {
        case 0:
          n = '天津'
          nick = num * 2
          break
        case 1:
          n = '武汉'
          nick = num * 3
          break
        case 2:
          n = '青岛'
          nick = num * 4
          break
        case 3:
          n = '北京'
          nick = num * 5
          break
        default:
          break
      }
      this.list = [{ id: num, city: n, num: nick }, ...this.list]
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
    padding: 10px;
  }
  .mytable {
    line-height: 45px;
    list-style: none;
    color: #f1f1f1;
  }
  .mytable span:nth-child(1n) {
    text-align: left;
  }
  .mytable span:nth-child(2n) {
    text-align: center;
  }
  .mytable span:nth-child(3n) {
    text-align: right;
  }
  .mytable span{
    width: 33.3%;
    display: inline-block;
  }
  // .mytable:hover {
  //     background-color:rgb(228, 230, 225);
  // }
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
