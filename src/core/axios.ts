import axios from 'axios'

import { getCookie } from 'utils'

const isDev = process.env.NODE_ENV === 'development'

export const API = axios.create({
  baseURL: isDev ? 'http://localhost:3000/api/' : 'http://localhost:3000/api/1',
  withCredentials: true
})

API.interceptors.request.use((req) => {
  const accessToken = getCookie('accessToken')

  if (req.headers && accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`
  }

  return req
})
