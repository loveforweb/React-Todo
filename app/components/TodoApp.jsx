import React from 'react';
import TodoList from 'TodoList';

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
    }

    render() {
        var {todos} = this.state;
        return (
            <div><TodoList todos={todos} /></div>
        )
    }
}

export default TodoApp;