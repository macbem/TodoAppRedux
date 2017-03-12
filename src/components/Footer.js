import React, { PropTypes, Component } from 'react';
import Filters from './Filters';

export default class Footer extends Component {
  renderClearCompletedButton = completedTodosCount => {
    if (completedTodosCount > 0) {
      return (
        <button onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      );
    }
  };
  render() {
    const {
      todosLeft,
      switchFilter,
      filter
    } = this.props;

    const completedTodosCount = this.props.todos.length - todosLeft;

    return (
      <div>
        <span>
          {`${todosLeft} item${todosLeft === 1 ? '' : 's'} left`}
        </span>
        <Filters filter={filter} switchFilter={switchFilter} />
        {this.renderClearCompletedButton(completedTodosCount)}
      </div>
    );
  }
}

Footer.PropTypes = {
  switchFilter: PropTypes.func.isRequired,
  clearCompletedTodos: PropTypes.func.isRequired
};
