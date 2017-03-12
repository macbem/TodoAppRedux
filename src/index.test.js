import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './containers/App';

describe('redux related tests', () => {
  test('creating a store', () => {
    expect(typeof createStore(rootReducer)).toBe('object');
  });
});

describe('rendering the app', () => {
  test("doesn't crash", () => {
    let store = createStore(rootReducer);
    const mountPoint = document.createElement('div');

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      mountPoint
    );
  });
});
