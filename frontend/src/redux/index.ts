// import sessionReducer from './session/reducer'
// import { applyMiddleware, compose, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './session/sagas'

// const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const sagaMiddleware = createSagaMiddleware()

// export const store = createStore(
//   sessionReducer,
//   composeEnhancers(
//     applyMiddleware(sagaMiddleware)
//   )
// )

// sagaMiddleware.run(rootSaga)
// export {}

import sessionReducer from './session/reducer'
import { createStore, compose } from 'redux'

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  sessionReducer,
  composeEnhancers()
)
