import React, {Component} from 'react';
import './index.less'
import logo from '../../../images/logo.png';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
export default class HomeHeader extends Component {
  constructor() {
    super();
    this.state = {isShow: false};//是否显示菜单
  }
  //当一个元素进入的时候，会先添加fade-enter的类名，然后立马添加fade-enter-active的类名。
  getMenuList = () => (
    <CSSTransition
      timeout={1000}
      classNames="fade"
    >
      <ul className="menu-list">
        <li>Node课程培训</li>
        <li>HTML培训课程</li>
        <li>视频课程</li>
        <li>文档课件</li>
      </ul>
    </CSSTransition>
  )

  render() {
    return (
      <div className="home-header">
        <div className="home-logo">
          <img src={logo}/>
          <div onClick={() => this.setState({isShow: !this.state.isShow})}>
            {
              this.state.isShow ? <i className="iconfont icon-guanbi"/> : <i className="iconfont icon-uilist"/>
            }
          </div>
        </div>
        <TransitionGroup>
          {
            this.state.isShow ? this.getMenuList() : null
          }
        </TransitionGroup>
      </div>
    )
  }
}