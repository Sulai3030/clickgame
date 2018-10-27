import React, { Component } from 'react';
import ImageOne from './1.jpeg'
import ImageTwo from './2.jpeg'
import ImageThree from './3.jpg'
import ImageFour from './4.png'
import ImageFive from './5.jpeg'
import ImageSix from './6.png'
import ClickyImage from './ClickyImage'

class ClickyImageSet extends Component{
    constructor(props) {
        super(props)
        this.state={
          images:[ImageOne,ImageTwo,ImageThree,ImageFour,ImageFive,ImageSix]
        }
      }

      myFunction () {
          this.state.images;
      }

      render() {
        return (
          <dv>
              {this.state.images.map(image =>(<ClickyImage nametag={image} onClick="myFunction" />))}   
          </div>
        );
      }
}
export default ClickyImageSet;