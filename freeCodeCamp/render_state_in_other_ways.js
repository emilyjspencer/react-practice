class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      const name = this.state.name;
      return (
        <div>
          <h1>{name}</h1>
        </div>
      );
    }
  };

  // Renders 'freeCodeCamp'
  // JS code that is written between the render() method and the return statement
  // doesn't require the usual {}