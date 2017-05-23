import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* doSomething(action) {
  const result = yield call(_);
  yield put({ type: '', result })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchForSomeThing() {
  yield* takeEvery('FETCH_CATEGORY', incrementAsync)
}

export default function* root() {
  yield [
    fork(watchForSomeThing)
  ]
}
