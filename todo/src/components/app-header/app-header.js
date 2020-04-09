import React from 'react';


import './app-header.css';

const AppHeader = (props) => {
    return(
        <div className="header">
            <h1>My Todo List</h1>
            <p>
                <span>{props.toDo} </span>
                more to do,
                <span> {props.done} </span>
                 done</p>
        </div>

    );
};

export default AppHeader;