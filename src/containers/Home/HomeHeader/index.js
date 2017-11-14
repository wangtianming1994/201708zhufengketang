import React, {Component} from 'react';
import './index.less'
import logo from '../../../images/logo.png';
export default class HomeHeader extends Component {
  constructor(){
    super();
    this.state = {isShow:false};//是否显示菜单
  }
  getMenuList = ()=>(
    <ul className="menu-list">
      <li>Node课程培训</li>
      <li>HTML培训课程</li>
      <li>视频课程</li>
      <li>文档课件</li>
    </ul>
  )
  render() {
    return (
      <div className="home-header">
        <div className="home-logo">
          <img src={logo}/>
          <div onClick={()=>this.setState({isShow:!this.state.isShow})}>
            {
              this.state.isShow?<i className="iconfont icon-guanbi"/>:<i className="iconfont icon-uilist"/>
            }
          </div>
        </div>
        {
          this.state.isShow?this.getMenuList():null
        }
      </div>
    )
  }
}