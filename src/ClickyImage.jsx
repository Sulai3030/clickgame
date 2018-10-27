import React, { Component } from 'react';

class ClickyImage extends Component {
    constructor(props) {
        super(props)
        this.state={
          images:[ImageOne,ImageTwo,ImageThree,ImageFour,ImageFive,ImageSix]
        }
      }
      
    render () {
        return (
          <img src={this.props.nametag} style={{margin:5}}/>
        )
    }
}

export default ClickyImage;