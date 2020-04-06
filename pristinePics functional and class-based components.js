// class-based component

import React, {Component} from 'react';

class PristinePics extends Component {
    render() {
       return <div className="photoPage">
         {this.props.posts.map((post, index) => <Photo key={index}post={post} />)}
        </div>
    } 
}

export default PristinePics



// functional component

import React from 'react';

function PristinePics(props) {
    return <div className="pristinePics">
    {props.posts.map((post, index) => <Photo key={index} post={post} /> }
    </div>
}

export default PristinePics