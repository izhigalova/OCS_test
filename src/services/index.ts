import axios from './axios'
import { onSuccess, onError } from './_handlers'

export const fetchPostList = () =>
  axios.get('/posts?_start=0&_limit=25').then(onSuccess, onError)
export const fetchUserList = () => axios.get('/users').then(onSuccess, onError)
