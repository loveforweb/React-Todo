import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {id, text} = this.props;
        return (
            <div>{id}. {text}</div>
        )
    }
}

export default Todo;