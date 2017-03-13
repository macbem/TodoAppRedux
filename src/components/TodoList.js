import React, { PropTypes } from 'react';
import {
  ToggleAllButton,
  TodoItemList,
  MainAppSection
} from '../styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ todos, actions, filter }) => {
  const todoFilter = item => {
    switch (filter) {
      case 'SHOW_ALL':
        return item;
      case 'SHOW_ACTIVE':
        return !item.completed;
      case 'SHOW_COMPLETED':
        return item.completed;
      default:
        return item;
    }
  };

  const filteredTodos = todos.filter(todoFilter);

  const { finishAllTodos } = actions;

  return (
    <MainAppSection>
      <ToggleAllButton onClick={finishAllTodos} />
      <TodoItemList>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.todoId}
            toggleCompleted={actions.toggleTodo}
            editTodo={actions.editTodo}
            removeTodo={actions.removeTodo}
            {...todo}
          />
        ))}
      </TodoItemList>
    </MainAppSection>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todoId: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoList;
