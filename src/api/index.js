const HOST = 'http://localhost:3000';
//后台的URL地址是3000端口
export function get(url){
  //这里会返回一个promise,resolve之后会传入响应体，就是轮播图数组
  return fetch(HOST+url,{
     method:'GET',
     //客户跨域请求服务器的要携带cookie
     credential:"include",
     headers:{
       //需要服务器返回JSON格式的数据
       "Accept":"application/json"
     }
  }).then(res=>res.json());
}