import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

export const sagaMiddleware = createSagaMiddleware();

export const rootSaga = function* root() {
  yield all([]);
};
