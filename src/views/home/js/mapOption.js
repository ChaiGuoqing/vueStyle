// map-option.js
// const optionStyle = {
//   defaultStyle: {
//     backgroundColor: '#fff',
//     title: {
//       text: '每日运行图',
//       left: 'center',
//       top: 30,
//       textStyle: {
//         color: '#fff'
//       }
//     },
//   }
// }
const optionObject = {
  backgroundColor: '#080a20',
  title: {
    text: '每日运行图',
    left: 'center',
    top: 30,
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
  }, // 鼠标移到图里面的浮动提示框
  // dataRange: {
  //   show: false,
  //   min: 0,
  //   max: 1000,
  //   text: ['High', 'Low'],
  //   realtime: true,
  //   calculable: true,
  //   color: ['orangered', 'yellow', 'lightskyblue']
  // },
  geo: { // 这个是重点配置区
    map: 'china', // 表示中国地图
    roam: true,
    layoutCenter: ['50%', '50%'],
    layoutSize: '120%',
    label: {
      // normal: {
      //   show: true, // 是否显示对应地名
      //   textStyle: {
      //     color: 'rgba(0,0,0,0.4)'
      //   }
      // },
      emphasis: {
        show: true,
        color: '#adadad' // 选中区域高亮字体颜色
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#132937',
        borderColor: '#0692a4'
        // areaColor: '#323c48',
        // borderColor: '#404a59'
      },
      // emphasis: {
      //   areaColor: null,
      //   shadowOffsetX: 0,
      //   shadowOffsetY: 0,
      //   shadowBlur: 20,
      //   borderWidth: 0,
      //   shadowColor: 'rgba(0, 0, 0, 0.5)'
      // }
      emphasis: {
        areaColor: '#0b1c2d', // 选中区域高亮颜色
        // areaColor: '#2a333d',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 5,
        borderWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
      }
    }
  },
  series: [
    // {
    //   type: 'scatter',
    //   coordinateSystem: 'geo' // 对应上方配置
    // },
    {
      name: '启动次数', // 浮动框的标题
      type: 'map',
      geoIndex: 0,
      data: [{
        'name': '北京',
        'value': 599
      }, {
        'name': '上海',
        'value': 142
      }, {
        'name': '黑龙江',
        'value': 44
      }, {
        'name': '深圳',
        'value': 92
      }, {
        'name': '湖北',
        'value': 810
      }, {
        'name': '四川',
        'value': 453
      }]
    }
  ]
}
export default optionObject

