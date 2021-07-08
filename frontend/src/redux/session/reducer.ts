import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS } from './types'

export interface State {
  session: {
    user: any
    error: boolean
    loading: boolean
  }
}

const initialState: State = {
  session: {
    user: {},
    error: false,
    loading: false
  }
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        session: {
          ...state.session,
          loading: true,
          error: false
        }
      }
    case LOGIN_SUCCESS:
      return {
        session: {
          ...initialState.session,
          user: action!.payload
        }
      }
    case LOGIN_ERROR:
      return {
        session: {
          ...state.session,
          loading: false,
          error: true
        }
      }
      // case LOGOUT:
      //   return {
      //     session: {

    //       user: {}
    //     }
    //   }
    default:
      return state
  }
}

export default reducer
