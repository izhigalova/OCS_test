import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services'
import {
  FETCH_COMMENT_LIST,
  FETCH_COMMENT_LIST_DONE,
} from '../actions/actionTypes'
import { Id } from '../../types'

interface CommentsPayload {
  postId: Id
}

interface CommentsAction {
  type: 'FETCH_COMMENT_LIST'
  payload: CommentsPayload
}

function* fetchCommentList(action: CommentsAction) {
  try {
    const { response: commentList } = yield call(() =>
      Api.fetchCommentList(action.payload.postId),
    )

    yield put({ type: FETCH_COMMENT_LIST_DONE, payload: commentList })
  } catch (error) {
    console.error('fetchCommentListSaga', error)
  }
}

export default function* comments() {
  yield takeLatest(FETCH_COMMENT_LIST, fetchCommentList)
}
