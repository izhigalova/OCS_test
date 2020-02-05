import axios from './axios'
import { onSuccess, onError } from './_handlers'

export const fetchPostList = () => axios.get('/posts').then(onSuccess, onError)
