import { handleActions } from 'redux-actions'
import { FETCH_POST_LIST_DONE } from '../actions/actionTypes'
import { Post } from '../../types'

const initialState: Post[] = []

const handleFetchPostList = (state: Post[], { payload }: { payload: Post[] }) =>
  payload

const postList = handleActions(
  {
    [FETCH_POST_LIST_DONE]: handleFetchPostList,
  },
  initialState,
)

export default postList
