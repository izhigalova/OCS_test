import axios from './axios'
import { onSuccess, onError } from './_handlers'
import { Id } from '../types'

export const fetchPostList = () =>
  axios.get('/posts?_start=0&_limit=25').then(onSuccess, onError)
export const fetchUserList = () => axios.get('/users').then(onSuccess, onError)
export const fetchPostItem = (id: Id) =>
  axios.get(`/posts/${id}`).then(onSuccess, onError)
export const fetchUserItem = (id: Id) =>
  axios.get(`/users/${id}`).then(onSuccess, onError)
