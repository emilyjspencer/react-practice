//  Pass an array as props 

const List = (props) => {
   
    return <p>{props.tasks.join(", ")}</p>
    
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          
          <List tasks={["run", "do yoga"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk", "jump rope"]}/>
          
        </div>
      );
    }
  };

// tasks is a property that is passed to the two List components
// These are then accessed in the List component by using props 