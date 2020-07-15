import request from '@/utils/request'

export function getCityList(params) {
  return request({
    url: '/vue-guoqing/home/list',
    method: 'get',
    params
  })
}
