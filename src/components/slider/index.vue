<template>
  <div ref="slider" class="slider">
    <div class="process" :style="{ width }" />
    <div ref="trunk" class="thunk" :style="{ left }">
      <div class="block" />
      <div v-if="isShowTip" class="tips">
        <span>{{ perVal }}</span>
        <i class="el-icon-caret-bottom" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowTip: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      slider: null,
      thunk: null
    }
  },
  computed: {
    scale() {
      return (this.perVal - this.min) / (this.max - this.min)
    },
    width() {
      if (this.slider) {
        return this.slider.offsetWidth * this.scale + 'px'
      } else {
        return 0 + 'px'
      }
    },
    left() {
      if (this.slider) {
        return (
          this.slider.offsetWidth * this.scale - this.thunk.offsetWidth / 2 + 'px'
        )
      } else {
        return 0 + 'px'
      }
    },
    perVal() {
      return this.value
    }
  },
  mounted() {
    this.slider = this.$refs.slider
    this.thunk = this.$refs.trunk
    var _this = this
    this.thunk.onmousedown = function(e) {
      var width = parseInt(_this.width)
      var disX = e.clientX
      document.onmousemove = function(e) {
        var newWidth = e.clientX - disX + width
        var scale = newWidth / _this.slider.offsetWidth
        _this.per = Math.ceil((_this.max - _this.min) * scale + _this.min)
        _this.per = Math.max(_this.per, _this.min)
        _this.per = Math.min(_this.per, _this.max)
        _this.$emit('input', _this.per)
      }
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null
      }
      return false
    }
  }
}
</script>
<style>
.box {
  margin: 100px auto 0;
  width: 80%;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.slider {
  position: relative;
  margin: 20px 0;
  height: 2px;
  background: #e4e7ed;
  border-radius: 5px;
  cursor: pointer;
}
.slider .process {
  position: absolute;
  left: 0;
  top: 0;
  width: 112px;
  height: 2px;
  border-radius: 5px;
  background: #409eff;
}
.slider .thunk {
  position: absolute;
  left: 100px;
  top: -7px;
  width: 20px;
  height: 20px;
}
.slider .block {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #409eff;
  transition: 0.2s all;
}
.slider .tips {
  position: absolute;
  left: -9px;
  bottom: 30px;
  min-width: 15px;
  text-align: center;
  padding: 4px 8px;
  background: #409eff;
  color: #fff;
}
.slider .tips i {
  position: absolute;
  margin-left: -5px;
  left: 40%;
  bottom: -9px;
  font-size: 16px;
  color: #409eff;
}
.slider .block:hover {
  transform: scale(1.1);
  opacity: 0.6;
}
</style>
