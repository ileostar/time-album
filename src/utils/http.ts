import type { AxiosResponse } from 'axios'
import un, { type UnConfig } from '@uni-helper/uni-network'

const instance = un.create({
  baseUrl: 'http://192.168.2.54:42500/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

// 添加请求拦截器
un.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么
    return config
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
un.interceptors.response.use(
  (response: any) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response
  },
  (error: any) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

interface Data {
  [index: string]: unknown
}

interface Http {
  get: (
    url: string,
    data?: Data,
    config?: UnConfig,
  ) => Promise<AxiosResponse>
  post: (
    url: string,
    data?: Data | Array<string>,
    config?: UnConfig,
  ) => Promise<AxiosResponse>
  put: (
    url: string,
    data?: Data,
    config?: UnConfig,
  ) => Promise<AxiosResponse>
  patch: (
    url: string,
    data?: Data,
    config?: UnConfig,
  ) => Promise<AxiosResponse>
  delete: (
    url: string,
    data?: Data,
    config?: UnConfig,
  ) => Promise<AxiosResponse>
}

const http: Http = {
  get(url, data, config) {
    return instance.get(url, {
      params: data,
      ...config,
    })
  },
  post(url, data, config) {
    return instance.post(url, data, config)
  },
  put(url, data, config) {
    return instance.put(url, data, config)
  },
  patch(url, data, config) {
    return instance.patch(url, data, config)
  },
  delete(url, data, config) {
    return instance.delete(url, {
      data,
      ...config,
    })
  },
}

export default http
