import React, { PropTypes } from 'react';
import TodoInput from './TodoInput';
import { Title, AppHeader } from '../styled-components';

const Header = ({ finishAllTodos, addTodo }) => (
  <AppHeader>
    <Title>todos</Title>
    <TodoInput newTodoInput={true} text="" saveTodo={addTodo} />
  </AppHeader>
);

Header.PropTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
