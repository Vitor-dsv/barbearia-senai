// import { all, call, put, takeLatest } from 'redux-saga/effects'
// import SessionService from '../../services/Session/SessionService'
// import {
//   SET_LOGGED_USER,
//   SET_LOGGED_USER_SUCCESS,
//   SET_LOGGED_USER_ERROR
// } from './types'

// export function * getLoggedUser ({ payload }: any): any {
//   try {
//     const { token } = payload
//     const response = yield call(SessionService.getLoggedUser, token)

//     yield put({ type: SET_LOGGED_USER_SUCCESS, payload: response.data })
//   } catch (error) {
//     yield put({ type: SET_LOGGED_USER_ERROR })
//   }
// }

// export function * watchSession () {
//   yield takeLatest(SET_LOGGED_USER, getLoggedUser)
// }

// export default function * rootSaga () {
//   yield all([
//     call(watchSession)
//   ])
// }
export {}
