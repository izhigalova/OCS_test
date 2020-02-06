import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services'
import { FETCH_USER_LIST, FETCH_USER_LIST_DONE } from '../actions/actionTypes'
import { Id } from '../../types'

function* fetchUserList() {
  try {
    const { response } = yield call(Api.fetchUserList)
    yield put({ type: FETCH_USER_LIST_DONE, payload: response })
  } catch (error) {
    console.error('fetchUserListSaga', error)
  }
}

export default function* users() {
  yield takeLatest(FETCH_USER_LIST, fetchUserList)
}
