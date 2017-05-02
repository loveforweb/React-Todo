import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, text, completed, createdAt, completedAt} = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo'
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
            <div className={todoClassName} onClick={() => {
                    this.props.onToggle(id)
                }}>
                <div>
                    <input name="todo-check" type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo-subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default Todo;