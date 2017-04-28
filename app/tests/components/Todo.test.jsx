import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';

import Todo from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        const todoData = {
            id: 111,
            text: 'test features',
            completed: true
        }

        const spy = expect.createSpy();

        const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

        const $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(111);

    });
});