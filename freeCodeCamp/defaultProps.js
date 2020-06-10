// Default props


const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  


  ShoppingCart.defaultProps = {
    items: 0
  }

  // We can define props to use in the case that no value is explicitly defined
  // This is done using defaultProps 