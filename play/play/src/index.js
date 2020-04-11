import React from 'react';
import ReactDOM from 'react-dom';
import wonderwoman from './wonderwoman.jpg'; 

class WonderWoman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {airborne: "false"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({airborne: "true"})
    }, 4000)
  }
  render() {
    return (
      <div>
      <h1>WonderWoman is initially on the ground</h1>
      <br/>
      <img src={wonderwoman} />
      <h3>Wonderwoman is airborne {this.state.airborne}</h3>
  
      </div>
    );
  }
}

ReactDOM.render(<WonderWoman />, document.getElementById('root'));
