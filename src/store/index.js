/* eslint-disable import/no-cycle */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddeware = createSagaMiddleware();

const middlewares = [sagaMiddeware, routerMiddleware(history)];

const store = createStore(rootReducer(history), applyMiddleware(...middlewares));

sagaMiddeware.run(rootSaga);

export default store;
