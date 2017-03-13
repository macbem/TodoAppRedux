import React, { PropTypes, Component } from 'react';
import {
  FooterContainer,
  ClearCompletedButton,
  TodoCount
} from '../styled-components';
import Filters from './Filters';

export default class Footer extends Component {
  renderClearCompletedButton = completedTodosCount => {
    if (completedTodosCount > 0) {
      return (
        <ClearCompletedButton onClick={this.props.clearCompleted}>
          Clear completed
        </ClearCompletedButton>
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
      <FooterContainer>
        <TodoCount>
          {`${todosLeft} item${todosLeft === 1 ? '' : 's'} left`}
        </TodoCount>
        <Filters filter={filter} switchFilter={switchFilter} />
        {this.renderClearCompletedButton(completedTodosCount)}
      </FooterContainer>
    );
  }
}

Footer.PropTypes = {
  switchFilter: PropTypes.func.isRequired,
  clearCompletedTodos: PropTypes.func.isRequired
};
