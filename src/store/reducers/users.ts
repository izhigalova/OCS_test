import { handleActions } from 'redux-actions'
import { FETCH_USER_LIST_DONE } from '../actions/actionTypes'
import { User, UsersState } from '../../types'

const initialState = null

const handleFetchUserListDone = (
  state: UsersState | null,
  { payload }: { payload: User[] },
) => {
  if (state === null) {
    const usersMap = payload.reduce((acc: any, currentUser: { id: any }) => {
      return { ...acc, [currentUser.id]: currentUser }
    }, {})

    return usersMap
  }

  return state
}

const postList = handleActions(
  {
    [FETCH_USER_LIST_DONE]: handleFetchUserListDone,
  },
  initialState,
)

export default postList
