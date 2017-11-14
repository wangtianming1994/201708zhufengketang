import * as types from '../action-types';
export default {
  setLesson(id){
    return {
      type:types.SET_LESSON,
      payload:{id}
    }
  }
}