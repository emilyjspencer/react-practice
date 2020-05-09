import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h1>Username: {props.username}</h1>
            <h3>Hi there {props.username} </h3>
        </div>
    )
}

export default userOutput;