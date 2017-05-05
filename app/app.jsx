import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import { addTodo, addTodos, setSearchText, toggleShowCompleted } from 'actions';
var store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

store.subscribe(() => {
    var state = store.getState()
    console.log('New state', state);

    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app') 
);
