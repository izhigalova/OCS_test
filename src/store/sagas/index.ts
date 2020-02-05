import { fork, all } from 'redux-saga/effects'
import posts from './posts'

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

export default function* root() {
  yield all([helloSaga(), fork(posts)])
}
