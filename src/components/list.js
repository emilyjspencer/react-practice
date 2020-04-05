import React, {Component} from 'react';


class List extends Component {
    render() {
       return  <ol>
    { this.props.characters.map((character, index) => <li key={index}> {character} </li>)}
   </ol>
    }
  
}

export default List