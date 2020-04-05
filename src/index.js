import React from 'react';
import ReactDOM from 'react-dom';


const babarCharacters = ['Babar', 'Celeste', 'Flora', 'Pomme', 'Alexander', 'Isabel' ]


const element = 
    <div>
      <h1>Babar the Elephant's family</h1>
    <ol>
    { babarCharacters.map((character, index) => <li key={index}> {character} </li>)}
   </ol>
   </div>

ReactDOM.render(element, document.getElementById('root'));