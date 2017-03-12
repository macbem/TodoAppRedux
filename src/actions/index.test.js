import { addTodo, toggleTodo, switchFilter, editTodo } from './index';

describe('creates a proper action object', () => {
  test('adding a todo', () => {
    expect(addTodo('hello')).toEqual(
      expect.objectContaining({
        type: 'ADD_TODO',
        todoId: expect.any(String),
        text: 'hello'
      })
    );
  });

  test('editing a todo', () => {
    expect(editTodo('test-id', 'new text')).toEqual({
      type: 'EDIT_TODO',
      todoId: 'test-id',
      text: 'new text'
    });
  });

  test('toggling a todo', () => {
    expect(toggleTodo('test-id')).toEqual({
      type: 'TOGGLE_TODO',
      todoId: 'test-id'
    });
  });

  test('setting a filter', () => {
    expect(switchFilter('all')).toEqual({
      type: 'SWITCH_FILTER',
      filter: 'all'
    });
  });
});
