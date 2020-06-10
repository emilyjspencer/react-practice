// Use PropTypes to define the props you expect 


const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  
  Items.propTypes = { quantity: PropTypes.number.isRequired }

  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

  // PropTypes can be used to specify what type the prop should be.
  // It's considered a best practice to set propTypes when you know the tpe
  // of prop ahead of time 
  