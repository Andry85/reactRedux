import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';

const App = () => {

    const toDoData = [
        {
            label: 'Drink coffee',
            important: false,
            id: 0
        },
        {
            label: 'Make Awesome App',
            important: true,
            id: 1
        },
        {
            label: 'Have a lunch',
            important: false,
            id: 2

        }

    ];

    return(
        <div className="wrapper">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={toDoData} />
        </div>
    );
};

export default App;