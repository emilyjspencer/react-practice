// Add an event listener


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  

  componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
   document.removeEventListener('keydown',this.handleKeyPress )
  }

  ;[=]
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};


// componentDidMount() is also a good place to add event listeners
// addEventListener() can take up to three arguments:
// 1 - the event
// 2 - the function that will be run when the event occurs
// 3 - option argument of a a boolean value that specifies whether the
// event should be executed in the capturing or bubbling phase
// true - capturing false - bubbling (default)
// When the event occurs, an event object is passed as the first parameter to
// handleKeyPress, which checks that the button that has been pressed is indeed the 'enter' button
// If this is the case, the handleEnter() method is called, which changes the state so that message is
// now equal to 'You pressed the enter key!'
// The event handler that was added using addEventListener() is then removed using removeEventListener
