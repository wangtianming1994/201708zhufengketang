let express = require('express');
let app = express();
let sliders = require('./mock/slider');
app.use(function(req,res,next){
  //允许的来源
  res.header('Access-Control-Allow-Origin','http://localhost:8080');
  //允许客户端请求的方法
  res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
  //允许客户端发送的请求头
  res.header('Access-Control-Allow-Headers','Content-Type');
  //允许客户端发送Cookie
  res.header('Access-Control-Allow-Credential',"true");
  //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
  if(req.method == 'OPTIONS'){
    res.end();
  }else{
    next();
  }
});
//当客户端以get方式访问/sliders请求的时候，会由此路由进行响应
app.get('/sliders',function(req,res){
  res.json(sliders);
});
app.listen(3000);