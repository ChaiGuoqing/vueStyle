const Mock = require('mockjs')
const data = Mock.mock({
  'items|1': [{
    id: '@id',
    'city|1': ['北京', '上海', '天津', '重庆', '武汉', '青岛', '济南', '广东', '深圳'],
    num: '@integer(100, 1000)'
  }]
})

module.exports = [
  {
    url: '/vue-guoqing/home/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
