import {get} from './index';
//向后台请求轮播图的数据
export function fetchSliders(){
  return get('/sliders');
}
//向后台请求课程列表的数据
export function fetchLessons(){
  return get('/lessons');
}