import React, { PropTypes } from 'react';
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

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.todoId}
          toggleCompleted={actions.toggleTodo}
          editTodo={actions.editTodo}
          removeTodo={actions.removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todoId: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;
