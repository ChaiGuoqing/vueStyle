<template>
  <div class="index">
    <div>
      <el-row>
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <topLeft></topLeft>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <topCenter></topCenter>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <topRight/>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
             <tableAnimation></tableAnimation>
          </div>
        </el-col>
      </el-row>

    </div>
    <div style="margin-top:30px">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <bottomRightChart></bottomRightChart>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
               <bottomLeftChart />
          </div>
        </el-col>
      </el-row>
      
      <!-- <center></center> -->
    </div>
    <div style="margin-top:0px">
      <!-- <bottomLeftChart /> -->
      <!-- <bottomRightChart></bottomRightChart> -->
    </div>
  </div>
</template>

<script>
import bottomLeftChart from "./components/bottomLeftChart";
import bottomRightChart from "./components/bottomRightChart";
import topLeft from "./components/topLeft";
import topCenter from "./components/topCenter";
import topRight from "./components/topRight";
import center from "./components/center";
import tableAnimation from '../home/components/tableAnimation'
export default {
  components: {
    bottomLeftChart,
    bottomRightChart,
    topLeft,
    topCenter,
    topRight,
    center,
    tableAnimation
  },
  data() {
    return {
      loading: true
    }
  },
  created() {

  },
  mounted() {
    // this.cancelLoading()
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }

}
</script>
<style lang='scss' scoped>
.index{
  padding: 20px 20px 20px 0;
  background-image:url("../../assets/img/pageBg.png") ;
  height: 100%;
}
</style>
