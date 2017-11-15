import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
let initState = {number: 0};
let reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD':
      return {number: state.number + 1};
    default:
      return state;
  }
}
let store = createStore(reducer, applyMiddleware(thunk,promise, logger));
//这是一promise实例，用来返回一个promise
let task =  new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({type: 'ADD'});
  }, 1000);
});
store.dispatch(task);