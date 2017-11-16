import {combineReducers} from 'redux';
import home from './home';
import {routerReducer} from 'react-router-redux';
export default combineReducers({
  home,
  router:routerReducer
})
/*
{
  home: {
    currentLesson:0 //当前课程的ID
  },
 routerReducer:{

}
*/
