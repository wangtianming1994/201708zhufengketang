import React, {Component} from 'react';
import './index.less'
import HomeHeader from "./HomeHeader/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import Slider from "./Slider/index";
class Home extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="home">
        <HomeHeader
          setLesson={this.props.setLesson}
          lesson={this.props.lesson}/>
        <div className="main-content">
          <Slider/>
        </div>
      </div>
    )
  }
}
//actions是action的创建器
export default connect(
  state => state.home,//{lesson:0}
  actions
)(Home)