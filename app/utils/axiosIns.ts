import axios from 'axios'

export const axiosIns = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: true
})