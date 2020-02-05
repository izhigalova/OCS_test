import { handleActions } from 'redux-actions'
import { Post } from '../../types'
import { FETCH_POST_ITEM_DONE } from '../actions/actionTypes'

const initialState: Post | null = null

const handleFetchPostItem = (
  _state: Post | null,
  { payload }: { payload: Post },
) => payload

const postItem = handleActions(
  {
    [FETCH_POST_ITEM_DONE]: handleFetchPostItem,
  },
  initialState,
)

export default postItem
