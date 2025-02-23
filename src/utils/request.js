import axios from 'axios'

const service = axios.create({
  // baseURL: 'https://api.imooc-front.lgdsunday.club/api',
  // baseURL: '/api',
  //根据环境来配置参数
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})
console.log('import.meta.env.VITE_BASE_API is: ', import.meta.env.VITE_BASE_API);

export default service