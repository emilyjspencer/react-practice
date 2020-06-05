// Write a simple counter 


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
  this.reset = this.reset.bind(this)
    
  }
  
increment() {
  this.setState ({
    count: this.state.count + 1
  })
}

decrement() {
  this.setState({
    count: this.state.count - 1
  })
}

reset() {
  this.setState({
    count: this.state.count = 0
  })
}
 
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

// Upon initialization, the count is 0
// Clicking the increment button - which has an onClick handler assigned to it, with a reference to the increment()
// method - triggers the increment() method, which increases the count by one upon each click
// Clicking the decrement button - which has an onClick handler assigned to it, with a pointer to the decrement() method
// - triggers the decrement() method, which decreases the count by one upon each click
// Clicking the reset button - which has an onClick handler assigned to it, with a point to the reset() method - triggers
// the reset() method, which resets the count. 