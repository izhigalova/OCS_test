import { handleActions } from 'redux-actions'

const initialState: never[] = []

const handleFetchPostList = (state: any, { payload }: any) => payload

const postList = handleActions(
  {
    ['FETCH_POST_LIST_DONE']: handleFetchPostList,
  },
  initialState,
)

export default postList
