import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services'
import { FETCH_POST_LIST, FETCH_POST_LIST_DONE } from '../actions/actionTypes'

function* fetchPostList() {
  try {
    const { response } = yield call(Api.fetchPostList)
    yield put({ type: FETCH_POST_LIST_DONE, payload: response })
  } catch (error) {
    console.error('fetchPostListSaga', error)
  }
}

export default function* bots() {
  yield takeLatest(FETCH_POST_LIST, fetchPostList)
}
