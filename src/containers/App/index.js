import React, {Component} from 'react';
import {
  Route
} from 'react-router-dom';
import './index.less'
import Home from "../Home/index";
import Courses from "../Courses/index";
import Profile from "../Profile/index";
import Tab from "../../components/Tab/index";
import Login from "../Login/index";
import SignUp from "../SignUp/index";
import createHistory from 'history/createHashHistory';
const history = createHistory();//用来管理路由历史的
//连接后的路由容器，连接的是路由容器和仓库(store)
import {ConnectedRouter} from 'react-router-redux';
/**
 * 1.改App.js 用ConnectedRouter 替换掉 Router
 * 2.改Store 使用router中间件
 * 3.修改reducer 添加 routerReducer
 */
export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div style={{height:'100%'}}>
          <Route exact path="/" component={Home}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Tab/>
        </div>
      </ConnectedRouter>
    )
  }
}