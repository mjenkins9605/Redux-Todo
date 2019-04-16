import { ADD_TODO, TODO_COMPLETED } from "../actions/index";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            value: action.value,
            completed: false
          }
        ]
      };
    case TODO_COMPLETED:
      return {
        todos: state.todos.map(todo => {
          return todo.value === action.entry.value
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      };
    default:
      return state;
  }
};
