const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          todoId: action.todoId,
          text: action.text,
          completed: false
        }
      ];

    case 'EDIT_TODO':
      return state.map(
        element =>
          element.todoId === action.todoId
            ? { ...element, text: action.text }
            : element
      );

    case 'REMOVE_TODO':
      return state.filter(item => item.todoId !== action.todoId);

    case 'TOGGLE_TODO':
      return state.map(
        element =>
          element.todoId === action.todoId
            ? { ...element, completed: !element.completed }
            : element
      );

    case 'FINISH_ALL_TODOS':
      const areAllTodosDone = state.every(
        element => element.completed
      );
      return state.map(element => ({
        ...element,
        completed: !areAllTodosDone
      }));

    case 'CLEAR_COMPLETED_TODOS':
      return state.filter(element => !element.completed);

    default:
      return state;
  }
};

export default todos;
