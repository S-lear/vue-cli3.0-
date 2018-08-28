import axios from 'axios'
import {config} from '@/api/config.js'

// https://github.com/axios/axios axios地址
// 添加新的baseUrl再创建一个实例

export const appService = axios.create({
  baseURL: config.appService,
  timeout: 1000,
  headers: {}
})

const services = [appService]

services.forEach(service => {
  service.defaults.headers.common['Authorization'] = 'token'
  service.interceptors.response.use(response => {
    if (response.status == 200) {
      return response.data;
    }
  }, error => Promise.reject(error))
})
