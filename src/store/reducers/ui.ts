import { handleActions } from 'redux-actions'
import { SHOW_SPINNER, HIDE_SPINNER } from '../actions/actionTypes'

interface InitialState {
  dataIsLoading: boolean
}

const initialState: InitialState = {
  dataIsLoading: false,
}

const handleShowSpinner = (state: InitialState) => ({
  ...state,
  dataIsLoading: true,
})

const handleHideSpinner = (state: InitialState) => ({
  ...state,
  dataIsLoading: false,
})

const ui = handleActions(
  {
    [SHOW_SPINNER]: handleShowSpinner,
    [HIDE_SPINNER]: handleHideSpinner,
  },
  initialState,
)

export default ui
