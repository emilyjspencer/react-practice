// Define an Action Creator 

const action = {
    type: 'LOGIN'
  }
 

  
  function actionCreator() {
    return action
  }

// We define an action with a type and perhaps some data.
// This action then needs to be sent to the Redux Store via an action creator
// An action creator is a JS function that returns an action 