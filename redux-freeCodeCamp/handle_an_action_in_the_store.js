// Handle an action in the store 

const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    
     if (action.type === 'LOGIN') {
      return {login: true}
    }
  
    else {
      return state
    }
    
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };

// The reducer() function takes state and action as its arguments and
// returns a new state
// Updating state in response to actions is the ONLY role of reducers in Redux 
// reducer() is a pure function - takes state and an action and returns new state
// State is read-only so only a new copy of state is returned - it isn't destructive
// in the sense that it modifies state directly 