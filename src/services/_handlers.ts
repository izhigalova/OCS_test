import { AxiosResponse, AxiosError } from 'axios'

export const onSuccess = (response: AxiosResponse) => ({
  response: response.data,
})
export const onError = (error: AxiosError) => {
  if (error.response) {
    throw error.response.data
  }
}
