import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if the values entered are valid', () => {
        const todoText = 'Check mail';
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddTodo if there is no value', () => {
        const todoText = '';
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    })
});