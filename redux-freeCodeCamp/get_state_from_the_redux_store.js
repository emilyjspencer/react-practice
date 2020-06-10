// Get State from the Redux Store

const store = Redux.createStore(
    (state = 5) => state
  );
  
  
  

const currentState = store.getState()

// getState() is a method that can be called on the Redux store object, Redux
// to retrieve the current state held in the Redux Store Object 