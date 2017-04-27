import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const todoText = this.refs.todoText.value;
        
        if (todoText && todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" />
                    <button className="button expanded">Add todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;