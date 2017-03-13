import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  AppWrapperElement,
  injectGlobalStyles
} from '../styled-components';
import * as actions from '../actions';

injectGlobalStyles();

class App extends Component {
  todosLeft = () =>
    this.props.todos.reduce(
      (itemsLeft, todo) => todo.completed ? itemsLeft : itemsLeft + 1,
      0
    );

  renderMainAppSection = () => {
    if (this.props.todos.length > 0) {
      return (
        <div>
          <TodoList
            filter={this.props.filter}
            todos={this.props.todos}
            actions={this.props.actions}
          />
          <Footer
            filter={this.props.filter}
            switchFilter={this.props.actions.switchFilter}
            todos={this.props.todos}
            todosLeft={this.todosLeft()}
            clearCompleted={this.props.actions.clearCompletedTodos}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <AppWrapperElement>
        <Header addTodo={this.props.actions.addTodo} />
        {this.renderMainAppSection()}
      </AppWrapperElement>
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
