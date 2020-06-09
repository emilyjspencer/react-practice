// Render conditionally from props 


class Results extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {

      return (
        <h1>
        {
          this.props.fiftyFifty ?
          'You Win!' :
          'You Lose!'
        }
        </h1>
      )
    };
  };


  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
        counter: this.state.counter + 1
      });
    }

    render() {
      const expression = Math.random() >= .5;

      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression} />
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };

// We have a parent component called GameOfChance and a child component called Results
// The Play Again button has a click button with a reference to the handleClick which increases
// the counter by 1 each time it is clicked
// The Results (child component) outputs as an h1 whether you win or lose - You Win! or You Lose!
// Whether you win or lose is determined by the expression whose value is generated randomly using Math.random(), more
// specfically: const expression = Math.random() >= .5;
// The paragraph element displays dynamically which turn we are on