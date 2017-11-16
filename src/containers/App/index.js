import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './index.less'
import Home from "../Home/index";
import Courses from "../Courses/index";
import Profile from "../Profile/index";
import Tab from "../../components/Tab/index";
import Login from "../Login/index";
import SignUp from "../SignUp/index";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{height:'100%'}}>
          <Route exact path="/" component={Home}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Tab/>
        </div>
      </Router>
    )
  }
}