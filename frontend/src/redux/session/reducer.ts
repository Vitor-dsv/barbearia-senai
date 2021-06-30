import { LOGIN, LOGOUT } from './types'

const initialState = {
  session: {
    user: { id: 1 }
  }
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        session: {
          user: action.payload
        }
      }
    case LOGOUT:
      return {
        session: {
          user: {}
        }
      }
    default:
      return state
  }
}

export default reducer
