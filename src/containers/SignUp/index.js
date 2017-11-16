import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import NavBar from "../../components/NavBar/index";
import actions from '../../store/actions/session';
import {connect} from 'react-redux';
import Message from "../../components/Message/index";
class SignUp extends Component {
  signUp = ()=>{
    let username = this.username.value;
    let password = this.password.value;
    if(!!username && !!password){
      this.props.signUp({username,password});
    }
  }
  render() {
    return (
      <div className="signup-panel">
        <NavBar title="注册"/>
        <div className="signup-logo">
          <img src={require('../../images/profile.png')}/>
        </div>
        <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
        <input ref={input=>this.password=input}  type="text" placeholder="密码"/>
        <Link to="/login">登录</Link>
        <div
          onClick={this.signUp}
          className="signup-button">注&nbsp;册</div>
        <Message {...this.props}/>
      </div>
    )
  }
}
export default connect(
  state=>state.session,
  actions
)(SignUp);