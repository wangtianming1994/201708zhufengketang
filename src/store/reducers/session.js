import * as types from '../action-types';
//初始的状态会话对象
let initState = {
  user: null,//如果登录成功之后存放登录后的用户信息
  success: null,// 存放成功的消息
  error: null//存放失败的消息
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.SIGN_UP:
      var {success, error} = action.payload;
      return {
        ...state,
        success,
        error
      }
    case types.LOGIN:
      var {success, error, user} = action.payload;
      return {
        ...state,
        success,
        error,
        user
      }
    case types.VALIDATE:
      let {code,user} = action.payload;
      if(code==0){
        return {...state,user}
      }else{
        return state;
      }
    default:
      return state;
  }
}