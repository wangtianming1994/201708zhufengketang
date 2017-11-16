import * as types from '../action-types';
import {fetchSliders,fetchLessons} from '../../api/home';
export default {
  setLesson(id){
    return {
      type:types.SET_LESSON,
      payload:{id}
    }
  },
  //获取轮播图
  getSliders(){
    //调用fetch方法获取后台返回的数据。then里面放着成功的回调，成功的回调里里参数是轮播图数组,然后把此数组派发给仓库
    return dispatch=>{
      fetchSliders().then(sliders=>{
        dispatch({
          type:types.FETCH_SLIDERS,
          payload:{sliders}
        });
      });
    }
  },
  //获取后台数据
  getLessons(){
    return (dispatch,getState)=>{
      //派发一个对象，这个对象的payload是一个方法调用的返回值，这个返回值是一个promise,会等待promise完成，完成后会自动再次派发action.这个action的payload值会成为promise的resolve的值
      let {loading,hasMore,offset,limit} = getState().home.lessons;
      //只有当目前不是加载中，并且的确有更多数据的话才会加载新的一页数据
      if(!loading && hasMore){
        //派发一个action,把状态改为加载中....
        dispatch({
          type:types.FETCH_LESSONS
        });
        dispatch({
          type:types.FETCH_LESSONS_FINISH,
          payload:fetchLessons(offset,limit)
        });
      }
     /* dispatch({
        type:types.FETCH_LESSONS_FINISH,
        payload:{"hasMore":true,"list":[]}
      })*/
    }
  },
  refresh(){
    return (dispatch,getState)=>{
      let {loading,hasMore,offset,limit} = getState().home.lessons;
      //只有当目前不是加载中，并且的确有更多数据的话才会加载新的一页数据
      if(!loading){
        //派发一个action,把状态改为加载中....
        dispatch({
          type:types.FETCH_LESSONS
        });
        dispatch({
          type:types.FETCH_LESSONS_REFRESH,
          payload:fetchLessons(0,limit)
        });
      }
    }
  }
}