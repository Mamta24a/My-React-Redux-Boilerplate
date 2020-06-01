import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import userReducer from './reducers/userReducer';
import userState from './reducers/initialStates/userStates';

const allReducer = combineReducers({
  userState: userReducer,
});

const composedEnhancers = compose(applyMiddleware(thunk));

const iniState = {
  userState,
}

const store = createStore(
  allReducer,
  iniState,
  composedEnhancers
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
