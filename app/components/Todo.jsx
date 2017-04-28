import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {id, text, completed} = this.props;
        return (
            <div onClick={() => {
                    this.props.onToggle(id)
                }}>
                <label htmlFor="todo-check">
                    <input name="todo-check" type="checkbox" checked={completed} />
                    {text}
                </label>
            </div>
        )
    }
}

export default Todo;