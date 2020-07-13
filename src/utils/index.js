/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
/**
 * 读取base64
 */
export const readFile = file => {
  // var file = this.files[0];
  // 判断是否是图片类型
  if (!/image\/\w+/.test(file.raw.type)) {
    alert('只能选择图片')
    return false
  }
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function(e) {
    var filedata = {
      filename: file.name,
      filebase64: e.target.result
    }
    console.log(filedata)
    alert(e.target.result)
  }
}
/**
 * 导出excel表格文件
 * @param {*} data
 * @param {*} fileName
 */
export const download_blob = (data, fileName) => {
  const blob = new Blob([data], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
  })
  const href = window.URL.createObjectURL(blob) // 创建下载的链接
  if (window.navigator.msSaveOrOpenBlob) {
    // IE下载
    navigator.msSaveBlob(blob, fileName)
  } else {
    // IE10+下载
    const aEle = document.createElement('a') // 创建a标签
    aEle.href = href
    aEle.download = fileName // 下载后文件名
    document.body.appendChild(aEle)
    aEle.click() // 点击下载
    document.body.removeChild(aEle) // 下载完成移除元素
    window.URL.revokeObjectURL(href) // 释放掉blob对象
  }
}
/**
 * @param {date} 标准时间格式:Fri Nov 17 2017 09:26:23 GMT+0800 (中国标准时间)
 * @param {type} 类型
 *   type == 1 ---> "yyyy-mm-dd hh:MM:ss.fff"
 *   type == 2 ---> "yyyymmddhhMMss"
 *   type == '' ---> "yyyy-mm-dd hh:MM:ss"
 */
export const formatDate = (date, type) => {
  var year = date.getFullYear() // 年
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 月
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 日
  var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 时
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分
  var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
  var milliseconds = date.getMilliseconds() < 10 ? '0' + date.getMilliseconds() : date.getMilliseconds() // 毫秒
  if (type === 1) {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds + '.' + milliseconds
  } else if (type === 2) {
    return year + '' + month + '' + day + '' + hour + '' + minutes + '' + seconds
  } else if (type === 3) {
    return year + '-' + month + '-' + day
  } else if (type === 4) {
    return year + '-' + month + '-' + day + 'T' + hour + ':' + minutes + ':' + seconds + '+08:00'
  } else {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
  }
}
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
* 获取localStorage
*/
export const getStore = name => {
  if (!name) return
  var value = window.localStorage.getItem(name)
  if (value !== null) {
    try {
      value = JSON.parse(value)
    } catch (e) {
      // value = value
    }
  }
  return value
}

/**
* 删除localStorage
*/
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

import CryptoJS from 'crypto-js'
/**
 * 递归遍历替换参数对象中非Json格式string类型数据中特殊字符，\替换为/,"替换为',主要遍历obj和array类型的数据
 * @param obj 目标对象
 * @return obj 替换特殊字符后的对象
 */
export const repalceSpecialStr = (obj) => {
  // 判断数据类型
  function getDataType(o) {
    var type = typeof o
    if (type === 'object') {
      if (o === null) {
        return 'null'
      }
      if (o instanceof Array) {
        return 'array'
      } else {
        return 'object'
      }
    } else if (type === 'string') { // 对json字符串不做替换处理
      try {
        var obj = JSON.parse(o)
        if (typeof obj === 'object' && obj) {
          return 'json'
        } else {
          return 'string'
        }
      } catch (e) {
        return 'string'
      }
    } else {
      return type
    }
  }
  for (var i in obj) {
    var type = getDataType(obj[i])
    if (type === 'string') {
      obj[i] = obj[i].replace(/\\/g, '/').replace(/"/g, '“').replace(/'/g, '‘')
    } else if (type === 'object' || type === 'array') {
      obj[i] = repalceSpecialStr(obj[i])
    }
  }
  return obj
}

// MD5加密方法
export const MD5 = (obj) => {
  return CryptoJS.MD5(obj).toString()
}
