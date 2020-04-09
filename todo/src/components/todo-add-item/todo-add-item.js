import React, {Component} from 'react';
import './todo-add-item.css';

export default class TodoAddItem extends Component {

    state = {
        label: '',
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value.toUpperCase()
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
                <input type="text" className="form-controll"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                       placeholder="What needs to be done" />

                <button type="button"
                        className="btn btn-primary btn--add-item">
                    Add Item
                </button>
            </form>
        );
    }
}
