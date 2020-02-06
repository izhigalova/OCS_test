import { fork, all } from 'redux-saga/effects'
import posts from './posts'
import comments from './comments'
import users from './users'

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

export default function* root() {
  yield all([helloSaga(), fork(posts), fork(comments), fork(users)])
}
