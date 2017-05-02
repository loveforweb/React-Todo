import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        const renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;

            if (completedAt) {
                message = 'Completed '
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        }

        return (
            <div onClick={() => {
                    this.props.onToggle(id)
                }}>
                <label htmlFor="todo-check">
                    <input name="todo-check" type="checkbox" checked={completed} />
                    <p>{text}</p>
                    <p>{renderDate()}</p>
                </label>
            </div>
        )
    }
}

export default Todo;