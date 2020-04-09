import React, {Component} from 'react';

import './items-status-filter.css';

export default class ItemsStatusFilter extends Component {
    render() {
        return(
            <div className="searchWrapper__btns">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-secondary">Active</button>
                <button type="button" className="btn btn-secondary">Done</button>
            </div>
        );
    }
}
