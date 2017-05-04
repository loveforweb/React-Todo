import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

// var actions = require ('actions');
import { addToDo, setSearchText, toggleShowCompleted } from 'actions';
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState())
})

store.dispatch(addToDo('Clean garden'));
store.dispatch(setSearchText('garden'));
store.dispatch(toggleShowCompleted());

// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app') 
);
