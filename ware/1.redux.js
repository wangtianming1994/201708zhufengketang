//import {createStore} from 'redux';
let redux = require('redux');

let initState = {number:0};
let reducer = (state=initState,action)=>{
  switch (action.type){
    case 'ADD':
      return {number:state.number+1};
    default:
      return state;
  }
}
let store = redux.createStore(reducer);
//把老的原生的dispatch方法保存到一个变量中去
let next = store.dispatch;
//重写了dispatch方法
store.dispatch = function(action){
  console.log('老状态:',store.getState());
  next(action);
  console.log('新状态:',store.getState());
}

store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});
