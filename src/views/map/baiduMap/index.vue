<!--  -->
<template>
  <div class=''>
          <div class="allmap" id="allmap"></div>
          <div class="btn">
              <el-button id='play' @click="play" type="primary" :disabled="isPlay">播放</el-button>
              <el-button id='pause' @click="pause" type="success" :disabled="isPause">暂停</el-button>
              <el-button id='reset' @click="reset" type="danger" :disabled="isReset">重置</el-button>
          </div>
  </div>
</template>

<script>
import cameraIcon from '@/assets/img/app_icon_Map_Equipment_small.png';
export default {
  components: {},
  data() {
    return {
     map:null,
     playBtn:null ,
     pauseBtn:null,
     resetBtn:null,
     isPlay:false,
     isPause:true,
     isReset:false,
     label:null,//信息标签 
     person:null,//人图标
     centerPoint:null,
     timer:null,    //定时器
     points:[],
     basePoints:[],
     index : 0,
    };
  },
  computed: {},
  watch: {},
  created() {
    
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap(){
    const path = [{
      'lng': 116.297611,
      'lat': 40.047363
    }, {
    	'lng': 116.302839,
    	'lat': 40.048219
    }, {
    	'lng': 116.308301,
    	'lat': 40.050566
    }, {
    	'lng': 116.305732,
    	'lat': 40.054957
    }, {
    	'lng': 116.304754,
    	'lat': 40.057953
    }, {
    	'lng': 116.306487,
    	'lat': 40.058312
    }, {
    	'lng': 116.307223,
    	'lat': 40.056379
    }];
      path.forEach(res=>{
        this.points.push(new BMapGL.Point(res.lng, res.lat))
        this.basePoints.push(new BMapGL.Point(res.lng, res.lat))
      })
      this.playBtn = document.getElementById("play");  
      this.pauseBtn = document.getElementById("pause");  
      this.resetBtn = document.getElementById("reset"); 
      this.map = new BMapGL.Map('allmap');

	    this.map.centerAndZoom(this.points[0], 16);
      this.map.enableScrollWheelZoom();
      const driving = new BMapGL.DrivingRoute(this.map); 
      driving.search(this.points[0], this.points[this.points.length-1]);
      const that=this
      driving.setSearchCompleteCallback(function() {
        //得到路线上的所有point
        that.points = driving.getResults().getPlan(0).getRoute(0).getPath();
        //画面移动到起点和终点的中间
        // that.centerPoint = new BMapGL.Point((that.points[0].lng + that.points[that.points.length - 1].lng) / 2, (that.points[0].lat + that.points[that.points.length - 1].lat) / 2);  
        // 画面移动到起点
        that.map.panTo(that.points[0]);
        //连接所有点  
        that.map.addOverlay(new BMapGL.Polyline(that.points, {strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5}));  
          
        //显示小人
        // that.label = new BMapGL.Label("", {offset: new BMapGL.Size(-20, -20)});
        // const personMarker= new BMapGL.Icon(cameraIcon, new BMapGL.Size(20, 25));
        // that.person = new BMapGL.Marker(that.points[0],{icon:personMarker});
        that.person = new BMapGL.Marker(that.points[0]);
        // that.person.setLabel(that.label);
        that.map.addOverlay(that.person);

        const cameraMarker = new BMapGL.Icon(cameraIcon, new BMapGL.Size(25, 30));
        for (let i= 0; i< that.basePoints.length; i++) {
          const camera='index'+i
          camera=new BMapGL.Marker(that.basePoints[i],{icon:cameraMarker});
          that.map.addOverlay(camera);
        }
      }); 
    },
    //播放
    play() {
        this.isPlay = true;  
        this.isPause = false; 
          
        var point = this.points[this.index];
        if(this.index > 0) {  
            this.map.addOverlay(new BMapGL.Polyline([this.points[this.index - 1], point], {strokeColor: "red", strokeWeight: 1, strokeOpacity: 0.5}));  
        }  
        // this.label.setContent("经度: " + point.lng + "<br>纬度: " + point.lat);  
        this.person.setPosition(point);  
        this.index++;
        if(this.index < this.points.length) {
            const self = this;
            self.timer = window.setTimeout(self.play, 500);  
        } else {  
          this.isPlay = true;  
          this.isPause = true; 
          this.map.panTo(point);  
        }
      this.map.panTo(point); 
    },
    //暂停
    pause() {  
        this.isPlay = false;  
        this.isPause = true;  
          
        if(this.timer) {  
            window.clearTimeout(this.timer);  
        }  
    },
    //重置
    reset() {  
        this.isPlay = false;  
        this.isPause = true;  
          
        if(this.timer) {  
            window.clearTimeout(this.timer);  
        }  
        this.index = 0;  
        this.person.setPosition(this.points[0]);  
        this.map.panTo(this.points[0]);  
    }

  }
}
</script>
<style lang='scss' scoped>
.allmap{
  width: 100%;
  height: calc(100vh - 150px);
}
.btn{
  display: flex;
  padding: 10px 50px;
  button{
    min-width: 100px;
  }
}
</style>