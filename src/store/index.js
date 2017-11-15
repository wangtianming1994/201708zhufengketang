import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducers';
let store = createStore(reducer,applyMiddleware(thunk,promise,logger));
export default store;