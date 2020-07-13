<!--  -->
<template>
  <div class="content">
    <p>1、flex-direction:row; 沿水平主轴让元素从左向右排列</p>
    <div class="list1">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>2、flex-direction:column; 让元素沿垂直主轴从上到下垂直排列</p>
    <div class="list2">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>3、flex-direction:row-reverse;沿水平主轴让元素从右向左排列</p>
    <div class="list3">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>4、flex-wrap: nowrap; (默认)元素不换行,比如：一个div宽度100%，设置此属性，2个div宽度就自动变成各50%；</p>
    <div class="list4">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>5、flex-wrap: wrap; 元素换行,比如：一个div宽度100%，设置此属性，第二个div就在第二行了；</p>
    <div class="list5">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>6、justify-content : center;元素在主轴（页面）上居中排列</p>
    <div class="list6">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>7、justify-content : flex-start;元素在主轴（页面）上由左或者上开始排列</p>
    <div class="list7">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>8、justify-content : flex-end;元素在主轴（页面）上由右或者下开始排列</p>
    <div class="list8">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>9、justify-content : space-between;元素在主轴（页面）上左右两端或者上下两端开始排列</p>
    <div class="list9">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
    <p>10、justify-content : space-around;每个元素两侧的间隔相等。所以，元素之间的间隔比元素与边框的间隔大一倍。</p>
    <div class="list10">
      <li v-for="(item , index) in data" :key="index" class="item">
        {{ item.id }} --- {{ item.name }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: [
        { id: 1, name: 'aa' },
        { id: 3, name: 'aa' },
        // { id: 2, name: 'aa' },
        // { id: 4, name: 'aa' },
        // { id: 5, name: 'aa' },
        { id: 6, name: 'aa' }
      ]
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
  .content{
    padding: 10px 20px;
  }
  .list1{
    display: flex;
    flex-direction:row
  }
  .list2{
    display: flex;
    flex-direction:column;
  }
  .list3{
    display: flex;
    flex-direction:row-reverse;
  }
  .list4{
    display: flex;
    flex-wrap: nowrap;
  }
  .list5{
    display: flex;
    flex-wrap: wrap;
  }
  .list6{
    display: flex;
    justify-content : center;
  }
  .list7{
    display: flex;
    justify-content : flex-start;
  }
  .list8{
    display: flex;
    justify-content : flex-end;
  }
  .list9{
    display: flex;
    justify-content : space-between;
  }
  .list10{
    display: flex;
    justify-content : space-around;
  }
  .item{
    line-height: 40px;
    width: 20%;
    background: #cccccc;
    list-style: none;
    padding: 0 10px;
  }
</style>
