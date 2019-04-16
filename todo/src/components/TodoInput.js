import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }
  handleChange = event => {
    this.setState({ todoInput: event.target.value });
  };
  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.addTodo(this.state.todoInput);
          this.setState({ todoInput: "" });
        }}
      >
        <input
          type="text"
          placeholder="Add Todo"
          onChange={this.handleChange}
          value={this.state.todoInput}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoInput;
