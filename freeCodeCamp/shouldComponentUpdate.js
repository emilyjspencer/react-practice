// Optimize Re-Renders with shouldComponentUpdate

class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
       
      if (nextProps.value % 2 === 0 ) {
      return true;
      }
      
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props...');
    }

    componentDidUpdate() {
      console.log('Component re-rendered.');
    }

    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState({
        value: this.state.value + 1
      });
    }
    
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };
  

// The Controller component renders an instance of the OnlyEven component
// shouldComponentUpdate is used to determine whether the nextProps.value is even or not
// Now the OnlyEvens component is only re-rendered when nextProps.value is even, not for every number
// shouldComponentUpdate() returns a boolean - tells React whether to update the component or not