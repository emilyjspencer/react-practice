// Bind this to a class method





class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
     this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          <button onClick ={this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };

  // When the button 'Click Me' is pressed - the text changes from Hello 
  // to 'You Clicked!'