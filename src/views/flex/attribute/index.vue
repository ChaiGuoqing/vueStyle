<!--  -->
<template>
  <div class="content">
    <div class="flex">
      <el-row class="flex_row">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="2">
          <span>flex-direction：</span>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-select v-model="directionValue">
            <el-option
              v-for="item in directionOptions"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>
      <p>{{ directionOptions[directionValue-1].des }}</p>
      <div :style="{display:'flex',flexDirection:directionOptions[directionValue-1].label}">
        <li v-for="(item , index) in data" :key="index" class="item">
          {{ item.id }} --- {{ item.name }}
        </li>
      </div>
    </div>
    <div class="flex">
      <el-row class="flex_row">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="2">
          <span>justify-content：</span>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-select v-model="contentValue">
            <el-option
              v-for="item in contentOptions"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>
      <p>{{ contentOptions[contentValue-1].des }}</p>
      <div :style="{display:'flex',justifyContent:contentOptions[contentValue-1].label}">
        <li v-for="(item , index) in data" :key="index" class="item">
          {{ item.id }} --- {{ item.name }}
        </li>
      </div>
    </div>
    <div class="flex">
      <el-row class="flex_row">
        <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="2">
          <span>flex-wrap：</span>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <el-select v-model="wrapValue" placeholder="请选择">
            <el-option
              v-for="item in wrapOptions"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>
      <p>{{ wrapOptions[wrapValue-1].des }}</p>
      <div :style="{display:'flex',flexWrap:wrapOptions[wrapValue-1].label}">
        <li v-for="(item , index) in data" :key="index" class="item2">
          {{ item.id }} --- {{ item.name }}
        </li>
      </div>
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
        { id: 2, name: 'aa' },
        // { id: 4, name: 'aa' },
        // { id: 5, name: 'aa' },
        { id: 6, name: 'aa' }
      ],
      directionValue: 1,
      contentValue: 4,
      wrapValue: 1,
      directionOptions: [
        {
          id: 1,
          label: 'row',
          des: '沿水平主轴让元素从左向右排列'
        },
        {
          id: 2,
          label: 'column',
          des: '让元素沿垂直主轴从上到下垂直排列'
        },
        {
          id: 3,
          label: 'row-reverse',
          des: '沿水平主轴让元素从右向左排列'
        }
      ],
      wrapOptions: [
        {
          id: 1,
          label: 'nowrap',
          des: '(默认)元素不换行,比如：一个div宽度100%，设置此属性，2个div宽度就自动变成各50%；'
        },
        {
          id: 2,
          label: 'wrap',
          des: '元素换行,比如：一个div宽度100%，设置此属性，第二个div就在第二行了；'
        }
      ],
      contentOptions: [
        {
          id: 1,
          label: 'center',
          des: '元素在主轴（页面）上居中排列'
        },
        {
          id: 2,
          label: 'flex-start',
          des: '元素在主轴（页面）上由左或者上开始排列'
        },
        {
          id: 3,
          label: 'flex-end',
          des: '元素在主轴（页面）上由右或者下开始排列'
        },
        {
          id: 4,
          label: 'space-between',
          des: '元素在主轴（页面）上左右两端或者上下两端开始排列'
        },
        {
          id: 5,
          label: 'space-around',
          des: '每个元素两侧的间隔相等。所以，元素之间的间隔比元素与边框的间隔大一倍。'
        }
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
  .flex{
    margin: 20px 0;
    padding:30px 20px;
    border: 1px solid #ccc;
  }
  .flex_row{
    line-height: 40px;
  }
  .item{
    line-height: 40px;
    width: 20%;
    background: #cccccc;
    list-style: none;
    padding: 0 10px;
  }
  .item2{
    line-height: 40px;
    width: 100%;
    background: #cccccc;
    list-style: none;
    padding: 0 10px;
  }
</style>
