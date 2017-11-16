import {post} from './index';
//注册
export function signUp(data){
   return post('/signup',data);
}
