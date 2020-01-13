import {call, put, takeEvery, all} from 'redux-saga/effects'
import {MySubscriptionsAction, MySubscriptionsActionConst} from "./my-subscriptions-action";
import {SubscriptionService} from "../../../../services/my-subscriptions/service";
import {LecturesService} from "../../../../services/lectures/service";
import {ServiceResponse} from "../../../../services/model";
import {Helpers} from "../../../../helpers";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../services/lectures/model";
import {SubscribeResponseModel} from "../../../../services/my-subscriptions/model";

function *getSubscriptionsTypesLectures() {

  const [lectures, types, subscriptions] = yield all([
    call(() => LecturesService.getLectures()),
    call(() => LecturesService.getTypes()),
    call(() => SubscriptionService.getSubscriptions()),
  ]);

  const result: ServiceResponse<{lectures: LectureResponseModel[], types: LectureTypeResponseModel[], subscriptions: SubscribeResponseModel[]}> = {
    status: Helpers.checkStatusMultipleResponse([lectures, types, subscriptions]),
    response: {
      lectures: lectures.response,
      types: types.response,
      subscriptions: subscriptions.response
    }
  };

  yield put(MySubscriptionsAction.setLecturesTypesSubscriptions(result));

}

export const MySubscriptionsListSaga = [
  takeEvery(MySubscriptionsActionConst.FETCH_LECTURES_TYPES_SUBSCRIPTIONS_REQUEST, getSubscriptionsTypesLectures),
];
