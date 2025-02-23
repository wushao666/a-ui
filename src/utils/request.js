import axios from 'axios'

const service = axios.create({
  // baseURL: 'https://api.imooc-front.lgdsunday.club/api',
  // baseURL: '/api',
  //根据环境来配置参数
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})
//响应拦截器，统一处理后端的返回
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    // 业务错误
    return Promise.reject(new Error(message))
  }
})
console.log('import.meta.env.VITE_BASE_API is: ', import.meta.env.VITE_BASE_API);

export default service