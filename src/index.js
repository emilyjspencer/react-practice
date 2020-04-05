import React from 'react';
import ReactDOM from 'react-dom';



const tasks = ['Rosie', 'and', 'Jim'];

const element = React.createElement('ol', null, tasks.map((task) => React.createElement('li', null, task)))


ReactDOM.render(element, document.getElementById('root'));