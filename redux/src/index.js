import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';

// function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action);
//       console.log('Middleware: ', store.getState());
//       return result;
//     };
//   };
// }

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware: ', store.getState());
  return result;
};

// const store = createStore(rootReducer.bind(this, {counter: 10}, {type: '111'}));
const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware, 
  reduxThunk
  ));
// const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
