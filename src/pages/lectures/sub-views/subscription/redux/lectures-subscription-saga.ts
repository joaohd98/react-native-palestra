import {call, put, takeEvery} from 'redux-saga/effects'
import {LecturesService} from "../../../../../services/lectures/service";
import {LectureSubscriptionPageAction, LectureSubscriptionPageActionConst} from "./lectures-subscription-action";

function *subscribeLecture(request: any) {

  console.log(request);
  console.log(request.payload.subscribe);
  const response = yield call(() => LecturesService.lectureSubscribe(request.payload.subscribe));
  console.log(response);

  yield put(LectureSubscriptionPageAction.subscribeFetchFinish(response));

}

export const LectureSubscriptionListSaga = [
  takeEvery(LectureSubscriptionPageActionConst.SUBSCRIBE_FETCH_REQUESTED, (params: any) => subscribeLecture(params)),
];
