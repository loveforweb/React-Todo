import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import { addTodo, setSearchText, toggleShowCompleted } from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState())
})

store.dispatch(addTodo('Clean garden'));
store.dispatch(setSearchText('garden'));
store.dispatch(toggleShowCompleted());

// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app') 
);
