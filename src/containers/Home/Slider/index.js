import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class Slider extends Component {
  render() {
    let swipeOptions = {
      continuous:true
    }
    return (
      <div className="carousel-wrapper">
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
          <div>panel1</div>
          <div>panel2</div>
          <div>panel3</div>
        </ReactSwipe>
      </div>
    )
  }
}