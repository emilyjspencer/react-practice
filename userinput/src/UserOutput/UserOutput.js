import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <h1>Username: {props.username}</h1>
            <h3>Hi there {props.username} </h3>
        </div>
    )
}

export default userOutput;