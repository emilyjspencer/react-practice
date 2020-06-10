// User map() to dynamically render elements 


const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map( (item, id) => {
      return <li key={id}>{item}</li>
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

// The MyToDoList component has an initial state of userInput set to an empty string
// and ToDoList set to an empty array 
// The HandleSubmit method which is referenced on the button, takes the user's input (which is a string)
// and splits it into an array of elements. The setState() method is then used to set the state, so that the userInput is now
// and array of items
// We map over the ToDoList array, giving each element a key prop of id to make each element truly unique. The map method
// is used to dynamically render an <li> for each item, so that when the user enters a new item - each item appears with a
// bullet point next to it 
// The Create List button has an event handler. When the button is clicked the handleSubmit method is invoked 
