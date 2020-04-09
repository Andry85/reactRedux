import React from 'react';

import ItemsStatusFilter from './items-status-filter/'

import './search-panel.css';

const SearchPanel = () => {
    const serachText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return(
        <div className="searchWrapper">
            <input style={searchStyle} placeholder={serachText} />
            <ItemsStatusFilter />
        </div>

    );
};

export default SearchPanel;