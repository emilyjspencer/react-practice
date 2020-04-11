import React from 'react';
import ReactDOM from 'react-dom';

class Duck extends React.Component {
  render() {
    return <h2>I am a {this.props.child}!</h2>;
  }
}

class Duckling extends React.Component {
  render() {
    return (
      <div>
      <h1>What am I?</h1>
      <Duck child="Duckling" />
      </div>
    );
  }
}

ReactDOM.render(<Duckling />, document.getElementById('root'));
