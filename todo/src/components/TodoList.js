import React from "react";

const TodoList = props => (
  <div>
    <p>
      {props.todos.map(todo => (
        <li key={todo.id}>
        {todo.value}</li>
      ))}
    </p>
  </div>
);

export default TodoList;
