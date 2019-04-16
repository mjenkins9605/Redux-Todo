import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoList from './reducers/index';


ReactDOM.render(
    <Provider store={createStore(todoList)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
