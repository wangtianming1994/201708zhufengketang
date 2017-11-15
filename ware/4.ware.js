import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
let initState = {
  loading:'',//加载状态，默认为空，开始加载时变成加载中。加载完成后变成空
  data:'',//实际后台返回的数据，默认为空，加载完成后或者显示加载成功，或者显示加载失败
  error:''
};
const FETCH_START = 'FETCH_START';//开始加载,如果派发这个动作，会把loading=加载中... data=''
const FETCH_SUCCESS = 'FETCH_SUCCESS';//加载成功,如果派发这个动作，会把loading='',data=真实的值
const FETCH_ERROR = 'FETCH_ERROR';//加载失败,如果派发这个动作，会把loading='',data=失败的原因
let reducer = (state=initState,action)=>{
   switch (action.type){
     case FETCH_START:
       return {loading:'加载中...',data:''};
     case FETCH_SUCCESS:
       return {loading:'',error:'',data:action.payload};
     case FETCH_ERROR:
       return {loading:'',data:'',error:action.payload};
     default:
       return state;
   }
}
let store = createStore(reducer,applyMiddleware(thunk,logger));
class Panel extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({});
    })
  }
  handleClick = ()=>{
    //派发一个函数，是为了让函数执行
    store.dispatch(function(dispatch){
      dispatch({type:FETCH_START});//loading
      setTimeout(function(){
        if(Math.random()>.5){
           dispatch({type:FETCH_SUCCESS,payload:'成功'})
        }else{
          dispatch({type:FETCH_ERROR,payload:'失败'})
        }
      },3000);
    });
  }
  render(){
    let {loading,data,error} = store.getState();
    return (
      <div>
        <p>
          {loading} {data} {error}
        </p>
        <button onClick={this.handleClick}>加载数据</button>
      </div>
    )
  }
}
ReactDOM.render(<Panel/>,document.querySelector('#root'));