import { handleActions } from 'redux-actions'

const initialState = null

const handleFetchPostItem = (_state: any, { payload }: any) => payload

const postItem = handleActions(
  {
    ['FETCH_POST_ITEM_DONE']: handleFetchPostItem,
  },
  initialState,
)

export default postItem
