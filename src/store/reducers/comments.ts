import { handleActions } from 'redux-actions'
import { FETCH_COMMENT_LIST_DONE } from '../actions/actionTypes'
import { Comment } from '../../types'

const initialState: Comment[] = []

const handleFetchCommentList = (
  _state: Comment[],
  { payload }: { payload: Comment[] },
) => payload

const postList = handleActions(
  {
    [FETCH_COMMENT_LIST_DONE]: handleFetchCommentList,
  },
  initialState,
)

export default postList
