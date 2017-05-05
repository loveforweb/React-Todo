import expect from 'expect';
// var actions = require('actions');
import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from 'actions';

describe('Actions', () => {
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text'
        }

        var res = setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Clean kitchen'
        }

        var res = addTodo(action.text);

        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }

        var res = toggleShowCompleted(action);

        expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: '123ABC'
        }

        var res = toggleTodo(action.id);

        expect(res).toEqual(action);
    });
});