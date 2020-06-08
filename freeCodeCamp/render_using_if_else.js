// Render using an if/else condition

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }

    render() {
      
    if(this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button> 
           <h1>Displayed!</h1>
         </div>
      );
      
     } else {
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button> 
           </div>
        )
     }
    }
  }

// The UI that renders differs depending on the state
// If the display is set to true - one UI is displayed
// If the display is set to false - another is displayed - without the h1 tag
// toggleDisplay() method is responsible for toggling the state - if the display is set to false - 
// it sets it to true. If the display is set to true - it sets it to false