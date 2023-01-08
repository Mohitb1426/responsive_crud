import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleWares = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleWares),
);
epicMiddleWares.run(rootEpic);
export default store;
