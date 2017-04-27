import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
    }

    handleAddTodo(text) {
        alert('new todo: ' + text);
    }

    render() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default TodoApp;