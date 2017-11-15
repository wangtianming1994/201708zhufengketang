import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class Slider extends Component {
  render() {
    let swipeOptions = {
      continuous:true,
      auto:600,
      callback(index){
        console.log(index);
      }
    }
    return (
      <div className="carousel-wrapper">
        {
          this.props.sliders.length>0?<ReactSwipe className="carousel" swipeOptions={swipeOptions}>
        {
          this.props.sliders.map((item,index)=>(
          <div key={index}>
            <img src={item}/>
          </div>
          ))
        }
          </ReactSwipe>:null
        }
      </div>
    )
  }
}