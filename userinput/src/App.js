import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput username="Emily S" />
      <UserOutput username="Julia S"/>
      <UserOutput username="Claire G"/>
      </div>
  );
}

export default App;
