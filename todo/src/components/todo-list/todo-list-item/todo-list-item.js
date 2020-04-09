import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;


        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }



        return (
            <div className={classNames}>
                <span
                    onClick={onToggleDone}>
                    {label}
                    </span>
                <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-outline-success"
                        onClick={onToggleImportant}>
                    <i className="fa fa-info" aria-hidden="true"></i>
                </button>
            </div>
        );

    }
}
