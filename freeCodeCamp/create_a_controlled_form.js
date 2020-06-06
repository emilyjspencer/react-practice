// Create a Controlled Form

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }


    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
    }


    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              onChange={this.handleChange} >
            </input>/>

            <button type='submit'>Submit!</button>
          </form>
          
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  };

  // We have two methods - handleChange and handleSubmit
  // handleChange is invoked when the value of the input is changed
  // It uses React's setState() method to change the value of the input from nothing to the value entered by the user
  // handleSubmit is invoked when the submit button is clicked
  // event.preventDefault() is called to prevent the page from being reloaded - 
  // something that happens by default when submitting forms
  // Also uses React's setState() method to change the value of submit from nothing
  // to the value entered by the user
  // The form contains two event handlers - both pointing to their respective methods