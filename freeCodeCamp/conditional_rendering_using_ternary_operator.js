// Conditional rendering using the ternary operator 


const inputStyle = {
    width: 235,
    margin: 5
  }

  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userAge: '',
        input: ''
      }
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }

    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }

    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type="number"
            value={this.state.input}
            onChange={this.handleChange} /><br />
            {
              this.state.userAge === '' ?
              buttonOne :
              this.state.userAge >= 18 ?
              buttonTwo :
              buttonThree
            }
        </div>
      );
    }
  };

  // Here, the ternary operator is used so that if the user enters nothing and the state is 0,
  // buttonOne is rendered
  // If the user enters 18 or more, buttonTwo is rendered, otherwise, button three is rendered 