import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import botsReducer from './botsReducer'
import routeReducer from './routeReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  bots: botsReducer,
  route: routeReducer,
  modal: modalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)))

export default store
