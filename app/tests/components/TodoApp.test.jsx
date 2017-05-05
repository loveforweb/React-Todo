import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import { configure } from 'configureStore';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
        var store = configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        );

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

        expect(todoList.length).toEqual(1);
    });
});