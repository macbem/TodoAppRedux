import React, { PropTypes, Component } from 'react';
import {
  TodoItemIdle,
  TodoCheckbox,
  TodoTextLabel,
  TodoRemoveButton,
  TodoItemEditing
} from '../styled-components';
import TodoInput from './TodoInput';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isBeingEdited: false };
  }

  handleDoubleClick = evt => this.setState({ isBeingEdited: true });

  handleTodoEdit = text => {
    this.props.editTodo(this.props.todoId, text);
    this.setState({ isBeingEdited: false });
  };

  abortEditing = () => this.setState({ isBeingEdited: false });

  render() {
    const {
      completed,
      toggleCompleted,
      removeTodo,
      todoId,
      text
    } = this.props;

    if (!this.state.isBeingEdited) {
      return (
        <TodoItemIdle>
          <TodoCheckbox
            type="checkbox"
            onChange={() => toggleCompleted(todoId)}
            checked={completed ? true : false}
          />
          <TodoTextLabel
            completed={completed}
            onDoubleClick={this.handleDoubleClick}
          >
            {text}
          </TodoTextLabel>
          <TodoRemoveButton onClick={() => removeTodo(todoId)} />
        </TodoItemIdle>
      );
    } else {
      return (
        <TodoItemEditing>
          <TodoInput
            saveTodo={this.handleTodoEdit}
            abortEditing={this.abortEditing}
            removeTodo={removeTodo}
            todoId={todoId}
            text={text}
          />
        </TodoItemEditing>
      );
    }
  }
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  todoId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};
