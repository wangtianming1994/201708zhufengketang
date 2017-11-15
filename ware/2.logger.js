import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
let initState = {number:0};
let reducer = (state=initState,action)=>{
  switch (action.type){
    case 'ADD':
      return {number:state.number+1};
    default:
      return state;
  }
}
let store = createStore(reducer,applyMiddleware(thunk,logger));
//现在派发一个action,也就是一个函数。此函数内部有定时器，在3秒之后才派发真正action
//现在只需要让派发action的时候，让函数立刻执行。然后等待3秒后派发真正的action
//Actions must be plain objects. Use custom middleware for async actions.
//Action必须是单纯的对象，如果要使用异步操作，必须使用自定义的中间件
//thunk中间件的使用可以让我们可以派发函数的action
store.dispatch(function(dispatch){
  setTimeout(()=>{
    dispatch({type:'ADD'});
  },3000)
});


