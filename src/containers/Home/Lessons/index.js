import React, {Component} from 'react';
import './index.less'
import Loading from "../../../components/Loading/index";
export default class Lessons extends Component {
  render() {
    return (
      <div className="lesson-list">
        <div className="lesson-title">
          <i className="iconfont icon-book"></i>
          <span>全部课程</span>
        </div>
        {
          this.props.lessons.list.map((item,index)=>(
            <div className="lesson" key={index}>
              <img src={item.url}/>
              <p>{item.title}</p>
              <p className="price">{item.price}</p>
            </div>
          ))
        }
        {
          this.props.lessons.loading?
            <Loading/>:<div
            onClick={this.props.getLessons}
            className="load-status">
            {
              this.props.lessons.hasMore?"加载更多":"我是有底线的!"
            }
          </div>
        }
      </div>
    )
  }
}