import expect from 'expect';
import df from 'deep-freeze-strict';

import { searchTextReducer, showCompletedReducer } from 'reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'some search text'
            };

            var res = searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            var res = showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });
});