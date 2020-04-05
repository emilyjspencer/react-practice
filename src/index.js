import React from 'react';
import ReactDOM from 'react-dom';


const babarCharacters = ['Babar', 'Celeste', 'Flora', 'Pomme', 'Alexander', 'Isabel' ]
const element = <ol>
    <li> {babarCharacters[0]} </li> 
    <li> {babarCharacters[1]} </li>
    <li> {babarCharacters[2]} </li>
    <li> {babarCharacters[3]} </li>
    <li> {babarCharacters[4]} </li>
    <li> {babarCharacters[5]} </li>
</ol>

ReactDOM.render(element, document.getElementById('root'));