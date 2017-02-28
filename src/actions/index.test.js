import { addTodo, toggleTodo, switchFilter } from './index';

test('Test if adding a todo creates an action object of a certain shape', () => {
  expect(addTodo('hello')).toEqual(expect.objectContaining({
      type: 'ADD_TODO',
      todoId: expect.any(String),
      text: 'hello'
    })
  );
});

test('Test if toggling a todo creates a proper action object', () => {
  expect(toggleTodo('test-id')).toEqual({
    type: 'TOGGLE_TODO',
    todoId: 'test-id'
  });
});

test('Test if setting a filter creates a proper action object', () => {
  expect(switchFilter('all')).toEqual({
    type: 'SWITCH_FILTER',
    filter: 'all'
  });
});