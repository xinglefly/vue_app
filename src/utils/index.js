import http from './http'

export default function request(url = '', data, host = 'chinapost') {
  console.log(http)
  return http[`${host}`].post(url, data)
}