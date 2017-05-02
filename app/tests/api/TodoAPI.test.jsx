import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('sould exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('set todos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 12,
                text: 'test all files',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            const actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            const badTodos = {
                a: 'b'
            }

            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);

        });
    });

    describe('get todos', () => {
        it('should return empty array for bad localStorage data', () => {
            const actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage', () => {
            var todos = [{
                id: 12,
                text: 'test all files',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos))

            const actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        const todos = [{
            id: 1, 
            text: 'Some text',
            completed: true
        },{
            id: 2, 
            text: 'another text',
            completed: false
        },{
            id: 3, 
            text: 'Some text',
            completed: true
        }]

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return none completed items if showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todo if search text is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

    });
})