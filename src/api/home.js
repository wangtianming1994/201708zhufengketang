import {get} from './index';
//向后台请求轮播图的数据
export function fetchSliders(){
  return get('/sliders');
}