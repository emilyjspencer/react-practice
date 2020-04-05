import React from 'react';
import ReactDOM from 'react-dom';

// nested elements
const element = React.createElement('ol', null, React.createElement('li', null, 'rosie'),
React.createElement('li', null, 'and'),
React.createElement('li', null, 'Jim')
);

ReactDOM.render(element, document.getElementById('root'));