<template>
  <div class="pagination-container">
    <div class="pageTotal">共{{ Math.ceil(total/pageCurrentPageSize) }}页/{{ total }}条<span /></div>
    <!-- 分页设置 -->
    <!-- <div>
    <el-select class="yesize" v-model="pageCurrentPageSize" @change="updatePageSize">
        <el-option
        v-for="item in pagesizes"
        :key="item"
        :label="`${item}条/页`"
        :value="item">
        </el-option>
    </el-select>
</div> -->
    <div style="display:flex;align-items: center;">
      <div class="el-pagination btn-fore">
        <button type="button" class="btn-prev" :disabled="pageCurrentIndex==1" @click="toFore">首页</button>
      </div>
      <!-- 分页主体 -->
      <el-pagination
        background
        prev-text="上一页"
        next-text="下一页"
        layout="prev, pager, next"
        :pager-count="5"
        :current-page.sync="elPageIndex"
        :page-size.sync="pageSize"
        :total="total"
        @current-change="handleCurrentChange"
      />
      <div class="el-pagination btn-fore">
        <button type="button" class="btn-prev" :disabled="pageCurrentIndex==Math.ceil(total==0?1:total/pageCurrentPageSize)" @click="toAft">尾页</button>
      </div>
      <div class="pageJump">
        <span>跳至</span>
        <el-input v-model="pageCurrentIndex" class="yema" @change="inputBlur" />
        <span>页</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      layout: 'total,  prev, pager, next, jumper',
      background: true,
      pageCurrentTotal: 0,
      pageCurrentPageSize: 10,
      pageCurrentIndex: 1,
      elPageIndex: 1,
      pagesizes: [10, 20, 30, 40, 50]
    }
  },
  watch: {
    pageIndex: {
      handler(newVal, oldVal) {
        this.pageCurrentIndex = newVal
        this.elPageIndex = newVal
      },
      immediate: true
    },
    pageSize: {
      handler(newVal, oldVal) {
        this.pageCurrentPageSize = newVal
      },
      immediate: true
    },
    total: {
      handler(newVal, oldVal) {
        this.pageCurrentTotal = newVal
      },
      immediate: true
    },
    pageCurrentIndex(newVal, oldVal) {
      if (newVal === '') {
        // this.pageCurrentIndex = 1;
      } else {
        if (isNaN(parseInt(newVal))) {
          this.pageCurrentIndex = 1
        } else {
          if (parseInt(newVal) === 0) {
            this.pageCurrentIndex = 1
          } else {
            this.pageCurrentIndex = parseInt(newVal)
          }
        }
      }
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('pagination', val)
    },
    updatePageSize(val) {
      this.$emit('getPageSize', val)
    },
    updataCurrentIndex() {
      this.$emit('pagination', parseInt(this.pageCurrentIndex))
    },
    inputBlur() {
      if (this.pageCurrentIndex === '') {
        this.pageCurrentIndex = 1
      } else {
        if (parseInt(this.pageCurrentIndex) > Math.ceil(parseInt(this.total) / parseInt(this.pageCurrentPageSize))) {
          this.pageCurrentIndex = Math.ceil(this.total === 0 ? 1 : this.total / this.pageCurrentPageSize)
        }
      }
      this.updataCurrentIndex()
    },
    toFore() {
      this.pageCurrentIndex = 1
      this.updataCurrentIndex()
    },
    toAft() {
      this.pageCurrentIndex = Math.ceil(this.total === 0 ? 1 : this.total / this.pageCurrentPageSize)
      this.updataCurrentIndex()
    }
  }
}
</script>

<style lang="less" scoped>
.pagination-container {
    padding: 20px 0 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
}
/deep/.el-input__inner{
	height: 32px;
}
// 分页总数样式
.pageTotal{
    margin-right: 32px;
    color: #282B33;
    font-size: 14px;
    color:#999;
}
// 分页设置样式
.yesize{
	width: 102px;
	/deep/.el-input__icon{
		line-height: 32px;
	}
}
// 上下一页样式
/deep/ .el-pagination.is-background .btn-prev,/deep/ .el-pagination.is-background .btn-next{
    background-color: unset;
    height: unset;
    line-height: unset;
    span{
        height: 32px;
        line-height: 32px;
        color: #999;
    }
}
// 分页页码样式
/deep/ .el-pagination.is-background .el-pager li{
    background-color: unset;
    height: 32px;
    line-height: 32px;
    // width: unset;
    color: #999;
    &.active {
        width: 52px;
    }
}
// 首页尾页样式
.btn-fore.el-pagination{
    padding: 0;
    button{
        color: #999;
        padding: 0;
        margin: 0;
        height: 32px;
        line-height: 32px;
        background-color: unset;
    }
}
// 分页跳转样式
.pageJump{
    display:flex;
    align-items:center;
    margin-left:10px;
    color: #999;
}
.yema{
	width: 46px;
    font-size: 14px;
    margin: 0 6px;
	/deep/.el-input__inner{
		padding: 0;
		text-align: center;
        color: #B8BECC;
        background-color: unset;
        min-width: auto;
	}
}

</style>
