import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-bg">
          <img src={require('../../images/profile.png')} alt=""/>
          <Link to="/login">{this.props.user?this.props.user.username:"登录"}</Link>
        </div>
      </div>
    )
  }
}
export default connect(
  state=>state.session
)(Profile);