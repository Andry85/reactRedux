import React, {Component} from 'react';

import ItemsStatusFilter from './items-status-filter/'

import './search-panel.css';


export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {

        const serachText = 'Type here to search';
        const searchStyle = {
            fontSize: '20px'
        };

        return(
            <div className="searchWrapper">
                <input
                value={this.state.term} 
                style={searchStyle} 
                placeholder={serachText} 
                onChange={this.onSearchChange} />
                <ItemsStatusFilter
                 filter={this.props.filter}
                 onFilterChange={this.props.onFilterChange}
                  />
            </div>
        );
    }
}
