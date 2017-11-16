import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-bg">
          <img src={require('../../images/profile.png')} alt=""/>
          <Link to="/login">登录</Link>
        </div>
      </div>
    )
  }
}