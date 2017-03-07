const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          todoId: action.todoId,
          text: action.text,
          completed: false,
          isBeingEdited: false
        }
      ];
    case 'REMOVE_TODO':
      return state.filter(item => item.todoId !== action.todoId);
    case 'SET_EDITING_FLAG':
      return state.map(element => {
        if (element.todoId === action.todoId) {
          return {
            ...element,
            completed: !element.completed
          };
        } else {
          return element;
        }
      });
    case 'TOGGLE_TODO':
      return state.map(element => {
        if (element.todoId === action.todoId) {
          return {
            ...element,
            completed: !element.completed
          };
        } else {
          return element;
        }
      });
    case 'FINISH_ALL_TODOS':
      return state.map(element => {
        return {
          ...element,
          completed: true
        };
      });
    case 'CLEAR_COMPLETED_TODOS':
      return state.filter(element => !element.completed);
    default:
      return state;
  }
};

export default todos;
