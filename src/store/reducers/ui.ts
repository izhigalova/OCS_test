import { handleActions } from 'redux-actions'
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_PRELOADER,
  HIDE_PRELOADER,
} from '../actions/actionTypes'

interface InitialState {
  spinnerIsShown: boolean
  preloaderIsShown: boolean
}

const initialState: InitialState = {
  spinnerIsShown: false,
  preloaderIsShown: false,
}

const handleShowSpinner = (state: InitialState) => ({
  ...state,
  spinnerIsShown: true,
})

const handleHideSpinner = (state: InitialState) => ({
  ...state,
  spinnerIsShown: false,
})

const handleShowPreloader = (state: InitialState) => ({
  ...state,
  preloaderIsShown: true,
})

const handleHidePreloader = (state: InitialState) => ({
  ...state,
  preloaderIsShown: false,
})

const ui = handleActions(
  {
    [SHOW_SPINNER]: handleShowSpinner,
    [HIDE_SPINNER]: handleHideSpinner,
    [SHOW_PRELOADER]: handleShowPreloader,
    [HIDE_PRELOADER]: handleHidePreloader,
  },
  initialState,
)

export default ui
