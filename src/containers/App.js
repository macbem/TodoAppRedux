import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import * as actions from '../actions';

class App extends Component {
  todosLeft = () =>
    this.props.todos.reduce(
      (itemsLeft, todo) => todo.completed ? itemsLeft : itemsLeft + 1,
      0
    );

  renderFooter = () => {
    if (this.props.todos.length > 0) {
      return (
        <Footer
          filter={this.props.filter}
          switchFilter={this.props.actions.switchFilter}
          todos={this.props.todos}
          todosLeft={this.todosLeft()}
          clearCompleted={this.props.actions.clearCompletedTodos}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <Header
          addTodo={this.props.actions.addTodo}
          finishAllTodos={this.props.actions.finishAllTodos}
        />
        <TodoList
          filter={this.props.filter}
          todos={this.props.todos}
          actions={this.props.actions}
        />
        {this.renderFooter()}
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
