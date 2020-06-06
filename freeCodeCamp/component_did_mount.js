// Use the lifecycle method componentDidMount

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout( () => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          <h1>Active Users: { this.state.activeUsers }</h1>
        </div>
      );
    }
  };

  // Best practice to place API or server calls in the componentDidMount lifecyclemethod
  // Above is a mock API call, simulating the fetching of data - taking 2.5 seconds to receive the data
  // This 'fetched' data is then used to update the state - the activeUsers