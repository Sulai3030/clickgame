import React, { Component } from 'react';
import './App.css';
import ScoreLabel from './ScoreLabel'
import ClickyImageSet from './ClickyImageSet'
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      score:41
    }
  }
  
  render() {
    return (
      <div className="App">
       <ScoreLabel score={this.state.score}/> 
       <ClickyImageSet />
      </div>
    );
  }
}

export default App;
