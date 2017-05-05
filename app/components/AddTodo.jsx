import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'actions';

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const todoText = this.refs.todoText.value;
        
        if (todoText && todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }

    }

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?" />
                    <button className="button expanded">Add todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo);