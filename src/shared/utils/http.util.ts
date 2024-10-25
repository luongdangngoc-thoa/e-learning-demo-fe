import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

import { cookieStoreClient } from './cookies/client.util'
import { convertToCamelCase } from './data.util'

export const axiosInterceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

const handleResponse = (response: AxiosResponse) => {
  response.data = convertToCamelCase(response.data)
  return response
}

const handleResponseError = (error: any) => {
  if (axios.isAxiosError(error) && error.response) {
    const errorMessage = error.response.data.message || 'An error occurred'
    throw new Error(errorMessage)
  } else {
    throw new Error('An unknown error occurred')
  }
}

const handleRequest = (config: InternalAxiosRequestConfig) => {
  const accessToken = cookieStoreClient.get('accessToken')

  if (accessToken) {
    const modifiedConfig = { ...config }
    modifiedConfig.headers.Authorization = `Bearer ${accessToken}`
    return modifiedConfig
  }

  return config
}

const handleRequestError = (error: AxiosError) => Promise.reject(error)

axiosInterceptor.interceptors.response.use(handleResponse, handleResponseError)
axiosInterceptor.interceptors.request.use(handleRequest, handleRequestError)
