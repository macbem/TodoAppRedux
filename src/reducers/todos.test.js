import todos from './todos';
import deepFreeze from 'deep-freeze'; // used for immutability tests
import { addTodo, toggleTodo, finishAllTodos, clearCompletedTodos } from '../actions';

test('creates a new todo', () => {
  const stateBefore = [{
    todoId: 'test-uuid',
    text: 'test-text',
    completed: true
  }];

  deepFreeze(stateBefore);

  expect(todos( stateBefore, addTodo('test') )).toContainEqual({
    todoId: expect.any(String),
    text: 'test',
    completed: false
  });

  expect(todos( stateBefore, addTodo('test') )).toHaveLength(2);
});

test('toggles a todo \'completed\' state properly', () => {
  const stateBefore = [{
    todoId: '0',
    text: 'test',
    completed: false
  }, {
    todoId: '1',
    text: 'test',
    completed: false
  }];

  const stateAfter = [{
    todoId: '0',
    text: 'test',
    completed: false
  }, {
    todoId: '1',
    text: 'test',
    completed: true
  }];

  deepFreeze(stateBefore);

  expect(todos( stateBefore, toggleTodo('1') )).toEqual(stateAfter);
});

test('returns the previous state in case of an invalid action type', () => {
  const stateBefore = [{
    todoId: '0',
    text: 'test',
    completed: false
  }, {
    todoId: '1',
    text: 'test',
    completed: false
  }];

  deepFreeze(stateBefore);

  const action = {
    type: String(Math.random()),
    todoId: '0',
    text: 'test-text-value',
    completed: true
  };

  expect(todos( stateBefore, action ))
  .toEqual(stateBefore);
});

test('removes all completed tasks (only the completed ones)', () => {
  const stateBefore = [{
    todoId: '0',
    text: 'test',
    completed: false
  }, {
    todoId: '1',
    text: 'test',
    completed: true
  }, {
    todoId: '2',
    text: 'test',
    completed: false
  }, {
    todoId: '3',
    text: 'test',
    completed: true
  }];

  deepFreeze(stateBefore);

  const stateAfter = [{
    todoId: '0',
    text: 'test',
    completed: false
  }, {
    todoId: '2',
    text: 'test',
    completed: false
  }];

  expect(todos( stateBefore, clearCompletedTodos() )).toEqual(stateAfter);
});

test('marks all tasks as done', () => {
  const stateBefore = [{
    todoId: '0',
    text: 'test',
    completed: false
  }, {
    todoId: '1',
    text: 'test',
    completed: true
  }, {
    todoId: '2',
    text: 'test',
    completed: false
  }, {
    todoId: '3',
    text: 'test',
    completed: true
  }];

  deepFreeze(stateBefore);

  const stateAfter = [{
    todoId: '0',
    text: 'test',
    completed: true
  }, {
    todoId: '1',
    text: 'test',
    completed: true
  }, {
    todoId: '2',
    text: 'test',
    completed: true
  }, {
    todoId: '3',
    text: 'test',
    completed: true
  }];

  expect(todos( stateBefore, finishAllTodos() )).toEqual(stateAfter);
});
