import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import botsReducer from './botsReducer';

const rootReducer = combineReducers({
  bots: botsReducer
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
