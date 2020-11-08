import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import searchReducer from './store/reducers/searchReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'


const store = createStore(searchReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);

ReactDOM.render(
  app,
  document.getElementById('root')
);

