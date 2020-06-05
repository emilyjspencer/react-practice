// React: Use State to Toggle an Element


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      
     this.toggleVisibility = this.toggleVisibility.bind(this)
    
    }
   
    toggleVisibility() {
      this.setState(state => ({
        visibility: !state.visibility
      }));
    }
    
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };

  // By default, visibility is false
  // Conditionaly rendering of content using an if/else statement - which could be tidied up:
  // if the visibility is true - we'll see a button and the h1 element below
  // if the visibility is false - we'll only see the button
  // the button has the onClick handler with a reference to the toggleVisibility method
  // toggleVisibility will set the visibility to be false if it is true, and to true if it is false