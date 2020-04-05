import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const babarCharacters = ['Babar', 'Celeste', 'Flora', 'Pomme', 'Alexander', 'Isabel' ]


class List extends Component {
    render() {
       return  <ol>
    { babarCharacters.map((character, index) => <li key={index}> {character} </li>)}
   </ol>
    }
  
}

class Title extends Component {
    render() {
       return(
        <h1>Babar the Elephant's family</h1>
       ) 
    }}

class Main extends Component {

    render() {
        return <div>
            <Title />
            <List /> 
            <List /> 
            <List /> 
            <List /> 
            <List /> 
              
        </div>
    }
    }

ReactDOM.render(<Main/>, document.getElementById('root'));