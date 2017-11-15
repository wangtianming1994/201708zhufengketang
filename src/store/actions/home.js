import * as types from '../action-types';
import {fetchSliders} from '../../api/home';
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
  }
}