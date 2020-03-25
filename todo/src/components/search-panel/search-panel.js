import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    const serachText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return(
        <div className="searchWrapper">
            <input style={searchStyle} placeholder={serachText} />
            <div className="searchWrapper__btns">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-secondary">Active</button>
                <button type="button" className="btn btn-secondary">Done</button>
            </div>
        </div>

    );
};

export default SearchPanel;