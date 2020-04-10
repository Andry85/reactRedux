import React, {Component} from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import TodoAddItem from "../todo-add-item";

export default  class App extends Component {

    maxId = 100;

    state = {
        toDoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all' // active, all, done
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
      this.setState(({toDoData}) => {
          const idx = toDoData.findIndex((el) => el.id === id);

          const before = toDoData.slice(0, idx);
          const after = toDoData.slice(idx + 1);
          const newArray = [...before, ...after];

          return {
              toDoData: newArray
          }
      });
    };

    addItem = (text) => {
       const newItem = this.createTodoItem(text);

       this.setState(({toDoData}) => {
            const newArr = [
                ...toDoData,
                newItem
            ];

           return {
               toDoData: newArr
           };
       });
    };


    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        console.log(oldItem);
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        console.log(newItem);

        return [
            ...arr.slice(0, idx),
            newItem,
            arr.slice(idx + 1)
        ];
    }


    onToggleImportant = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'important')
        };
        });
    };

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'done')
            };
        });
    };

    onSearch = (items, term) => {
        if (term.length == 0) {
            return items;
        }


        return items.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
           

    }
    onSearchChange = (term) => {
        this.setState({term});
    }

    filter = (items, filter) => {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (term) => {
        this.setState({term});
    }


    render() {

        const {toDoData, term, filter } = this.state;

        const visibleItems = this.filter(this.onSearch(toDoData, term), filter);

        const doneCount = toDoData.filter((el) => el.done).length;
        const todoCount = toDoData.length - doneCount;


        return (
            <div className="wrapper">
                <AppHeader toDo={todoCount} done={doneCount} />
                <SearchPanel 
                    onSearchChange={this.onSearchChange}
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                  />
                <TodoList todos={visibleItems}
                          onDeleted = {this.deleteItem}
                          onToggleImportant = {this.onToggleImportant}
                          onToggleDone = {this.onToggleDone}
                />
                <TodoAddItem onAddItem = {this.addItem}/>
            </div>
        );
    }

};
