import $ from 'jquery';

module.exports = {
    setTodos: function (todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos: function () {
        const stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {

        }

        return $.isArray(todos) ? todos : [];
    },

    filterTodos: function (todos, showCompleted, searchText) {
        let filteredTodos = todos;
        console.log(searchText.length);

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });


        filteredTodos = filteredTodos.filter((todo) => {
            let todoText = todo.text.toLowerCase();
            return searchText.length === 0 || todoText.indexOf(searchText) > -1
        });

        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1
            } else if (a.completed && !b.completed) {
                return 1
            } else {
                return 0
            }
        });

        return filteredTodos;
    }

}