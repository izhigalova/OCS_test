import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services'
import {
  FETCH_POST_LIST,
  FETCH_POST_LIST_DONE,
  FETCH_POST_ITEM,
  FETCH_POST_ITEM_DONE,
} from '../actions/actionTypes'
import { Id } from '../../types'

function* fetchPostList() {
  try {
    const { response: postList } = yield call(Api.fetchPostList)
    const { response: userList } = yield call(Api.fetchUserList)

    const usersMap = userList.reduce((acc: any, currentUser: { id: any }) => {
      return { ...acc, [currentUser.id]: currentUser }
    }, {})

    const posts = postList.map((post: { userId: Id }) => ({
      ...post,
      user: usersMap[post.userId],
    }))

    yield put({ type: FETCH_POST_LIST_DONE, payload: posts })
  } catch (error) {
    console.error('fetchPostListSaga', error)
  }
}

interface PostPayload {
  id: Id
}

interface PostAction {
  type: 'FETCH_POST_ITEM'
  payload: PostPayload
}

function* fetchPostItem(action: PostAction) {
  try {
    const { response: post } = yield call(() =>
      Api.fetchPostItem(action.payload.id),
    )
    const userId = post.userId
    const { response: user } = yield call(() => Api.fetchUserItem(userId))
    const { response: comments } = yield call(() =>
      Api.fetchCommentList(action.payload.id),
    )

    // fetchCommentList
    console.log('comments', comments)

    yield put({ type: FETCH_POST_ITEM_DONE, payload: { ...post, user } })
  } catch (error) {
    console.error('fetchPostItemSaga', error)
  }
}

export default function* posts() {
  yield takeLatest(FETCH_POST_LIST, fetchPostList)
  yield takeLatest(FETCH_POST_ITEM, fetchPostItem)
}
