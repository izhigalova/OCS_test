import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services'
import {
  FETCH_POST_LIST,
  FETCH_POST_LIST_DONE,
  FETCH_POST_ITEM,
  FETCH_POST_ITEM_DONE,
  FETCH_COMMENT_LIST_DONE,
  SHOW_SPINNER,
  HIDE_SPINNER,
  FETCH_MORE_POSTS_DONE,
} from '../actions/actionTypes'
import { Id } from '../../types'

interface PostPayload {
  start?: number
  limit?: number
}

interface PostsAction {
  type: 'FETCH_POST_LIST'
  payload: PostPayload
}

function* fetchPostList(action: PostsAction) {
  yield put({ type: SHOW_SPINNER })
  try {
    const { response } = yield call(() =>
      Api.fetchPostList(action.payload.start, action.payload.limit),
    )
    const type =
      action.payload.limit != null && action.payload.start != null
        ? FETCH_MORE_POSTS_DONE
        : FETCH_POST_LIST_DONE

    yield put({ type, payload: response })
  } catch (error) {
    console.error('fetchPostListSaga', error)
  }
  yield put({ type: HIDE_SPINNER })
}

interface PostPayload {
  id: Id
}

interface PostAction {
  type: 'FETCH_POST_ITEM'
  payload: PostPayload
}

function* fetchPostItem(action: PostAction) {
  yield put({ type: SHOW_SPINNER })
  try {
    const { response: post } = yield call(() =>
      Api.fetchPostItem(action.payload.id),
    )
    const userId = post.userId
    const { response: user } = yield call(() => Api.fetchUserItem(userId))
    const { response: comments } = yield call(() =>
      Api.fetchCommentList(action.payload.id),
    )

    yield put({ type: FETCH_POST_ITEM_DONE, payload: { ...post, user } })
    yield put({ type: FETCH_COMMENT_LIST_DONE, payload: comments })
  } catch (error) {
    console.error('fetchPostItemSaga', error)
  }
  yield put({ type: HIDE_SPINNER })
}

export default function* posts() {
  yield takeLatest(FETCH_POST_LIST, fetchPostList)
  yield takeLatest(FETCH_POST_ITEM, fetchPostItem)
}
