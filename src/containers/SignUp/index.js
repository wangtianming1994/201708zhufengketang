import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import NavBar from "../../components/NavBar/index";
export default class SignUp extends Component {
  render() {
    return (
      <div className="signup-panel">
        <NavBar title="注册"/>
        <div className="signup-logo">
          <img src={require('../../images/profile.png')}/>
        </div>
        <input type="text" placeholder="手机号"/>
        <input type="text" placeholder="密码"/>
        <Link to="/login">登录</Link>
        <div className="signup-button">注&nbsp;册</div>
      </div>
    )
  }
}