import uuid from 'uuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  todoId: uuid.v4(),
  text
});

export const editTodo = (todoId, text) => ({
  type: 'EDIT_TODO',
  todoId,
  text
});

export const removeTodo = todoId => ({
  type: 'REMOVE_TODO',
  todoId
});

export const toggleTodo = todoId => ({
  type: 'TOGGLE_TODO',
  todoId
});

export const finishAllTodos = () => ({
  type: 'FINISH_ALL_TODOS'
});

export const clearCompletedTodos = () => ({
  type: 'CLEAR_COMPLETED_TODOS'
});

export const switchFilter = filter => ({
  type: 'SWITCH_FILTER',
  filter
});
