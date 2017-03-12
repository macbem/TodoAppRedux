import React, { PropTypes, Component } from 'react';
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
        <li>
          <i
            onClick={() => toggleCompleted(todoId)}
            className={
              `fa ${completed ? 'fa-check-circle' : 'fa-circle-o'}`
            }
          />
          <span onDoubleClick={this.handleDoubleClick}>{text}</span>
          <button onClick={() => removeTodo(todoId)}>
            Remove
          </button>
        </li>
      );
    } else {
      return (
        <li>
          <TodoInput
            saveTodo={this.handleTodoEdit}
            abortEditing={this.abortEditing}
            text={text}
          />
        </li>
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
