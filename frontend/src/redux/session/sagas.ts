import { all, call, put, takeLatest } from 'redux-saga/effects'
import SessionService from '../../services/Session/SessionService'
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN
} from './types'

export function * setUserByToken (): any {
  try {
    const user = yield call(SessionService.getLoggedUser)
    console.log(user)

    yield put({ type: LOGIN_SUCCESS, payload: user })
  } catch (error) {
    yield put({ type: LOGIN_ERROR })
  }
}

export function * watchSession () {
  yield takeLatest(LOGIN, setUserByToken)
}

export default function * rootSaga () {
  yield all([
    call(watchSession)
  ])
}
// export {}
