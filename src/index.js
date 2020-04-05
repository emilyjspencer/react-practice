import React, {Component} from 'react';
import ReactDOM from 'react-dom';




class List extends Component {
    render() {
       return  <ol>
    { this.props.characters.map((character, index) => <li key={index}> {character} </li>)}
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
            <List characters={['Arthur']}/> 
            <List characters={[' Lady Rataxes', 'Lady Rataxes', 'Victor']} /> 
             

        </div>
    }
    }

ReactDOM.render(<Main/>, document.getElementById('root'));


// outputs:
//Babar the Elephant's family

//1. Arthur

//1. Lady Rataxes
//2. Lady Rataxes
//3. Victor
