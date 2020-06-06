// Create a Controller Input 

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      
    this.handleChange = this.handleChange.bind(this)
    }
      
    
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
    
    render() {
      return (
        <div>
         
      <input value={this.state.input}
      onChange={this.handleChange}></input>
          
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  // By default, the value of input is nothing
  // We have an input element which has an event handler - onChange
  // which is assigned a pointer to the handleChange method.
  // The handlerChange method takes an event as a param and uses React's 
  // setState() method to update the state from nothing to the value that the user
  // enters in the form