import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app') 
)