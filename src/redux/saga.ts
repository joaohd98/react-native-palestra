import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import {lecturesListSaga} from "../pages/lectures/view/redux/lectures-page-saga";

export const sagaMiddleware = createSagaMiddleware();

export const rootSaga = function* root() {
  yield all([
    ...lecturesListSaga
  ]);
};
