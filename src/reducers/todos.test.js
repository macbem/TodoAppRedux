import todos from './todos';
import deepFreeze from 'deep-freeze'; // used for immutability tests
import {
  addTodo,
  toggleTodo,
  finishAllTodos,
  clearCompletedTodos,
  removeTodo,
  setEditingFlag
} from '../actions';

describe('toggling props', () => {
  test("'editing' flag is set properly when false", () => {
    const stateBefore = [
      {
        todoId: 'test-uuid',
        text: 'test-text',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: 'test-uuid-2',
        text: 'test-text',
        completed: true,
        isBeingEdited: false
      }
    ];

    deepFreeze(stateBefore);

    const stateAfter = [
      {
        todoId: 'test-uuid',
        text: 'test-text',
        completed: true,
        isBeingEdited: true
      },
      {
        todoId: 'test-uuid-2',
        text: 'test-text',
        completed: true,
        isBeingEdited: false
      }
    ];
    expect(todos(stateBefore, setEditingFlag('test-uuid'))).toEqual(stateAfter);
  });

  test("toggles a todo 'completed' state properly", () => {
    const stateBefore = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: false,
        isBeingEdited: false
      }
    ];

    const stateAfter = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: true,
        isBeingEdited: false
      }
    ];

    deepFreeze(stateBefore);

    expect(todos(stateBefore, toggleTodo('1'))).toEqual(stateAfter);
  });

  test('marks all tasks as done', () => {
    const stateBefore = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: '2',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '3',
        text: 'test',
        completed: true,
        isBeingEdited: false
      }
    ];

    deepFreeze(stateBefore);

    const stateAfter = [
      {
        todoId: '0',
        text: 'test',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: '2',
        text: 'test',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: '3',
        text: 'test',
        completed: true,
        isBeingEdited: false
      }
    ];

    expect(todos(stateBefore, finishAllTodos())).toEqual(stateAfter);
  });
});

describe('adding / removing items', () => {
  test('creates a new todo', () => {
    const stateBefore = [
      {
        todoId: 'test-uuid',
        text: 'test-text',
        completed: true,
        isBeingEdited: false
      }
    ];

    deepFreeze(stateBefore);

    expect(todos(stateBefore, addTodo('test'))).toContainEqual({
      todoId: expect.any(String),
      text: 'test',
      completed: false,
      isBeingEdited: false
    });

    expect(todos(stateBefore, addTodo('test'))).toHaveLength(2);
  });

  test('removes a certain todo entry', () => {
    const stateBefore = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: '2',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '3',
        text: 'test',
        completed: true,
        isBeingEdited: false
      }
    ];

    deepFreeze(stateBefore);

    const stateAfter = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: '3',
        text: 'test',
        completed: true,
        isBeingEdited: false
      }
    ];

    expect(todos(stateBefore, removeTodo('2'))).toEqual(stateAfter);
  });

  test('removes all completed tasks (only the completed ones)', () => {
    const stateBefore = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: true,
        isBeingEdited: false
      },
      {
        todoId: '2',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '3',
        text: 'test',
        completed: true,
        isBeingEdited: false
      }
    ];

    deepFreeze(stateBefore);

    const stateAfter = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '2',
        text: 'test',
        completed: false,
        isBeingEdited: false
      }
    ];

    expect(todos(stateBefore, clearCompletedTodos())).toEqual(stateAfter);
  });
});

describe('ignoring actions', () => {
  test('returns the previous state in case of an invalid action type', () => {
    const stateBefore = [
      {
        todoId: '0',
        text: 'test',
        completed: false,
        isBeingEdited: false
      },
      {
        todoId: '1',
        text: 'test',
        completed: false,
        isBeingEdited: false
      }
    ];

    deepFreeze(stateBefore);

    const action = {
      type: String(Math.random()),
      todoId: '0',
      text: 'test-text-value',
      completed: true,
      isBeingEdited: false
    };

    expect(todos(stateBefore, action)).toEqual(stateBefore);
  });

  test("'editing' flag is not modified when true", () => {
    const stateBefore = [
      {
        todoId: 'test-uuid',
        text: 'test-text',
        completed: true,
        isBeingEdited: true
      }
    ];

    deepFreeze(stateBefore);

    expect(todos(stateBefore, setEditingFlag('test-uuid'))).toEqual(
      stateBefore
    );
  });
});
