import axios from './axios'
import { onSuccess, onError } from './_handlers'
import { Id } from '../types'

export const fetchPostList = (start = 0, limit = 25) =>
  axios.get(`/posts?_start=${start}&_limit=${limit}`).then(onSuccess, onError)
export const fetchUserList = () => axios.get('/users').then(onSuccess, onError)
export const fetchPostItem = (id: Id) =>
  axios.get(`/posts/${id}`).then(onSuccess, onError)
export const fetchUserItem = (id: Id) =>
  axios.get(`/users/${id}`).then(onSuccess, onError)
export const fetchCommentList = (postId: Id) =>
  axios.get(`/posts/${postId}/comments`).then(onSuccess, onError)
