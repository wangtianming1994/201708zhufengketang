let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(session({
  resave:true,//每次访问都重新保存session
  saveUninitialized:true,//保存未初始化的session
  secret:'zfpx'//密钥
}));
let sliders = require('./mock/slider');
let users = [];
app.use(function(req,res,next){
  //允许的来源
  res.header('Access-Control-Allow-Origin','http://localhost:8080');
  //允许客户端请求的方法
  res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
  //允许客户端发送的请求头
  res.header('Access-Control-Allow-Headers','Content-Type');
  //允许客户端发送Cookie
  res.header('Access-Control-Allow-Credentials',"true");
  //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
  if(req.method == 'OPTIONS'){
    res.end();
  }else{
    next();
  }
});
app.listen(3000);
//获取轮播图
app.get('/sliders',function(req,res){
  res.json(sliders);
});
let lessons = require('./mock/lessons');
//获取课程列表 查询字符串
//此接口可以再接收二个参数 offset(偏移量) limit(每页的条数)
// http://localhost:3000/lessons?offset=0&limit=5
// http://localhost:3000/lessons?offset=5&limit=5
// http://localhost:3000/lessons?offset=10&limit=5
//不能无限加载，比如说现在规定一共只有三页数据
app.get('/lessons',function(req,res){
  //深度克隆
  let cloneLessons = JSON.parse(JSON.stringify(lessons));
  //取得查询字符串对象参数 offset 偏移量,limit 限定每页的条数
  let {offset=0,limit=5} = req.query;
  for(let i=0;i<cloneLessons.list.length;i++){
    let lesson = cloneLessons.list[i];
    lesson.title = `${+offset+i+1}-${lesson.title}`;
  }
  if(offset==10){
    cloneLessons.hasMore = false;
  }
  setTimeout(function(){
    res.json(cloneLessons);
  },1000);
});
//注册接口
app.post('/signup',function(req,res){
  let user = req.body;
  let oldUser = users.find(item=>item.username == user.username);
  //后台错误有两种，一种系统错误，另一种叫业务错误 code=0表示成功，1表示失败
  if(oldUser){//如果有值意味着此用户名已经被人占用
     res.json({code:1,error:'用户名已经被占用!'});
  }else{
    users.push(user);
    res.json({code:0,success:'用户注册成功!'});
    //如果注册成功了，客户端要跳到登录页进行登录
  }
});
//登录
app.post('/login',function(req,res){
   let user = req.body;//得到请求体
   //在注册过的用户数组中找一找有没有对应的用户
   let oldUser = users.find(item=>item.username == user.username&& item.password == user.password);
   if(oldUser){//如果有的话表示登录成功
     req.session.user = user;//把登录成功的对象写入session
     res.json({code:0,success:'恭喜你，登录成功!',user});
   }else{//如果没有则表示登录失败
     res.json({code:1,error:'用户名或密码错误!'});
   }
});
//当应用初始化的时候，会向后台发送一个请求，询问当前用户是否登录，如果登录的话则返回登录的用户并存放在仓库里。
app.get('/validate',function(req,res){
  if(req.session.user){//如果会话对象中有user的话，表示已登录
    res.json({code:0,user:req.session.user});
  }else{
    res.json({code:1});
  }
});