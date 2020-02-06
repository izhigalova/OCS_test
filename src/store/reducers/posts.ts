import { handleActions } from 'redux-actions'
import {
  FETCH_POST_LIST_DONE,
  FETCH_MORE_POSTS_DONE,
} from '../actions/actionTypes'
import { Post } from '../../types'

const initialState: Post[] = []

const handleFetchPostList = (
  _state: Post[],
  { payload }: { payload: Post[] },
) => payload

const handleFetchMorePosts = (
  state: Post[],
  { payload }: { payload: Post[] },
) => [...state, ...payload]

const postList = handleActions(
  {
    [FETCH_POST_LIST_DONE]: handleFetchPostList,
    [FETCH_MORE_POSTS_DONE]: handleFetchMorePosts,
  },
  initialState,
)

export default postList
