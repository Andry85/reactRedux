import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false } ) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
    <div className="todo-list-iten">
        <span style={style}>{label}</span>
        <button type="button" className="btn btn-outline-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        <button type="button" className="btn btn-outline-success"><i className="fa fa-info" aria-hidden="true"></i></button>
    </div>
    );
};

export default TodoListItem;