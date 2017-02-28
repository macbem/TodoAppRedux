import uuid from 'uuid';

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    todoId: uuid.v4(),
    text
  }
};

export const toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    todoId
  }
};

export const finishAllTodos = () => {
  return {
    type: 'FINISH_ALL_TODOS'
  }
};

export const clearCompletedTodos = () => {
  return {
    type: 'CLEAR_COMPLETED_TODOS'
  }
};

export const switchFilter = (filter) => {
  return {
    type: 'SWITCH_FILTER',
    filter
  }
};