import * as types from '../action-types';
/**每个页面对应于一个reducer*/
let initState = {
  lesson:0, //当前课程的ID
  sliders:[]//存着轮播图数据,存在这里的话就不需要重新获取了
}
export default function(state=initState,action){
  //每个action必须把携带的数据放在payload里，而且必须是一个对象。
  switch (action.type){//判断动作的类型
    case types.SET_LESSON:
      return {
        ...state,
        lesson:action.payload.id
      }
    case types.FETCH_SLIDERS://当轮播图数据取回来后
      return {
        ...state,
        sliders:action.payload.sliders
      }
    default:
      return state;
  }
}