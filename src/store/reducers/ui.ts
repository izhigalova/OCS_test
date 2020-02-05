import { handleActions } from 'redux-actions'
import { SET_DATA_LOADING } from '../actions/actionTypes'

interface InitialState {
  dataIsLoading: boolean
}

const initialState: InitialState = {
  dataIsLoading: false,
}

const setDataLoadingCondition = (
  state: InitialState,
  { payload }: { payload: boolean },
) => ({ ...state, dataIsLoading: payload })

const ui = handleActions(
  {
    [SET_DATA_LOADING]: setDataLoadingCondition,
  },
  initialState,
)

export default ui
