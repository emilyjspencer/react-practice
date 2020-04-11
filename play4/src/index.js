import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hygge extends Component {
  hyggesnak() {
    alert("Hyggesnak - can be described as chit-chat or cosy conversation that doesn't touch on controversial issues");
}
render() {
  return (
    <button  onClick={this.hyggesnak}>What is meant by Hyggesnack</button>
);

}
}

ReactDOM.render(<Hygge />, document.getElementById('root'));

