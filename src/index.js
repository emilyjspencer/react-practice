import React from 'react';
import ReactDOM from 'react-dom';


const babarCharacters = ['Babar', 'Celeste', 'Flora', 'Pomme', 'Alexander', 'Isabel' ]
const element = <ol>
    { babarCharacters.map((character, index) => <li key={index}> {character} </li>)}
</ol>

ReactDOM.render(element, document.getElementById('root'));