export const onSuccess = (response: any) => ({ response: response.data })
export const onError = (error: any) => {
  throw error.response.data
}
