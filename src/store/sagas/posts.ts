import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services'
import { FETCH_POST_LIST, FETCH_POST_LIST_DONE } from '../actions/actionTypes'

function* fetchPostList() {
  try {
    const { response: postList } = yield call(Api.fetchPostList)
    const { response: userList } = yield call(Api.fetchUserList)

    const usersMap = userList.reduce((acc: any, currentUser: { id: any }) => {
      return { ...acc, [currentUser.id]: currentUser }
    }, {})

    const posts = postList.map((post: { userId: string | number }) => ({
      ...post,
      user: usersMap[post.userId],
    }))

    yield put({ type: FETCH_POST_LIST_DONE, payload: posts })
  } catch (error) {
    console.error('fetchPostListSaga', error)
  }
}

export default function* bots() {
  yield takeLatest(FETCH_POST_LIST, fetchPostList)
}
