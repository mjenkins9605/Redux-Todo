import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { addTodo, todoCompleted } from "./actions/index";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput addTodo={this.props.addTodo} />
        <TodoList
          todos={this.props.todos}
          todoCompleted={this.props.todoCompleted}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, todoCompleted }
)(App);
