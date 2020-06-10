

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction())

  // The dispatch method can be called to dispatch actions to the Redux store. 
  // Calling store.dispatch() and passing the value returned from an action creator 
  // sends an action back to the store.