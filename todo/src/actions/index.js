export const ADD_TODO = 'ADD_TODO';
export const TODO_COMPLETED = 'TODO_COMPLETED';

let currentID = 0;
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
            id: currentID++,
            value: text,
            completed: false
    };
}

export const todoCompleted = () => {
    return {
        type: TODO_COMPLETED,
    };
}