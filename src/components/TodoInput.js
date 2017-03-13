import React, { PropTypes, Component } from 'react';
import { TodoInputElement } from '../styled-components';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleChange = evt => {
    this.setState({
      text: evt.target.value
    });
  };

  handleBlur = evt => {
    if (!this.props.newTodoInput) {
      const text = evt.target.value.trim();
      this.props.saveTodo(text);
    }
  };

  handleKeydown = evt => {
    if (evt.keyCode === 13) {
      const text = evt.target.value.trim();
      if (this.props.newTodoInput) {
        if (text.length) {
          this.props.saveTodo(text);
          this.setState({ text: '' });
        }
      } else {
        if (text.length) this.props.saveTodo(text);
        else this.props.removeTodo(this.props.todoId);
      }
    } else if (evt.keyCode === 27 && !this.props.newTodoInput) {
      this.props.abortEditing();
      this.setState({ text: '' });
    }
  };

  render() {
    const { newTodoInput } = this.props;
    return (
      <TodoInputElement
        type="text"
        value={this.state.text}
        placeholder="What needs to be done?"
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeydown}
        onChange={this.handleChange}
        autoFocus
        newTodoInput={newTodoInput}
      />
    );
  }
}

TodoInput.propTypes = {
  text: PropTypes.string.isRequired,
  saveTodo: PropTypes.func.isRequired,
  abortEditing: PropTypes.func,
  newTodoInput: PropTypes.bool
};
