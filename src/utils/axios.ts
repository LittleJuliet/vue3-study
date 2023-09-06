import axios from 'axios'

const instance = axios.create({
  baseURL: `//${location.host}`,
  timeout: 10000
})

export default instance
