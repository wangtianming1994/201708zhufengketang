import React, {Component} from 'react';
import './index.less'
import HomeHeader from "./HomeHeader/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import Slider from "./Slider/index";
class Home extends Component {
  componentDidMount(){
    if(this.props.sliders.length==0)
       this.props.getSliders();
  }
  render() {
    return (
      <div className="home">
        <HomeHeader
          setLesson={this.props.setLesson}
          lesson={this.props.lesson}/>
        <div className="main-content">
          <Slider sliders={this.props.sliders}/>
        </div>
      </div>
    )
  }
}
//actions是action的创建器
export default connect(
  state => state.home,//{lesson:0,sliders:[]}
  actions
)(Home)