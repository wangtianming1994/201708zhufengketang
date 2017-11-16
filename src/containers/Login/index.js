import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <div className="login-panel">
        <div className="login-logo">
          <img src={require('../../images/profile.png')}/>
        </div>
        <input type="text" placeholder="手机号"/>
        <input type="text" placeholder="密码"/>
        <Link to="/signup">注册</Link>
        <div className="login-button">登&nbsp;录</div>
      </div>
    )
  }
}