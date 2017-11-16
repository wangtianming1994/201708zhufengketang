import React, {Component} from 'react';
import './index.less'
export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-bg">
          <img src={require('../../images/profile.png')} alt=""/>
          <button>登录</button>
        </div>
      </div>
    )
  }
}