import React, {Component} from 'react';
import './index.less'
import logo from '../../../images/logo.png';
export default class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header">
        <div className="home-logo">
          <img src={logo}/>
          <div>
            <i className="iconfont icon-uilist"/>
            <i className="iconfont icon-guanbi"/>
          </div>
        </div>
        <ul>
          <li>Node课程培训</li>
          <li>HTML培训课程</li>
          <li>视频课程</li>
          <li>文档课件</li>
        </ul>
      </div>
    )
  }
}