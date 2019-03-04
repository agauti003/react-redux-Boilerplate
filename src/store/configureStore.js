/* eslint-disable func-names */
/* @flow */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/users';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
)(createStore);

const configureStore = function (initialState) {
  if (initialState === void 0) {
    initialState = {};
  }
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
