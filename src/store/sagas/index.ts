import { fork, all } from 'redux-saga/effects'
import posts from './posts'
import comments from './comments'

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

export default function* root() {
  yield all([helloSaga(), fork(posts), fork(comments)])
}
