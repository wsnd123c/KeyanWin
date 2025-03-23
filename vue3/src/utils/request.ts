import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://localhost:3000', // API 基础地址
  timeout: 5000, // 请求超时
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    alert(`错误: ${error.response?.data?.message || '请求失败'}`)
    return Promise.reject(error)
  },
)

export default service
