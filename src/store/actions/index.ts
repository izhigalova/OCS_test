import { createAction } from 'redux-actions'
import {
  FETCH_POST_ITEM,
  FETCH_POST_LIST,
  FETCH_USER_LIST,
} from './actionTypes'

export const fetchPostItem = createAction(FETCH_POST_ITEM)
export const fetchPostList = createAction(FETCH_POST_LIST)
export const fetchUserList = createAction(FETCH_USER_LIST)
