import React, { PropTypes } from 'react';
import TodoInput from './TodoInput';

const Header = ({ finishAllTodos, addTodo }) => (
  <div>
    <button onClick={finishAllTodos}>Mark all as done</button>
    <TodoInput newTodoInput={true} text="" saveTodo={addTodo} />
  </div>
);

Header.PropTypes = {
  finishAllTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default Header;
