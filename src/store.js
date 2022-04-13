import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logMiddlewere = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddlewere = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddlewere, logMiddlewere));

export default store;
