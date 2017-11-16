# 初始化项目
```
npm init -y
```
# 安装依赖的模块

## 后端依赖的模块
```
npm install body-parser connect-mongo ejs express express-session mongoose -S
```
## 前端依赖的模块
```
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
```
## 开发依赖模块
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin -D
```

## 目录划分
### 容器 containers
容器组件、智能组件、聪明组件
一般有自己的状态，一般会对应于一个页面，页面级组件
### 组件 components
UI组件、傻瓜组件、木偶组件
只提供UI，没有状态
别的组件让他显示他就显示

一个目录对应一个组件
组件目录里有一个`index.js`文件
还有一个`index.less`文件

## 如何使用redux
1. 后台写一个后台接口  /login
2. 前台(api)里写一个获取接口数据的方法
3. 在action-types里添加新的actionType类型
4. 在reducer里修改初始状态，并添加一个case
5. 在`actions`里添加一个方法调用此方法
6. 在组件中调用action中的方法



