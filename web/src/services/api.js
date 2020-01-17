import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.16.8.106:3333'
})

export default api