import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {  
    username1: "Friend1",
    username2: "Friend2",
    username3: "Friend3"
  }

  render() {
    return (
    <div className="App">
      <UserInput />
      <UserOutput username={this.state.username1} />
      <UserOutput username={this.state.username2} />
      <UserOutput username={this.state.username3} />
      </div>
  );
}
}

export default App;
