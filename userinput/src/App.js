import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {  
    username: "Bonnie E",
    username: "Bonnie M",
    username: "Bonnie S"
  }

  changeUsernamesHandler = (event) => {
    this.setState({username: event.target.value});
  }


  render() {
    return (
    <div className="App">
      <UserInput changed={this.changeUsernamesHandler} currentName = {this.state.username} />
      <UserOutput username={this.state.username} />
      <UserOutput username={this.state.username} />
      <UserOutput username={this.state.username} />
      </div>
  );
}
}

export default App;
