// import SessionService from '../../services/Session/SessionService'
import { LOGIN, LOGOUT } from './types'

export const login = (user: any) => {
  return {
    type: LOGIN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

// export const setUserByToken = (token: any) => {
//   return async (dispatch: any) => {
//     try {
//       const loggedUserResponse = await SessionService.getLoggedUser(token)
//       const user = loggedUserResponse

//       dispatch(login({ ...user, token }))
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
// export {}
