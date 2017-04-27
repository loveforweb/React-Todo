import React from 'react';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the garden'
                },
                {
                    id: 3,
                    text: 'Clean car'
                },
                {
                    id: 4,
                    text: 'Leave mail'
                }
            ]
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleAddTodo(text) {
        alert('new todo: ' + text);
    }

    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default TodoApp;