import React, { Component } from 'react';
import './App.css';
import ScoreLabel from './ScoreLabel'
import ClickyImageSet from './ClickyImageSet'
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
// import { Button } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.increaseScore = this.increaseScore.bind(this);
    this.state={
      score: 0,
      friends
    }
  }

  increaseScore() {
    let currScore = this.state.score;
    currScore += 10;
    this.setState({score: currScore});
  }
  removeFriend = id => 
  {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: this.shuffleData(friends) });
  };
  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };
  render() {
    return (
      <div className="App">
       <ScoreLabel score={this.state.score}/> 
       <ClickyImageSet incScore={this.increaseScore}/>
      </div>
    );
  }
}

export default App;
