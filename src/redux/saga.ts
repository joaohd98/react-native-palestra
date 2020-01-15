import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import {lecturesListSaga} from "../pages/lectures/view/redux/lectures-page-saga";
import {MySubscriptionsListSaga} from "../pages/my-subscriptions/view/redux/my-subscriptions-saga";
import {LectureSubscriptionListSaga} from "../pages/lectures/sub-views/subscription/redux/lectures-subscription-saga";

export const sagaMiddleware = createSagaMiddleware();

export const rootSaga = function* root() {
  yield all([
    ...lecturesListSaga,
    ...MySubscriptionsListSaga,
    ...LectureSubscriptionListSaga
  ]);
};
